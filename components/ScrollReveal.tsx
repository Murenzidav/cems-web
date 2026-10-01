"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Fades in elements marked with data-reveal as they scroll into view. Content stays visible without JS or with reduced motion. */
export default function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)"));
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }, { rootMargin: "0px 0px -8% 0px" });
    // Only hide elements that are still below the fold, so nothing visible flashes.
    for (const el of els) {
      if (el.getBoundingClientRect().top > window.innerHeight) { el.classList.add("pre"); io.observe(el); }
    }
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
