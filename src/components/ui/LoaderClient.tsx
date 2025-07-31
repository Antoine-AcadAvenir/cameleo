"use client";

import { useEffect, useState } from "react";
import ClassicLoader from "./loader"; // ou change si tu as un autre loader

export default function LoaderClient({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1500);

    // Cache le loader HTML global
    const globalLoader = document.getElementById("global-loader");
    if (globalLoader) {
      globalLoader.style.display = "none";
    }

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
        <ClassicLoader />
      </div>
    );
  }

  return <>{children}</>;
}