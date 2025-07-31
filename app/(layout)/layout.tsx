"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router"; // Attention : pas 'next/navigation' ici !
import ClassicLoader from "@/components/ui/loader";
import { BaseLayout } from "@/features/layout/base-layout";
import type { PropsWithChildren } from "react";

export default function RouteLayout(props: PropsWithChildren) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <ClassicLoader />
      </div>
    );
  }

  return <BaseLayout>{props.children}</BaseLayout>;
}