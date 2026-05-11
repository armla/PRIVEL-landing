/*
 * PRIVEL — Home (Landing Page)
 * Design: "Private Residence" — warm editorial luxury
 * Brand: PRIVEL / The Agency Costa Rica
 * Colors: Ecru #F5F1E9 bg, Iron #000 text, Agency Red #ED2127 accent (sparingly)
 * Typography: Playfair Display (headlines) + Inter (labels/UI/body) per PRIVEL Brand Guidelines
 * Tagline: "Private Advisory Intelligence"
 * Features: EN/ES language toggle, Agent Login → privel.app, real brand assets
 */

import { useEffect, useRef, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";

// Brand assets stored in /public/brand — no external CDN dependency
const PRIVEL_ICON = "/brand/privel-icon-192.png";
const TA_LOGO_RED = "/brand/TA_Logo_Red.png";
const HERO_IMAGE = "/brand/privel-hero.webp";
const TA_LOGO_WHITE = "/brand/TA_Logo_White.png";

const LOGIN_URL = "https://privel.app";

function useRevealOnScroll() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const targets = el.querySelectorAll(".reveal");
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

// Language toggle: Globe icon + current language code, click to switch
function LangToggle({ dark = false }: { dark?: boolean }) {
  const { lang, toggleLang } = useLang();
  const textColor = dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.5)";
  const hoverColor = dark ? "#fff" : "#000";
  return (
    <button
      onClick={toggleLang}
      aria-label={lang === "en" ? "Cambiar a Español" : "Switch to English"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "5px",
        background: "none",
        border: "none",
        cursor: "pointer",
        color: textColor,
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        fontSize: "0.6rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        padding: "2px 0",
        transition: "color 0.2s ease",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = hoverColor)}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = textColor)}
    >
      {/* Globe icon */}
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
      <span>{lang === "en" ? "ES" : "EN"}</span>
    </button>
  );
}

export default function Home() {
  const pageRef = useRevealOnScroll();
  const { t, lang } = useLang();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div ref={pageRef} className="min-h-screen" style={{ backgroundColor: "#F5F1E9" }}>

      {/* ─── NAV ─────────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10"
        style={{
          height: "60px",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          backgroundColor: "rgba(245,241,233,0.94)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
        }}
      >
        {/* Left: Privel icon + wordmark + tagline */}
        <div className="flex items-center gap-2.5">
          <img
            src={PRIVEL_ICON}
            alt="Privel"
            style={{ width: "28px", height: "28px", objectFit: "contain" }}
          />
          <div className="flex flex-col leading-none">
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 500,
                fontSize: "1rem",
                letterSpacing: "0.04em",
                color: "#000",
                lineHeight: 1.2,
              }}
            >
              PRIVEL
            </span>
            <span
              className="label-inter hidden sm:block"
              style={{ color: "rgba(0,0,0,0.35)", fontSize: "0.5rem", letterSpacing: "0.2em" }}
            >
              {t.heroTagline}
            </span>
          </div>

        </div>

          {/* Right: nav links + lang toggle + login + CTA */}
        <div className="flex items-center gap-4 md:gap-5">
          {/* Language toggle — mobile only (shown inline next to Inquire) */}
          <span className="md:hidden"><LangToggle /></span>

        {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <span style={{ display: "block", width: "20px", height: "1.5px", backgroundColor: mobileMenuOpen ? "#ED2127" : "#000", transition: "all 0.2s", transform: mobileMenuOpen ? "translateY(6.5px) rotate(45deg)" : "none" }} />
            <span style={{ display: "block", width: "20px", height: "1.5px", backgroundColor: mobileMenuOpen ? "#ED2127" : "#000", transition: "all 0.2s", opacity: mobileMenuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "20px", height: "1.5px", backgroundColor: mobileMenuOpen ? "#ED2127" : "#000", transition: "all 0.2s", transform: mobileMenuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
          </button>
          <a
            href="#capabilities"
            className="label-inter hover-red-underline hidden md:inline"
            style={{ color: "rgba(0,0,0,0.5)", fontSize: "0.6rem" }}
          >
            {t.navCapabilities}
          </a>
          <a
            href="#access"
            className="label-inter hover-red-underline hidden md:inline"
            style={{ color: "rgba(0,0,0,0.5)", fontSize: "0.6rem" }}
          >
            {t.navAccess}
          </a>

          {/* Language toggle — desktop only */}
          <span className="hidden md:inline"><LangToggle /></span>

          {/* Request Access CTA */}
          <a
            href="#access"
            className="label-inter"
            style={{
              color: "#fff",
              backgroundColor: "#ED2127",
              padding: "7px 16px",
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
              textDecoration: "none",
              transition: "background-color 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#CC0000")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.backgroundColor = "#ED2127")
            }
          >
            {t.navRequestAccess}
          </a>
        </div>
      {/* ─── MOBILE MENU DRAWER ─────────────────────────────────── */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed top-[60px] left-0 right-0 z-40"
          style={{
            backgroundColor: "rgba(245,241,233,0.98)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderBottom: "1px solid rgba(0,0,0,0.1)",
            padding: "1.5rem 1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {[{ label: t.navCapabilities, href: "#capabilities" }, { label: t.navAccess, href: "#access" }].map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "0.7rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.65)",
                textDecoration: "none",
                padding: "1rem 0",
                borderBottom: "1px solid rgba(0,0,0,0.07)",
                display: "block",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ED2127")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(0,0,0,0.65)")}
            >
              {item.label}
            </a>
          ))}
          <div style={{ marginTop: "1.25rem", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            <a
              href="#access"
              onClick={() => setMobileMenuOpen(false)}
              className="label-inter"
              style={{
                color: "#fff",
                backgroundColor: "#ED2127",
                padding: "8px 18px",
                fontSize: "0.58rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontFamily: "'Inter', sans-serif",
                textDecoration: "none",
              }}
            >
              {t.navRequestAccess}
            </a>
          </div>
        </div>
      )}

      </nav>

      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section
        style={{ paddingTop: "60px", minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }} />

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", flex: 1 }}
          className="lg:grid-cols-[48%_52%]"
        >
          {/* Left: Text column */}
          <div
            className="flex flex-col justify-between"
          style={{
            padding: "clamp(2.5rem, 6vw, 4.5rem) clamp(1.25rem, 4vw, 3rem) clamp(2.5rem, 6vw, 4.5rem) clamp(1.25rem, 4vw, 4rem)",
            borderRight: "1px solid rgba(0,0,0,0.08)",
          }}
          >
            {/* Top: badge */}
            <div className="reveal" style={{ transitionDelay: "0ms" }}>
              <span className="label-inter" style={{ color: "rgba(0,0,0,0.38)" }}>
                {t.heroBadge}
              </span>
            </div>

            {/* Center: headline + body */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingTop: "3.5rem",
                paddingBottom: "3.5rem",
              }}
            >
              <h1
                className="headline-display reveal"
                style={{
                  fontSize: "clamp(2.4rem, 5.5vw, 5rem)",
                  color: "#000",
                  maxWidth: "840px",
                  transitionDelay: "80ms",
                  lineHeight: 1.08,
                }}
              >
                {t.heroHeadline}
              </h1>

              <div
                className="reveal"
                style={{ marginTop: "2.5rem", maxWidth: "600px", transitionDelay: "160ms" }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 300,
                    fontSize: "clamp(0.875rem, 2vw, 0.975rem)",
                    lineHeight: "1.8",
                    color: "rgba(0,0,0,0.62)",
                  }}
                >
                  {lang === "en" ? (
                    <>
                      Privel is a private advisory tool built exclusively for{" "}
                      <a
                        href="https://lxcostarica.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#ED2127", textDecoration: "underline", textDecorationColor: "#ED2127" }}
                      >
                        The Agency Costa Rica
                      </a>
                      . It consolidates market knowledge, client strategy, and operational support into a single, discreet platform.
                    </>
                  ) : (
                    <>
                      Privel es una herramienta de asesoría privada creada exclusivamente para{" "}
                      <a
                        href="https://lxcostarica.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#ED2127", textDecoration: "underline", textDecorationColor: "#ED2127" }}
                      >
                        The Agency Costa Rica
                      </a>
                      . Consolida el conocimiento del mercado, la estrategia de clientes y el soporte operativo en una sola plataforma discreta.
                    </>
                  )}
                </p>
              </div>

              {/* Tagline block */}
              <div
                className="reveal"
                style={{ marginTop: "3rem", transitionDelay: "240ms" }}
              >
                <div
                  style={{
                    display: "inline-block",
                    width: "36px",
                    height: "1px",
                    backgroundColor: "#ED2127",
                    marginBottom: "1.25rem",
                  }}
                />
                <p className="label-inter" style={{ color: "rgba(0,0,0,0.38)" }}>
                  {lang === "en" ? "Exclusive to The Agency Costa Rica team" : "Exclusivo para el equipo de The Agency Costa Rica"}
                </p>
              </div>

              {/* Agent login link */}
              <div
                className="reveal"
                style={{ marginTop: "2.5rem", transitionDelay: "300ms" }}
              >
                <a
                  href={LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.75rem",
                    color: "#ED2127",
                    textDecoration: "none",
                    letterSpacing: "0.06em",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                >
                  <span>{t.navLogin}</span>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="#ED2127" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Bottom: scroll indicator */}
            <div
              className="reveal hidden md:flex items-center gap-3"
              style={{ transitionDelay: "360ms" }}
            >
              <div style={{ width: "1px", height: "44px", backgroundColor: "rgba(0,0,0,0.18)" }} />
              <span className="label-inter" style={{ color: "rgba(0,0,0,0.28)" }}>
                {t.heroScroll}
              </span>
            </div>
          </div>

          {/* Right: Hero image */}
          <div
            className="hidden lg:block"
            style={{ position: "relative", overflow: "hidden", minHeight: "600px" }}
          >
            <img
              src={HERO_IMAGE}
              alt="Private advisory workspace"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, rgba(245,241,233,0.12) 0%, transparent 40%)",
              }}
            />
            {/* Corner badge */}
            <div
              style={{
                position: "absolute",
                bottom: "2rem",
                right: "2rem",
                backgroundColor: "rgba(245,241,233,0.97)",
                backdropFilter: "blur(10px)",
                padding: "1rem 1.5rem",
                borderLeft: "3px solid #ED2127",
                boxShadow: "0 2px 16px rgba(0,0,0,0.18)",
              }}
            >
              <span className="label-inter" style={{ color: "rgba(0,0,0,0.72)", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.18em" }}>
                {t.heroInvitation}
              </span>
            </div>
            {/* The Agency logo watermark */}
            <div
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                opacity: 0.85,
              }}
            >
              <img
                src={TA_LOGO_RED}
                alt="The Agency Costa Rica"
                style={{ width: "52px", height: "52px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── MOBILE HERO IMAGE ─────────────────────────────────────── */}
      <div
        className="lg:hidden"
        style={{ width: "100%", height: "260px", overflow: "hidden", position: "relative" }}
      >
        <img
          src={HERO_IMAGE}
          alt="Private advisory workspace"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* ─── DIVIDER STATEMENT ───────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(0,0,0,0.08)",
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          padding: "2.5rem 0",
          backgroundColor: "#ebe3d6",
        }}
      >
        <div className="container">
          <div className="flex items-center gap-4 reveal">
            <span
              style={{
                width: "28px",
                height: "1px",
                backgroundColor: "#ED2127",
                flexShrink: 0,
              }}
            />
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "rgba(0,0,0,0.55)",
                lineHeight: 1.5,
              }}
            >
              <span style={{ color: "rgba(0,0,0,0.3)", fontStyle: "normal" }}>{t.dividerBuiltFor} </span>
              {t.dividerStatement}
            </p>
          </div>
        </div>
      </div>

      {/* ─── CAPABILITIES ────────────────────────────────────────────── */}
      <section id="capabilities" className="section-pad" style={{ backgroundColor: "#F5F1E9" }}>
        <div className="container">
          {/* Section header */}
          <div
            className="reveal"
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1.5rem",
              marginBottom: "5rem",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
              paddingBottom: "2rem",
            }}
          >
            <span className="label-inter" style={{ color: "#ED2127", fontSize: "0.6rem" }}>
              {t.capSectionLabel}
            </span>
            <span className="label-inter" style={{ color: "rgba(0,0,0,0.25)", fontSize: "0.6rem" }}>
              {t.capSectionSub}
            </span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(0,0,0,0.06)" }} />
          </div>

          <h2
            className="headline-display reveal"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "#000",
              maxWidth: "560px",
              marginBottom: "5rem",
              transitionDelay: "80ms",
            }}
          >
            <span style={{ display: "block" }}>{t.capHeadlineMain}</span>
            <span style={{ display: "block", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)", color: "rgba(0,0,0,0.45)", marginTop: "0.4rem" }}>{t.capHeadlineSub}</span>
          </h2>

          {/* Capabilities grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              borderTop: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            {(t.capabilities as Array<{index: string; title: string; body: string}>).map((cap, i) => (
              <div
                key={cap.index}
                className="reveal cap-card"
                style={{
                  transitionDelay: `${i * 60}ms`,
                  borderRight: i < t.capabilities.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                }}
              >
                <span
                  className="label-inter"
                  style={{ color: "#ED2127", fontSize: "0.55rem", display: "block", marginBottom: "1.5rem" }}
                >
                  {cap.index}
                </span>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 400,
                    fontSize: "clamp(1rem, 2vw, 1.1rem)",
                    color: "#000",
                    marginBottom: "0.85rem",
                    lineHeight: 1.35,
                  }}
                >
                  {cap.title}
                </h3>
                <p className="body-refined">
                  {cap.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DARK STATEMENT ──────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#000",
          padding: "9rem 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "4rem",
              alignItems: "center",
            }}
            className="lg:grid-cols-[auto_1fr]"
          >
            {/* Left: The Agency logo */}
            <div className="reveal hidden lg:block" style={{ transitionDelay: "0ms" }}>
              <img
                src={TA_LOGO_RED}
                alt="The Agency Costa Rica"
                style={{ width: "120px", height: "120px", objectFit: "cover", opacity: 0.9 }}
              />
            </div>

            {/* Right: text */}
            <div>
              <span
                className="label-inter reveal"
                style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.6rem", display: "block", marginBottom: "2.5rem" }}
              >
                {t.darkSectionLabel}
              </span>
              <h2
                className="headline-display reveal"
                style={{
                  fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                  color: "#F5F1E9",
                  maxWidth: "700px",
                  lineHeight: 1.1,
                  transitionDelay: "80ms",
                }}
              >
                {t.darkHeadline}
              </h2>
              <p
                className="reveal"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.95rem",
                  lineHeight: 1.9,
                  color: "rgba(255,255,255,0.45)",
                  marginTop: "2rem",
                  maxWidth: "560px",
                  transitionDelay: "160ms",
                }}
              >
                {t.darkBody}
              </p>

              {/* Login CTA in dark section */}
              <div className="reveal" style={{ marginTop: "3rem", transitionDelay: "240ms" }}>
                <a
                  href={LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-inter"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "#fff",
                    backgroundColor: "#ED2127",
                    padding: "12px 24px",
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    textDecoration: "none",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#CC0000")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "#ED2127")}
                >
                  {t.processLoginLabel}
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ────────────────────────────────────────────── */}
      <section className="section-pad" style={{ backgroundColor: "#F5F1E9" }}>
        <div className="container">
          <div
            className="reveal"
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "1.5rem",
              marginBottom: "5rem",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
              paddingBottom: "2rem",
            }}
          >
            <span className="label-inter" style={{ color: "#ED2127", fontSize: "0.6rem" }}>
              {t.processSectionLabel}
            </span>
            <span className="label-inter" style={{ color: "rgba(0,0,0,0.25)", fontSize: "0.6rem" }}>
              {t.processSub}
            </span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "rgba(0,0,0,0.06)" }} />
          </div>

          <h2
            className="headline-display reveal"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "#000",
              maxWidth: "420px",
              marginBottom: "5rem",
              transitionDelay: "80ms",
            }}
          >
            {t.processHeadline}
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              borderTop: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            {(t.steps as Array<{step: string; title: string; body: string}>).map((item, i) => (
              <div
                key={item.step}
                className="reveal cap-card"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  borderRight: i < t.steps.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
                }}
              >
                <span
                  className="headline-display"
                  style={{
                    fontSize: "2.5rem",
                    color: "rgba(0,0,0,0.1)",
                    display: "block",
                    marginBottom: "1.5rem",
                  }}
                >
                  {item.step}
                </span>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 400,
                    fontSize: "clamp(1rem, 2vw, 1.1rem)",
                    color: "#000",
                    marginBottom: "0.85rem",
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </h3>
                <p className="body-refined">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ACCESS / CTA ────────────────────────────────────────────── */}
      <section id="access" className="section-pad" style={{ backgroundColor: "#EBE3D6" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "4rem",
              alignItems: "start",
            }}
            className="lg:grid-cols-[1fr_1fr]"
          >
            {/* Left: text */}
            <div className="reveal">
              <span className="label-inter" style={{ color: "rgba(0,0,0,0.35)", fontSize: "0.6rem" }}>
                {t.accessSectionLabel}
              </span>
              <h2
                className="headline-display"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  color: "#000",
                  marginTop: "0.75rem",
                  maxWidth: "540px",
                  lineHeight: 1.2,
                }}
              >
                {t.accessHeadline}
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(0.875rem, 2vw, 0.9rem)",
                  lineHeight: 1.8,
                  color: "rgba(0,0,0,0.75)",
                  marginTop: "1.5rem",
                  maxWidth: "500px",
                }}
              >
                {t.accessBodyIntro}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: "clamp(0.875rem, 2vw, 0.9rem)",
                  lineHeight: 1.8,
                  color: "rgba(0,0,0,0.58)",
                  marginTop: "0.75rem",
                  maxWidth: "500px",
                }}
              >
                {t.accessBody}
              </p>
              <div style={{ marginTop: "2.5rem" }}>
                <div
                  style={{
                    display: "inline-block",
                    width: "36px",
                    height: "1px",
                    backgroundColor: "#ED2127",
                    marginBottom: "1rem",
                  }}
                />
                <p className="label-inter" style={{ color: "rgba(0,0,0,0.35)", fontSize: "0.6rem" }}>
                  theagency.cr
                </p>
              </div>

              {/* Privel icon in access section */}
              <div style={{ marginTop: "3rem", display: "flex", alignItems: "center", gap: "12px" }}>
                <img
                  src={PRIVEL_ICON}
                  alt="Privel"
                  style={{ width: "36px", height: "36px", objectFit: "contain", opacity: 0.6 }}
                />
                <div>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.85rem", color: "rgba(0,0,0,0.5)" }}>
                    PRIVEL
                  </p>
                  <p className="label-inter" style={{ color: "rgba(0,0,0,0.3)", fontSize: "0.5rem" }}>
                    {t.heroTagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div
              className="reveal"
              style={{
                backgroundColor: "#F5F1E9",
                padding: "3rem",
                borderTop: "2px solid #ED2127",
              }}
            >
              <p
                className="label-inter"
                style={{ color: "rgba(0,0,0,0.38)", marginBottom: "2rem", fontSize: "0.6rem" }}
              >
                {t.formTitle}
              </p>

              {formSubmitted ? (
                <div style={{ textAlign: "center", padding: "3rem 0" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "1px",
                      backgroundColor: "#ED2127",
                      margin: "0 auto 1.5rem",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.1rem",
                      color: "#000",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {t.formConfirm}
                  </p>
                  <p className="label-inter" style={{ color: "rgba(0,0,0,0.4)", fontSize: "0.6rem" }}>
                    {t.accessTagline}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setFormLoading(true);
                    setFormError(false);
                    const form = e.currentTarget;
                    const data = new FormData(form);
                    try {
                      const res = await fetch("https://formspree.io/f/xzdodpny", {
                        method: "POST",
                        body: data,
                        headers: { Accept: "application/json" },
                      });
                      if (res.ok) {
                        setFormSubmitted(true);
                      } else {
                        setFormError(true);
                      }
                    } catch {
                      setFormError(true);
                    } finally {
                      setFormLoading(false);
                    }
                  }}
                  style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}
                >
                  {[
                    { id: "name", label: t.formName, type: "text", placeholder: t.formNamePlaceholder, required: true },
                    { id: "email", label: t.formEmail, type: "email", placeholder: t.formEmailPlaceholder, required: true },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        className="label-inter"
                        style={{
                          display: "block",
                          color: "rgba(0,0,0,0.42)",
                          marginBottom: "0.5rem",
                          fontSize: "0.58rem",
                        }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        style={{
                          width: "100%",
                          backgroundColor: "transparent",
                          border: "none",
                          borderBottom: "1px solid rgba(0,0,0,0.18)",
                          padding: "0.5rem 0",
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 300,
                          fontSize: "0.875rem",
                          color: "#000",
                          outline: "none",
                          transition: "border-color 0.2s ease",
                        }}
                        onFocus={(e) =>
                          ((e.target as HTMLInputElement).style.borderBottomColor = "#ED2127")
                        }
                        onBlur={(e) =>
                          ((e.target as HTMLInputElement).style.borderBottomColor = "rgba(0,0,0,0.18)")
                        }
                      />
                    </div>
                  ))}
                  <div>
                    <label
                      htmlFor="message"
                      className="label-inter"
                      style={{
                        display: "block",
                        color: "rgba(0,0,0,0.42)",
                        marginBottom: "0.5rem",
                        fontSize: "0.58rem",
                      }}
                    >
                      {t.formNote}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder={t.formNotePlaceholder}
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        border: "none",
                        borderBottom: "1px solid rgba(0,0,0,0.18)",
                        padding: "0.5rem 0",
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.875rem",
                        color: "#000",
                        outline: "none",
                        resize: "none",
                        transition: "border-color 0.2s ease",
                      }}
                      onFocus={(e) =>
                        ((e.target as HTMLTextAreaElement).style.borderBottomColor = "#ED2127")
                      }
                      onBlur={(e) =>
                        ((e.target as HTMLTextAreaElement).style.borderBottomColor = "rgba(0,0,0,0.18)")
                      }
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="label-inter"
                      style={{
                        backgroundColor: "#ED2127",
                        color: "#fff",
                        border: "none",
                        padding: "1rem 2rem",
                        fontSize: "0.6rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        fontFamily: "'Inter', sans-serif",
                        cursor: "pointer",
                        transition: "background-color 0.2s ease",
                        marginTop: "0.5rem",
                        textAlign: "center",
                        display: "block",
                        width: "100%",
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.backgroundColor = "#CC0000")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.backgroundColor = "#ED2127")
                      }
                    >
                      {formLoading ? "..." : t.formSubmit}
                    </button>
                    {formError && (
                      <p
                        className="label-inter"
                        style={{ color: "#ED2127", fontSize: "0.55rem", marginTop: "0.75rem", textAlign: "center", letterSpacing: "0.08em" }}
                      >
                        {lang === "en" ? "Something went wrong. Please try again." : "Algo salió mal. Por favor intente de nuevo."}
                      </p>
                    )}
                    <p
                      className="label-inter"
                      style={{ color: "rgba(0,0,0,0.3)", fontSize: "0.52rem", marginTop: "0.85rem", textAlign: "center", letterSpacing: "0.08em" }}
                    >
                      {t.formMicroCopy}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ──────────────────────────────────────────────────── */}
      <footer
        style={{
          backgroundColor: "#000",
          padding: "3rem 0",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div className="container">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            className="md:flex-row md:items-center md:justify-between"
          >
            {/* Left: Privel branding */}
            <div className="flex items-center gap-3">
              <img
                src={PRIVEL_ICON}
                alt="Privel"
                style={{ width: "24px", height: "24px", objectFit: "contain", opacity: 0.7 }}
              />
              <div>
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    color: "#F5F1E9",
                    letterSpacing: "0.06em",
                    display: "block",
                  }}
                >
                  PRIVEL
                </span>
                <p
                  className="label-inter"
                  style={{ color: "rgba(245,241,233,0.28)", marginTop: "2px", fontSize: "0.5rem" }}
                >
                  {t.footerTagline}
                </p>
              </div>
            </div>

            {/* Center: links */}
            <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
              <a
                href="#capabilities"
                className="label-inter hover-red-underline"
                style={{ color: "rgba(245,241,233,0.32)", fontSize: "0.58rem" }}
              >
                {t.footerCap}
              </a>
              <a
                href="#access"
                className="label-inter hover-red-underline"
                style={{ color: "rgba(245,241,233,0.32)", fontSize: "0.58rem" }}
              >
                {t.footerAccess}
              </a>
              <a
                href={LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="label-inter hover-red-underline"
                style={{ color: "rgba(245,241,233,0.32)", fontSize: "0.58rem" }}
              >
                {t.navLogin}
              </a>
              <a
                href="https://theagencycostarica.com"
                target="_blank"
                rel="noopener noreferrer"
                className="label-inter hover-red-underline"
                style={{ color: "rgba(245,241,233,0.32)", fontSize: "0.58rem" }}
              >
                {t.footerAgency}
              </a>
            </div>

            {/* Right: copyright */}
            <p
              className="label-inter"
              style={{ color: "rgba(245,241,233,0.18)", fontSize: "0.52rem" }}
            >
              © {new Date().getFullYear()} Grupo LX Inmobiliaria CR SA. All rights reserved.
              <br />
              THE AGENCY COSTA RICA IS AN INDEPENDENTLY OWNED AND OPERATED FRANCHISEE OF THE AGENCY REAL ESTATE FRANCHISING, LLC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
