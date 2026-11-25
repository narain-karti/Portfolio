"use client";

import React, { useCallback, memo } from "react";
import Link from "next/link";
import { useTransition } from "../context/TransitionContext";
import { usePathname, useRouter } from "next/navigation";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const TransitionLink: React.FC<TransitionLinkProps> = memo(({ href, children, className = "", style }) => {
  const { startTransition } = useTransition();
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      if (href === pathname) return;
      startTransition(href);
    },
    [href, pathname, startTransition]
  );

  return (
    <Link
      href={href}
      onMouseEnter={() => router.prefetch(href)}
      onPointerDown={() => router.prefetch(href)}
      onClick={handleClick}
      className={className}
      style={style}
      aria-current={href === pathname ? "page" : undefined}
      prefetch={true}
    >
      {children}
    </Link>
  );
});

TransitionLink.displayName = "TransitionLink";

export default TransitionLink;
