import Image from "next/image";
import Link from "next/link";
import { ArrowLink, OrbitArt, PageShell, SectionHeading } from "./_components/site";

const pathways = [
  {
    number: "01",
    eyebrow: "I need to exhale",
    title: "Regulate + Release",
    text: "Breathwork and sound-led experiences for the moments when your mind has done enough and your body is ready to be heard.",
    href: "/offers#regulate",
  },
  {
    number: "02",
    eyebrow: "I feel disconnected",
    title: "Return + Reconnect",
    text: "Reiki, quantum energy work, and private mentorship that create space for clarity, self-trust, and a deeper relationship with your inner knowing.",
    href: "/offers#reconnect",
  },
  {
    number: "03",
    eyebrow: "I’m ready to go deeper",
    title: "Immerse + Transform",
    text: "High-touch retreats, ceremonies, and gatherings designed for meaningful connection, embodied insight, and lasting integration.",
    href: "/retreats",
  },
];

export default function Home() {
  return (
    <PageShell>
      <main>
        <section className="hero" id="top">
          <div className="hero-sky" aria-hidden="true" />
          <OrbitArt className="hero-orbit" />
          <div className="hero-copy">
            <p className="eyebrow pill">Breath · Energy · Sound · Movement</p>
            <h1>Come home<br />to yourself.</h1>
            <p className="hero-lede">
              Nervous-system-centered healing experiences with Kaitlyn Robinson,
              weaving breathwork, Reiki, quantum energy work, sound, yoga, and
              spiritual mentorship into one deeply held practice.
            </p>
            <div className="button-row">
              <ArrowLink href="/offers" dark>Explore the work</ArrowLink>
              <ArrowLink href="/schedule">View weekly classes</ArrowLink>
            </div>
          </div>
          <div className="hero-image-wrap">
            <Image
              src="/images/kait-sound-healing-opt.jpg"
              alt="Kaitlyn holding a crystal singing bowl beside the ocean"
              fill
              priority
              sizes="(max-width: 760px) 92vw, 58vw"
              className="cover-image hero-image"
            />
            <div className="hero-image-glow" />
          </div>
          <div className="floating-note note-left">Your breath already knows the way.</div>
          <div className="floating-note note-right">San Diego · International Retreats</div>
        </section>

        <section className="statement section-pad">
          <div className="section-label">The invitation</div>
          <SectionHeading
            title="You don’t need another way to fix yourself. You need space to feel yourself again."
            text="Elevate with Kait is a ceremonial pause from the noise. A place where science-aware nervous system care and spiritual embodiment meet, so transformation can unfold without force."
          />
          <div className="statement-media">
            <div className="statement-image">
              <Image
                src="/images/kait-yoga-kneeling-opt.jpg"
                alt="Kaitlyn practicing yoga beside the ocean"
                fill
                sizes="(max-width: 760px) 100vw, 62vw"
                className="cover-image"
              />
            </div>
            <div className="statement-card">
              <Image src="/images/lotus-logo.png" alt="" width={130} height={130} />
              <p>Soft enough to feel.</p>
              <p>Grounded enough to stay.</p>
              <p>Spacious enough to become.</p>
            </div>
          </div>
        </section>

        <section className="pathways section-pad">
          <p className="section-label">Begin with what you need</p>
          <div className="pathway-heading">
            <h2>Not a menu of modalities.<br />A path back to you.</h2>
            <p>
              You do not have to know which healing practice to choose. Start
              with how you want to feel, and Kaitlyn will help shape the way in.
            </p>
          </div>
          <div className="pathway-grid">
            {pathways.map((path) => (
              <Link className="pathway-card" href={path.href} key={path.number}>
                <div className="pathway-top">
                  <span>{path.number}</span>
                  <span className="mini-arrow">↗</span>
                </div>
                <p className="eyebrow">{path.eyebrow}</p>
                <h3>{path.title}</h3>
                <p>{path.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="practice-band">
          <div className="marquee" aria-label="Kaitlyn's healing practices">
            <div>
              Breathwork <span>✦</span> Reiki <span>✦</span> Sound Healing <span>✦</span>
              Yoga <span>✦</span> Quantum Energy <span>✦</span> Mentorship <span>✦</span>
              Breathwork <span>✦</span> Reiki <span>✦</span> Sound Healing <span>✦</span>
            </div>
          </div>
        </section>

        <section className="retreat-feature section-pad dark-section">
          <div className="retreat-feature-copy">
            <p className="section-label light">Retreat beyond the familiar</p>
            <h2>Leave the rhythm you know. Meet the self underneath it.</h2>
            <p>
              Kaitlyn’s destination retreats are intimate, elevated experiences
              where sacred practice, wild beauty, cultural discovery, and real
              human connection become one unfolding journey.
            </p>
            <ArrowLink href="/retreats" light>Explore 2027 retreats</ArrowLink>
          </div>
          <div className="retreat-stack">
            <div className="retreat-feature-image large">
              <Image
                src="/images/kait-costa-rica-opt.jpg"
                alt="Kaitlyn seated among lush tropical plants in Costa Rica"
                fill
                sizes="(max-width: 760px) 90vw, 38vw"
                className="cover-image"
              />
            </div>
            <div className="retreat-feature-image small">
              <Image
                src="/images/kait-yoga-warrior-opt.jpg"
                alt="Kaitlyn practicing yoga beside the ocean"
                fill
                sizes="(max-width: 760px) 40vw, 18vw"
                className="cover-image"
              />
            </div>
            <Image className="retreat-lotus" src="/images/lotus-logo.png" alt="" width={220} height={220} />
          </div>
        </section>

        <section className="about-teaser section-pad">
          <div className="about-teaser-image">
            <Image
              src="/images/kait-portrait-opt.jpg"
              alt="Kaitlyn Robinson"
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
              className="cover-image"
            />
          </div>
          <div className="about-teaser-copy">
            <p className="section-label">Meet your guide</p>
            <h2>Deeply intuitive.<br />Refreshingly human.</h2>
            <p className="lead-quote">
              “I’m not here to give you answers. I’m here to help you feel safe
              enough to hear your own.”
            </p>
            <p>
              Kaitlyn Robinson is a breathwork facilitator, Reiki Master, yoga
              teacher, quantum energy healer, sound healer, spiritual mentor,
              and community builder. Her work bridges lived experience,
              holistic practice, and a grounded understanding of the nervous
              system.
            </p>
            <ArrowLink href="/about" dark>Meet Kaitlyn</ArrowLink>
          </div>
        </section>

        <section className="closing-cta section-pad">
          <OrbitArt className="closing-orbit" />
          <Image src="/images/lotus-logo.png" alt="" width={180} height={180} />
          <p className="section-label">The next breath is yours</p>
          <h2>There is nothing to prove here.<br />Only something to remember.</h2>
          <div className="button-row centered">
            <ArrowLink href="/contact" dark>Book your experience</ArrowLink>
            <ArrowLink href="/schedule">Join a weekly class</ArrowLink>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
