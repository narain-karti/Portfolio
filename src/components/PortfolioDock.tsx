"use client";

import React, { memo, useMemo } from "react";
import { usePathname } from "next/navigation";
import { Home, FolderGit2, Share2, BookOpen, Briefcase, User, FlaskConical, FileText, Mail } from "lucide-react";
import Dock, { type DockItemData } from "../blocks/Dock/Dock";

const PortfolioDock = memo(() => {
  const pathname = usePathname();

  const activeLabel = useMemo(() => {
    if (pathname === "/") return "Home";
    if (pathname.startsWith("/work")) return "Projects";
    if (pathname.startsWith("/graph")) return "System Graph";
    if (pathname.startsWith("/blog")) return "Engineering Logs";
    if (pathname.startsWith("/builder")) return "Experience";
    if (pathname.startsWith("/about")) return "About";
    if (pathname.startsWith("/website")) return "Research & Labs";
    if (pathname.startsWith("/downloads")) return "Resources & CV";
    if (pathname.startsWith("/contact")) return "Connect";
    return "Menu";
  }, [pathname]);

  const items: DockItemData[] = useMemo(
    () => [
      {
        icon: <Home size={19} strokeWidth={1.8} />,
        label: "Home",
        href: "/",
        active: pathname === "/",
      },
      {
        icon: <FolderGit2 size={19} strokeWidth={1.8} />,
        label: "Projects",
        href: "/work",
        active: pathname.startsWith("/work"),
      },
      {
        icon: <Share2 size={19} strokeWidth={1.8} />,
        label: "Knowledge Graph",
        href: "/graph",
        active: pathname.startsWith("/graph"),
      },
      {
        icon: <BookOpen size={19} strokeWidth={1.8} />,
        label: "Engineering Logs",
        href: "/blog",
        active: pathname.startsWith("/blog"),
      },
      {
        icon: <Briefcase size={19} strokeWidth={1.8} />,
        label: "Experience & Roles",
        href: "/builder",
        active: pathname.startsWith("/builder"),
      },
      {
        icon: <User size={19} strokeWidth={1.8} />,
        label: "About & Story",
        href: "/about",
        active: pathname.startsWith("/about"),
      },
      {
        icon: <FlaskConical size={19} strokeWidth={1.8} />,
        label: "Research & Labs",
        href: "/website",
        active: pathname.startsWith("/website"),
      },
      {
        icon: <FileText size={19} strokeWidth={1.8} />,
        label: "Resources & CV",
        href: "/downloads",
        active: pathname.startsWith("/downloads"),
      },
      {
        icon: <Mail size={19} strokeWidth={1.8} />,
        label: "Connect",
        href: "/contact",
        active: pathname.startsWith("/contact"),
      },
    ],
    [pathname]
  );

  return <Dock items={items} activeLabel={activeLabel} />;
});

PortfolioDock.displayName = "PortfolioDock";

export default PortfolioDock;
