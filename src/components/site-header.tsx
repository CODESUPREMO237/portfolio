"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Writing", href: "/writing" },
  { label: "Design Docs", href: "/system-design" },
  { label: "Postmortems", href: "/postmortems" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="shell animate-fade-in-up py-6">
      <div className="glass-card px-6 py-4 flex flex-wrap justify-between items-center gap-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#DDFF00] to-[#44FFD2] hover:opacity-80 transition-opacity"
        >
          CODE SUPREMO
        </Link>
        <nav className="nav-wrap" aria-label="Primary">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link key={item.href} href={item.href} className={`nav-chip ${active ? "active" : ""}`} aria-current={active ? "page" : undefined}>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
