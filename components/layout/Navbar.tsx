"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Casos de éxito", href: "#casos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

const appointmentUrl =
  "https://wa.me/51902282934?text=Hola%2C%20quisiera%20agendar%20un%20diagn%C3%B3stico.";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState("#inicio");

  /*
   * Cambia únicamente el estado visual del navbar
   * cuando realmente cruza el límite de 20 px.
   */
  useEffect(() => {
    let previous = window.scrollY > 20;

    setScrolled(previous);

    const handleScroll = () => {
      const next = window.scrollY > 20;

      if (next !== previous) {
        previous = next;
        setScrolled(next);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Bloquea el scroll de fondo únicamente
   * mientras el menú móvil está abierto.
   */
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  /*
   * Detecta la sección visible para marcar
   * el enlace activo.
   *
   * Ya no modifica window.history.
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const id = (entry.target as HTMLElement).id;

          if (id) {
            setActiveHref(`#${id}`);
          }
        }
      },
      {
        rootMargin: "-20% 0px -68% 0px",
        threshold: 0,
      }
    );

    for (const link of links) {
      const element = document.getElementById(
        link.href.replace("#", "")
      );

      if (element) {
        observer.observe(element);
      }
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavigation = (href: string) => {
    setOpen(false);
    setActiveHref(href);
  };

  return (
    <header
      className={`nav-shell ${
        scrolled ? "nav-shell--scrolled" : ""
      }`}
    >
      <div className="site-container nav-inner">
        <a
          href="#inicio"
          className="nav-logo"
          aria-label="Ir al inicio"
          onClick={() => handleNavigation("#inicio")}
        >
          <Image
            src="/logos/logo-rs.png"
            alt="RS Motorsport"
            width={184}
            height={58}
            priority
          />
        </a>

        <nav
          className="nav-links"
          aria-label="Navegación principal"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => handleNavigation(link.href)}
              className={
                activeHref === link.href
                  ? "is-active"
                  : undefined
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a
            className="nav-cta"
            href={appointmentUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar diagnóstico <span>↗</span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setOpen((value) => !value)}
            aria-label={
              open ? "Cerrar menú" : "Abrir menú"
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <span
              className={
                open
                  ? "menu-lines is-open"
                  : "menu-lines"
              }
            >
              <i />
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Navegación móvil"
        >
          <div className="site-container mobile-nav-inner">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() =>
                  handleNavigation(link.href)
                }
              >
                {link.label}
              </a>
            ))}

            <a
              className="button-primary"
              href={appointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar diagnóstico ↗
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}