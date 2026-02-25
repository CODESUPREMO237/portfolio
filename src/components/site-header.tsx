"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shell animate-fade-in-up py-4 md:py-6">
      <div className="glass-card px-4 md:px-6 py-4">
        <div className="site-header-row">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#DDFF00] to-[#44FFD2] hover:opacity-80 transition-opacity"
          >
            CODE SUPREMO
          </Link>

          <nav className="nav-wrap desktop-only" aria-label="Primary">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link key={item.href} href={item.href} className={`nav-chip ${active ? "active" : ""}`} aria-current={active ? "page" : undefined}>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="menu-btn mobile-only"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {isOpen ? (
          <nav className="mobile-nav mobile-only mt-3" aria-label="Mobile primary">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mobile-nav-link ${active ? "active" : ""}`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
