import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { ArrowRight } from "lucide-react";
import content from "@site/src/data/seedscore";
import topics from "@site/docs/topics/_configs";

/** Look a topic up by its `id` so the label always matches the config. */
const topicById = (id: string) =>
  Object.values(topics).find((t) => t.id === id);

export default function Seedscore() {
  return (
    <Layout title="Seedscore Tool" description="Seedscore Impact Assessment Tool for accountable AI workflows">
      <div>
        {/* Intro banner */}
        {/* Full-bleed background, but the text sits in the same 1200/px-10
            container the body sections use so both start on the same left
            edge. Padding on the section itself put the banner 40px in from
            the body copy. */}
        <section className="bg-[var(--color-bg-banner)] py-16">
          <p className="mx-auto max-w-[1200px] px-6 font-['Nunito_Sans'] text-[24px] font-medium leading-snug text-[var(--color-content-default)] md:px-10 md:text-[28px]">
            {content.banner}
          </p>
        </section>

        {/* Getting started hero */}
        <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 px-6 py-20 md:px-10 lg:grid-cols-2">
          <div className="flex flex-col">
            <h2 className="font-['Nunito_Sans'] text-[27px] font-bold tracking-tight text-[var(--color-heading)]">
              {content.heading}
            </h2>
            <p className="mt-6 font-['Nunito_Sans'] text-[16px] leading-relaxed text-[var(--color-text-body)]">
              {content.intro}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 font-['Nunito_Sans'] text-[16px] leading-relaxed text-[var(--color-text-body)]">
              {content.bullets.map((b) => (
                <li key={b.text}>
                  {b.text}
                  <span className="mt-1 flex flex-wrap gap-x-3 text-[14px]">
                    {b.topicIds.map((id) => {
                      const topic = topicById(id);
                      return topic ? (
                        <Link
                          key={id}
                          to={`/docs/topics/${topic.id}`}
                          className="text-[var(--color-accent)] underline"
                        >
                          {topic.title}
                        </Link>
                      ) : null;
                    })}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to={content.ctaHref}
              className="mt-8 inline-flex h-[48px] w-fit items-center gap-2 rounded-[10px] bg-[var(--color-button-primary)] px-5 font-['Inter'] text-[16px] text-white transition-colors hover:bg-[var(--color-button-primary-hover)]"
            >
              {content.ctaLabel}
              <ArrowRight size={20} strokeWidth={2} />
            </Link>
          </div>

          <div className="lg:justify-self-end">
            <img
              src={content.image}
              alt={content.imageAlt}
              className="w-full max-w-[538px] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}
