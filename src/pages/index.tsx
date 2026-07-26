import Layout from "@theme/Layout";
import Card from "@site/src/components/Card";
import { hero, cards } from "@site/src/data/home";

export default function Home() {
  return (
    <Layout title="Smol Gardens" description="Accountable AI guide for Builders and Educators">
      <div className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[720px]" style={{ background: "radial-gradient(1200px 520px at 85% 8%, #d7f6e3 0%, rgba(215,246,227,0) 60%), radial-gradient(700px 380px at 78% 62%, #cfe0ff 0%, rgba(207,224,255,0) 65%)" }} />
        <div className="relative mx-auto max-w-[1200px] px-6 pb-24 pt-16 md:px-10">
          <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <h1 className="font-['Nunito_Sans'] text-[40px] font-medium leading-[1.15] text-[#222] md:text-[48px] md:leading-[56px]">
                {hero.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h1>
              <a href={hero.ctaHref} className="inline-flex h-[48px] w-fit items-center justify-center rounded-[10px] bg-[#761fb1] px-6 font-['Inter'] text-[16px] text-white transition-colors hover:bg-[#5f1790]">{hero.ctaLabel}</a>
            </div>
            <div className="lg:justify-self-end">
              <img src={hero.image} alt={hero.imageAlt} className="aspect-[492/328] w-full max-w-[492px] rounded-[16px] object-cover" />
            </div>
          </section>
          <section className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-3">
            {cards.map((c) => <Card key={c.title} {...c} />)}
          </section>
        </div>
      </div>
    </Layout>
  );
}
