import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const nav = [
  ["Offers", "/offers"],
  ["Retreats", "/retreats"],
  ["Weekly Classes", "/schedule"],
  ["About", "/about"],
] as const;

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Elevate with Kait home">
        <Image src="/images/lotus-logo.png" alt="" width={46} height={46} priority />
        <span>Elevate with Kait</span>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link className="header-cta" href="/contact#book"><span>Book with Kaitlyn</span><b>↗</b></Link>
      <details className="mobile-menu">
        <summary aria-label="Open navigation">Menu</summary>
        <div>
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/contact#book">Book with Kaitlyn</Link>
        </div>
      </details>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <p className="section-label light">Come as you are</p>
        <h2>A softer way back<br />to your own center.</h2>
        <ArrowLink href="/contact" light>Start here</ArrowLink>
      </div>
      <div className="footer-bottom">
        <div className="footer-identity">
          <Link className="brand footer-brand" href="/">
            <Image src="/images/lotus-logo.png" alt="" width={54} height={54} />
            <span>Elevate with Kait</span>
          </Link>
          <a className="footer-email" href="mailto:kait@elevatewithkait.com">kait@elevatewithkait.com</a>
          <a className="footer-social" href="https://www.instagram.com/elevate.withkait" target="_blank" rel="noreferrer" aria-label="Elevate with Kait on Instagram"><span className="instagram-icon" aria-hidden="true" />Instagram</a>
        </div>
        <div className="footer-links">
          {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/contact">Contact</Link>
        </div>
        <p>Breathwork · Reiki · Quantum Healing · Sound · Yoga · Retreats</p>
        <p className="copyright">© {new Date().getFullYear()} Copyright Elevate with Kait | Website by Gab Real Inc</p>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return <><Header />{children}<Footer /></>;
}

export function ArrowLink({
  href,
  children,
  dark = false,
  light = false,
  external = false,
}: {
  href: string;
  children: ReactNode;
  dark?: boolean;
  light?: boolean;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`arrow-link ${dark ? "dark" : ""} ${light ? "light" : ""}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span>{children}</span><b aria-hidden="true">↗</b>
    </Link>
  );
}

export function SectionHeading({ title, text }: { title: string; text?: string }) {
  return <div className="section-heading"><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function OrbitArt({ className = "" }: { className?: string }) {
  return (
    <div className={`orbit-art ${className}`} aria-hidden="true">
      <i /><i /><i /><i />
      <span>✦</span><span>✦</span><span>✦</span>
    </div>
  );
}

export function InnerHero({ eyebrow, title, text, image, imageAlt }: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className={`inner-hero ${image ? "with-image" : ""}`}>
      <OrbitArt className="inner-orbit" />
      <div className="inner-hero-copy">
        <p className="eyebrow pill">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      {image && <div className="inner-hero-image"><Image src={image} alt={imageAlt || ""} fill priority sizes="(max-width: 760px) 100vw, 44vw" className="cover-image" /></div>}
    </section>
  );
}
