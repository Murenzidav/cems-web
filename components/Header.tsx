"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { site } from "@/content/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const nav = useRef<HTMLElement>(null);
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const items = () => [btn.current, ...Array.from(nav.current?.querySelectorAll<HTMLElement>("a") ?? [])].filter(Boolean) as HTMLElement[];
    items()[1]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); btn.current?.focus(); }
      if (e.key === "Tab") {
        const list = items();
        const first = list[0], last = list[list.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const cur = (href: string) => ((href === "/" ? pathname === "/" : pathname.startsWith(href)) ? "page" : undefined);

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-in">
          <span><Icon name="pin" size={15} />{site.street}, {site.area}, {site.city}</span>
          <span className="topbar-right">
            <a href={site.phoneHref}><Icon name="phone" size={15} />{site.phone}</a>
            <a href={`mailto:${site.email}`}><Icon name="mail" size={15} />{site.email}</a>
          </span>
        </div>
      </div>
      <header className={`site-header${scrolled ? " scrolled" : ""}${open ? " menu-open" : ""}`}>
        <div className="wrap bar">
          <Link href="/" className="brand" aria-label={`${site.name} home`}>
            <Image src={site.logo} alt={`${site.name}, ${site.full}`} width={1560} height={730} className="logo-img" sizes="130px" priority />
          </Link>
          <nav id="main-nav" ref={nav} className="nav" aria-label="Main">
            {links.map((l) => (
              <Link key={l.href} href={l.href} aria-current={cur(l.href)}>{l.label}</Link>
            ))}
            <Link href="/contact#quote" className="btn btn-primary nav-cta">Request a Quote</Link>
          </nav>
          <button ref={btn} className="menu-btn" aria-expanded={open} aria-controls="main-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((o) => !o)}>
            <Icon name={open ? "close" : "menu"} size={26} />
          </button>
        </div>
      </header>
    </>
  );
}
