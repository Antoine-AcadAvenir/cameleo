import { TailwindIndicator } from "@/components/utils/tailwind-indicator";
import MouseLight from "@/components/ui/MouseLight";
import { FloatingLegalFooter } from "@/features/legal/floating-legal-footer";
import { NextTopLoader } from "@/features/page/next-top-loader";
import { ServerToaster } from "@/features/server-sonner/server-toaster";
import { getServerUrl } from "@/lib/server-url";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/site-config";
import type { LayoutParams } from "@/types/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Suspense, type ReactNode } from "react";
import "./globals.css";
import { Providers } from "./providers";
import LoaderClient from "@/components/ui/LoaderClient"; // composant client de transition

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description,
  metadataBase: new URL(getServerUrl()),
};

const CaptionFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-caption",
});

const GeistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
  modal,
}: LayoutParams & { modal?: ReactNode }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          "bg-background h-full font-sans antialiased",
          GeistMono.variable,
          GeistSans.variable,
          CaptionFont.variable,
        )}
      >
        {/* ✅ Loader HTML visible dès le premier milliseconde */}
        <div
          id="global-loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <div className="w-8 h-8 border-4 border-primary border-t-transparent animate-spin rounded-full"></div>
        </div>

        {/* ✅ Contenu réel avec loader React client */}
        <LoaderClient>
          <NuqsAdapter>
            <Providers>
              <MouseLight />
              <NextTopLoader
                delay={100}
                showSpinner={false}
                color="hsl(var(--primary))"
              />
              {children}
              {modal}
              <TailwindIndicator />
              <FloatingLegalFooter />
              <Suspense>
                <ServerToaster />
              </Suspense>
            </Providers>
          </NuqsAdapter>
        </LoaderClient>
      </body>
    </html>
  );
}