import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
precision highp float;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const fragmentShader = `
precision highp float;
varying vec2 vUv;
uniform float time;
uniform vec4 resolution;

float PI = 3.14159265359;

mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    return mat4(
        oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
        oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
        oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
        0.0, 0.0, 0.0, 1.0);
}

vec3 rotate(vec3 v, vec3 axis, float angle) {
    return (rotationMatrix(axis, angle) * vec4(v, 1.0)).xyz;
}

float sphereSDF(vec3 p, float r) {
    return length(p) - r;
}

float smin(float a, float b, float k) {
    float h = max(k - abs(a - b), 0.0) / k;
    return min(a, b) - h * h * h * k * (1.0 / 6.0);
}

float sdf(vec3 p) {
    vec3 p1 = rotate(p, vec3(0, 0, 1), time * 0.3);
    vec3 p2 = rotate(p, vec3(1, 0, 0), -time * 0.35);
    vec3 p3 = rotate(p, vec3(0, 1, 0), time * 0.25);
    vec3 p4 = rotate(p, vec3(1, 0, 1), -time * 0.4);
    vec3 p5 = rotate(p, vec3(0, 1, 1), time * 0.2);
    float d = sphereSDF(p1 - vec3(-0.5, 0.5, 0.0), 0.4); // Déplacé vers le haut, taille augmentée
    d = smin(d, sphereSDF(p2 - vec3(0.5, 0.7, 0.0), 0.35), 0.25); // Déplacé vers le haut
    d = smin(d, sphereSDF(p3 - vec3(-0.8, 0.6, 0.0), 0.3), 0.25); // Déplacé vers le haut
    d = smin(d, sphereSDF(p4 - vec3(0.2, 0.8, 0.0), 0.35), 0.25); // Nouvelle bulle, haut
    d = smin(d, sphereSDF(p5 - vec3(0.0, 0.9, 0.0), 0.3), 0.25); // Nouvelle bulle, haut
    d = smin(d, sphereSDF(p1 - vec3(-0.3, 0.4, 0.0), 0.3), 0.25); // Nouvelle bulle
    d = smin(d, sphereSDF(p2 - vec3(0.7, 0.5, 0.0), 0.3), 0.25); // Nouvelle bulle
    d = smin(d, sphereSDF(p3 - vec3(-0.6, 0.7, 0.0), 0.25), 0.25); // Nouvelle bulle
    d = smin(d, sphereSDF(p4 - vec3(0.4, 0.6, 0.0), 0.25), 0.25); // Nouvelle bulle
    d = smin(d, sphereSDF(p5 - vec3(-0.1, 0.8, 0.0), 0.3), 0.25); // Nouvelle bulle
    return d;
}

vec3 getNormal(vec3 p) {
    float h = 0.001;
    return normalize(vec3(
        sdf(p + vec3(h, 0, 0)) - sdf(p - vec3(h, 0, 0)),
        sdf(p + vec3(0, h, 0)) - sdf(p - vec3(0, h, 0)),
        sdf(p + vec3(0, 0, h)) - sdf(p - vec3(0, 0, h))
    ));
}

float rayMarch(vec3 ro, vec3 rd) {
    float t = 0.0;
    for (int i = 0; i < 60; i++) { // Réduit à 60 pour Safari
        vec3 p = ro + rd * t;
        float dist = sdf(p);
        if (dist < 0.001) return t;
        t += dist;
        if (t > 50.0) break; // Réduit max distance pour performance
    }
    return -1.0;
}

void main() {
    vec2 uv = (vUv - 0.5) * resolution.zw + 0.5;
    vec3 ro = vec3(0.0, 0.0, 5.0);
    vec3 rd = normalize(vec3((vUv - 0.5) * resolution.zw, -1.0));

    float t = rayMarch(ro, rd);
    if (t > 0.0) {
        vec3 p = ro + rd * t;
        vec3 normal = getNormal(p);

        float fresnel = pow(1.0 - dot(-rd, normal), 4.0); // Fresnel renforcé
        float edge = 1.0 - pow(dot(-rd, normal), 0.5);

        vec3 baseColor = vec3(0.95, 0.95, 0.95); // Gris clair pour effet verre
        vec3 highlight = vec3(1.0, 1.0, 1.0); // Reflet blanc brillant
        vec3 color = mix(baseColor, highlight, fresnel * 0.6); // Gradient plus marqué
        float alpha = edge * 0.4 + fresnel * 0.5; // Transparence vitreuse
        // Ajout d’un léger flou zoom inspiré de LiquidButton
        float blurFactor = 0.05 * sin(time * 0.5 + uv.x + uv.y); // Flou dynamique
        color = mix(color, vec3(1.0), blurFactor);
        alpha = clamp(alpha + blurFactor * 0.1, 0.0, 0.9); // Limiter l’alpha

        gl_FragColor = vec4(color, alpha);
    } else {
        discard;
    }
}
`;

function LavaLampShader() {
  const meshRef = useRef();
  const { size } = useThree();

  const uniforms = useMemo(() => ({
    time: { value: 0 },
    resolution: { value: new THREE.Vector4() },
  }), []);

  useEffect(() => {
    const { width, height } = size;
    let a1, a2;
    const aspect = 1;
    if (height / width > aspect) {
      a1 = (width / height) * aspect;
      a2 = 1;
    } else {
      a1 = 1;
      a2 = (height / width) / aspect;
    }
    uniforms.resolution.value.set(width, height, a1, a2);
  }, [size]);

  useFrame(({ clock }) => {
    uniforms.time.value = clock.getElapsedTime();
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

export function LiquidBubbles() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <Canvas
        orthographic
        camera={{ position: [0, 0, 1], zoom: 1 }}
        gl={{ alpha: true, failIfMajorPerformanceCaveat: false }}
      >
        <LavaLampShader />
      </Canvas>
    </div>
  );
}