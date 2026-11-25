"use client";

import React, { createContext, useContext, ReactNode, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

type TransitionContextType = {
  isTransitioning: boolean;
  startTransition: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextType>({
  isTransitioning: false,
  startTransition: () => {},
});

export const useTransition = () => useContext(TransitionContext);

const ROUTES = ["/", "/work", "/graph", "/blog", "/builder", "/about", "/downloads", "/website", "/contact"];

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    ROUTES.forEach((route) => router.prefetch(route));
  }, [router]);

  const startTransition = useCallback(
    (route: string) => {
      const targetPath = route.split("?")[0];
      if (route === pathname || (targetPath === pathname && !route.includes("?"))) return;
      router.push(route);
    },
    [pathname, router]
  );

  return (
    <TransitionContext.Provider value={{ isTransitioning: false, startTransition }}>
      <div className="transition-wrapper">{children}</div>
    </TransitionContext.Provider>
  );
};
