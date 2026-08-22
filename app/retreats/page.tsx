import Image from "next/image";
import { ArrowLink, InnerHero, PageShell } from "../_components/site";
import { getRetreats } from "../../lib/retreats";

export const metadata = { title: "Retreats", description: "Explore upcoming transformational retreats with Elevate with Kait." };
export const revalidate = 300;

export default async function RetreatsPage() {
  const retreats = await getRetreats();
  return (
    <PageShell><main>
      <InnerHero eyebrow="Destination immersions" title="Go somewhere new. Return as someone remembered." text="These are not escapes from your life. They are beautifully held departures from the noise, created so you can hear what has been waiting beneath it." image="/images/kait-costa-rica-opt.jpg" imageAlt="Kaitlyn in Costa Rica" />
      <section className="retreat-intro section-pad">
        <p className="section-label">Upcoming journeys</p>
        <div><h2>Two places.<br />Two portals.<br />One way home.</h2><p>Each Elevate retreat brings together soulful practice, intentional adventure, and genuine community. The destination changes. The devotion to safety, depth, beauty, and integration does not.</p></div>
      </section>
      <section className="retreat-list section-pad">
        {retreats.map((retreat, index) => (
          <article className="retreat-card" key={`${retreat.name}-${retreat.date}`}>
            <div className="retreat-card-image">
              <Image src={retreat.location.toLowerCase().includes("egypt") ? "/images/egypt-pyramids-opt.jpg" : "/images/costa-rica-jungle-opt.jpg"} alt={retreat.location.toLowerCase().includes("egypt") ? "The Great Pyramids of Giza in Egypt" : "Dominical beach on Costa Rica's Pacific coast"} fill sizes="(max-width: 760px) 100vw, 50vw" className="cover-image" />
              <span className="retreat-index">0{index + 1}</span>
            </div>
            <div className="retreat-card-copy">
              <p className="eyebrow">{retreat.location} · {retreat.date}</p>
              <h2>{retreat.name}</h2>
              <p>{retreat.description}</p>
              <ArrowLink href={retreat.url} dark external={retreat.url.startsWith("http")}>Explore the journey</ArrowLink>
            </div>
          </article>
        ))}
      </section>
      <section className="sheet-note section-pad"><Image src="/images/lotus-logo.png" alt="" width={110} height={110} /><p>Retreat details are connected to Kaitlyn’s live retreat calendar, so new journeys appear here as they are released.</p></section>
    </main></PageShell>
  );
}
