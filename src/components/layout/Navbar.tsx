"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg-base";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-brand-bg-base/80 backdrop-blur-md border-b border-brand-border" : "bg-transparent border-b border-transparent"}`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <a
            href="#"
            className="font-heading text-brand-text-primary text-lg font-semibold"
          >
            dtechtitan
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`font-mono-brand text-sm text-brand-text-secondary hover:text-brand-accent transition-colors ${focusRing}`}
              >
                {link.label}
              </button>
            ))}
            <Button
              asChild
              variant="outline"
              className="border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-bg-base"
            >
              <a href="/cv/mayowa-daniel-cv.pdf" download>
                Download CV
              </a>
            </Button>
          </div>

          <button
            className={`md:hidden text-brand-text-primary ${focusRing}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-brand-bg-base flex flex-col items-center justify-center gap-8 md:hidden">
          <button
            className={`absolute top-4 right-6 text-brand-text-primary ${focusRing}`}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>

          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className={`font-heading text-3xl text-brand-text-primary hover:text-brand-accent transition-colors ${focusRing}`}
            >
              {link.label}
            </button>
          ))}

          <Button
            asChild
            className="mt-4 bg-brand-accent text-brand-bg-base hover:opacity-90"
          >
            <a href="/cv/mayowa-daniel-cv.pdf" download>
              Download CV
            </a>
          </Button>
        </div>
      )}
    </>
  );
}
