"use client";

import { LogoSvg } from "@/components/svg/logo-svg";
import { SiteConfig } from "@/site-config";
import { motion, useMotionValue, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AuthButtonClient } from "../auth/auth-button-client";
import { ThemeToggle } from "../theme/theme-toggle";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

function useBoundedScroll(threshold: number) {
  const { scrollY } = useScroll();
  const scrollYBounded = useMotionValue(0);
  const scrollYBoundedProgress = useTransform(scrollYBounded, [0, threshold], [0, 1]);

  useEffect(() => {
    const onChange = (current: number) => {
      const previous = scrollY.getPrevious() ?? 0;
      const diff = current - previous;
      const newScrollYBounded = scrollYBounded.get() + diff;
      scrollYBounded.set(clamp(newScrollYBounded, 0, threshold));
    };

    const deleteEvent = scrollY.on("change", onChange);

    const listener = () => {
      const currentScroll = window.scrollY;
      onChange(currentScroll);
    };

    window.addEventListener("scroll", listener);

    return () => {
      deleteEvent();
      window.removeEventListener("scroll", listener);
    };
  }, [threshold, scrollY, scrollYBounded]);

  return { scrollYBounded, scrollYBoundedProgress };
}

export function LandingHeader() {
  const { scrollYBoundedProgress } = useBoundedScroll(400);
  const router = useRouter();
  const scrollYBoundedProgressDelayed = useTransform(scrollYBoundedProgress, [0, 0.75, 1], [0, 0, 1]);

  return (
    <motion.header
      style={{
        height: useTransform(scrollYBoundedProgressDelayed, [0, 1], [80, 50]),
      }}
      className="fixed inset-x-0 z-50 flex h-20 w-screen shadow backdrop-blur-md"
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo et titre */}
        <div className="flex items-center gap-1">
          <LogoSvg
            size={24}
            onClick={() => {
              router.push("/");
            }}
            className="max-sm:w-16 max-sm:h-16"
          />
          {/* Sur mobile on cache le texte "cameleo" */}
          <motion.p
            style={{
              scale: useTransform(scrollYBoundedProgressDelayed, [0, 1], [1, 0.9]),
            }}
            className="flex origin-left items-center text-xl font-semibold max-sm:hidden"
          >
            {SiteConfig.title}
          </motion.p>
        </div>

        {/* Menu avec sous-parties */}
        <motion.nav
          style={{
            opacity: useTransform(scrollYBoundedProgressDelayed, [0, 1], [1, 0]),
          }}
          className="flex items-center gap-4 text-sm font-medium max-sm:gap-2"
        >
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="flex items-center gap-4 max-sm:gap-2 max-sm:flex-nowrap max-sm:overflow-x-auto max-sm:scrollbar-thin max-sm:scrollbar-thumb-rounded max-sm:scrollbar-thumb-gray-400">
              {/* Menu Offres */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="max-sm:text-xs max-sm:px-1 max-sm:py-1
                             bg-transparent !bg-opacity-0 border-none
                             cursor-pointer
                             hover:no-underline hover:bg-transparent
                             hover:scale-100 hover:brightness-100
                             transition-none"
                  style={{ userSelect: "none" }}
                >
                  Offres
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] max-sm:w-[250px] gap-2 p-4 max-sm:p-2">
                    <ListItem href="/#features" title="création de contenue">
                      montage vidéo,
                      création pub,
                      création script,
                      tournage vidéo,
                      studio vidéo,
                    </ListItem>
                    <ListItem href="/#features" title="création web">
                      création plan, design, appli mobiles, SAAS, site web,
                    </ListItem>
                    <ListItem href="/#features" title="maintenance et hebergment">
                      texte à faire.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Menu Tarifs */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="max-sm:text-xs max-sm:px-1 max-sm:py-1
                             bg-transparent !bg-opacity-0 border-none
                             cursor-pointer
                             hover:no-underline hover:bg-transparent
                             hover:scale-100 hover:brightness-100
                             transition-none"
                  style={{ userSelect: "none" }}
                >
                  Tarifs
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] max-sm:w-[200px] gap-2 p-4 max-sm:p-2">
                    <ListItem href="/#pricing" title="Mensuel">
                      Paiement flexible chaque mois.
                    </ListItem>
                    <ListItem href="/#pricing" title="Résultat">
                      Payer au résultat.
                    </ListItem>
                    <ListItem href="/#pricing" title="Sur mesure">
                      Contactez-nous pour un devis personnalisé.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Menu Partenaire */}
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="max-sm:text-xs max-sm:px-1 max-sm:py-1
                             bg-transparent !bg-opacity-0 border-none
                             cursor-pointer
                             hover:no-underline hover:bg-transparent
                             hover:scale-100 hover:brightness-100
                             transition-none"
                  style={{ userSelect: "none" }}
                >
                  Partenaire
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] max-sm:w-[200px] gap-2 p-4 max-sm:p-2">
                    <ListItem href="/temp" title="Affiliation">
                      Gagnez des commissions en recommandant notre service.
                    </ListItem>
                    <ListItem href="/temp" title="Freelance">
                      Freelance gagnent +2000€/mois.
                    </ListItem>
                    <ListItem href="/temp" title="A revoir">
                      Texte à refaire et corriger.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Boutons Auth + Theme */}
          <div className="flex items-center gap-2 max-sm:gap-1 max-sm:min-w-[70px] max-sm:text-xs max-sm:py-0 max-sm:px-2">
            <AuthButtonClient className="max-sm:text-xs max-sm:min-w-[60px] max-sm:px-2 max-sm:py-1" />
            <AnimatedThemeToggler />
          </div>
        </motion.nav>
      </div>
    </motion.header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm font-medium leading-none max-sm:text-xs max-sm:leading-snug max-sm:truncate">
            {title}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug max-sm:text-[10px] max-sm:leading-tight max-sm:line-clamp-1">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

const clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max);