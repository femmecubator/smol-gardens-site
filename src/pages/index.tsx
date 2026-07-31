import Layout from "@theme/Layout";
import Card from "@site/src/components/Card";
import { hero, cards } from "@site/src/data/home";

export default function Home() {
  return (
    <Layout title="Smol Gardens" description="Accountable AI guide for Builders and Educators">
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[720px]"
          style={{
            background:
              "radial-gradient(1200px 520px at 85% 8%, var(--color-hero-glow-green) 0%, rgba(215,246,227,0) 60%), radial-gradient(700px 380px at 78% 62%, var(--color-hero-glow-blue) 0%, rgba(207,224,255,0) 65%)",
          }}
        />
        {/* 1200px frame with a 61px inner inset, so content is 1078 wide —
            the width the design's hero columns and card row both align to. */}
        <div className="relative mx-auto max-w-[1200px] px-6 pb-[83px] pt-[65px] md:px-[61px]">
          <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[493fr_492fr] lg:gap-[93px]">
            <div className="flex flex-col gap-8">
              <h1 className="font-['Nunito_Sans'] text-[40px] font-medium leading-[1.15] text-[var(--color-content-default)] md:text-[48px] md:leading-[56px]">
                {hero.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </h1>
              <a href={hero.ctaHref} className="inline-flex h-[48px] w-fit items-center justify-center rounded-[10px] bg-[var(--color-button-primary)] px-[19px] font-['Inter'] text-[16px] font-normal leading-[24px] tracking-[-0.31px] text-white transition-colors hover:bg-[var(--color-button-primary-hover)]">{hero.ctaLabel}</a>
            </div>
            <div className="lg:justify-self-end">
              <img src={hero.image} alt={hero.imageAlt} className="aspect-[492/328] w-full max-w-[492px] rounded-[24px] object-cover" />
            </div>
          </section>
          <section className="mt-[48px] grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-[57px]">
            {cards.map((c) => <Card key={c.title} {...c} />)}
          </section>
        </div>
      </div>
    </Layout>
  );
}
