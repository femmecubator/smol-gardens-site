import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { ArrowRight } from "lucide-react";
import content from "@site/src/data/about";
import topics from "@site/docs/topics/_configs";

/** Look a topic up by its `id` so the label always matches the config. */
const topicById = (id: string) =>
  Object.values(topics).find((t) => t.id === id);

function TopicLink({ id }: { id: string }) {
  const topic = topicById(id);
  if (!topic) return null;
  return (
    <Link
      to={`/docs/topics/${topic.id}`}
      className="text-[16px] text-[#761fb1] underline"
    >
      Read more: {topic.title}
    </Link>
  );
}

export default function About() {
  return (
    <Layout title="About" description="About the Smol Gardens project">
      <div>
        {/* Origin banner */}
        <section className="bg-[#d5ffca] px-6 py-16 md:px-[200px]">
          <p className="mx-auto max-w-[1200px] font-['Nunito_Sans'] text-[22px] leading-[28px] text-[#364153] md:text-[24px]">
            {content.originBanner.map((seg, i) =>
              typeof seg === "string" ? (
                <span key={i}>{seg}</span>
              ) : (
                <a key={i} href={seg.href} target="_blank" rel="noreferrer" className="underline">
                  {seg.text}
                </a>
              ),
            )}
          </p>
        </section>

        {/* Challenges + image */}
        <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-16 px-6 py-16 md:px-10 lg:grid-cols-[1fr_488px]">
          <div className="max-w-[648px]">
            <h2 className="font-['Nunito_Sans'] text-[27px] font-bold leading-[32px] tracking-tight text-[#101828]">
              {content.challengesHeading}
            </h2>

            <div className="mt-6 space-y-5 font-['Nunito_Sans'] text-[18px] leading-[28px] text-[#364153]">
              {content.intro.map((p) => (
                <p key={p} className="font-bold">
                  {p}
                </p>
              ))}
              <p>{content.challengesLede}</p>
              <ol className="list-decimal space-y-3 pl-6">
                {content.challenges.map((c) => (
                  <li key={c.lead}>
                    <span className="font-bold">{c.lead}</span>
                    <span>{c.rest}</span>{" "}
                    <TopicLink id={c.topicId} />
                  </li>
                ))}
              </ol>

              <h3 className="pt-4 font-bold text-[23px] text-[#101828]">
                {content.whoHeading}
              </h3>
              {content.whoParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <Link
              to={content.ctaHref}
              className="mt-8 inline-flex h-[48px] w-fit items-center gap-2 rounded-[10px] bg-[#761fb1] px-5 font-['Inter'] text-[16px] text-white transition-colors hover:bg-[#5f1790]"
            >
              {content.ctaLabel}
              <ArrowRight size={20} strokeWidth={2} />
            </Link>
          </div>

          <div className="lg:sticky lg:top-[120px] lg:self-start">
            <img
              src={content.image}
              alt={content.imageAlt}
              className="aspect-square w-full max-w-[488px] rounded-[16px] object-cover shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]"
            />
          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-[#fafafa] px-6 py-20">
          <div className="mx-auto max-w-[938px]">
            <h2 className="text-center font-['Inter'] text-[28px] tracking-tight text-[#222]">
              {content.approachHeading}
            </h2>
            <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3">
              {content.approach.map(({ icon: Icon, title, body, topicId }) => (
                <div key={title} className="flex flex-col items-center text-center">
                  <Icon size={48} className="text-[#364153]" strokeWidth={1.75} />
                  <h3 className="mt-5 font-['Inter'] text-[18px] text-[#364153]">
                    {title}
                  </h3>
                  <p className="mt-5 font-['Inter'] text-[16px] leading-[28px] text-[#364153]">
                    {body}
                  </p>
                  <span className="mt-3">
                    <TopicLink id={topicId} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
