import { ArrowRight, Users, Lightbulb, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import postits from "../../assets/about-postits.jpg";

const challenges: { lead: string; rest: string }[] = [
  {
    lead: "Lack of frameworks for responsible AI-enabled design ",
    rest: "- there's no clear, accessible methodology that allows practitioners to balance speed with responsibility while building civic tech.",
  },
  {
    lead: "Lack of transparency and unaccountability ",
    rest: "- current AI development practices often lack transparency about tradeoffs, making it difficult for communities to understand how AI systems will impact them or to offer meaningful critique.",
  },
  {
    lead: "Scale mismatch",
    rest: " - large language models (LLMs) are presented as the default solution, but they may be overkill for many applications and come with disproportionate environmental and resource costs.",
  },
  {
    lead: "Weakened community agency",
    rest: " - without continuous accountability mechanisms and openness to critique, affected communities lose the ability to shape and govern the AI systems being built for them.",
  },
  {
    lead: "No clear alternative path ",
    rest: "- practitioners who want to build differently lack both a practical toolkit and evidence that smaller, more efficient AI models can deliver meaningful civic tech solutions.",
  },
];

const approach: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Users,
    title: "Design Workshops",
    body: 'Invite participants to document actual AI usage through a "diary mission," using the Impact assessment tool as guide.',
  },
  {
    icon: Lightbulb,
    title: "Impact Framework",
    body: "Create the impact assessment tracking tool. We're developing a framework that measures human, systems, and environmental impact on AI-enabled web-development.",
  },
  {
    icon: Target,
    title: "Small Language Models",
    body: "Use small language models (SLMs) to build a curated repository of civic tech tools hosted by the Accountable Tech working group and will be made available open source for future builders.",
  },
];

export default function About() {
  return (
    <div>
      {/* Origin banner */}
      <section className="bg-[#d5ffca] px-6 py-16 md:px-[200px]">
        <p className="mx-auto max-w-[1200px] font-['Nunito_Sans'] text-[22px] leading-[28px] text-[#364153] md:text-[24px]">
          Smol Gardens began as a concept presented by the Femmecubator team at{" "}
          <a
            href="https://schoolofdata.nyc/"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            BetaNYC's UnSchool of Data 2026
          </a>{" "}
          conference on March 2026, emerging from the Open Civic Tech
          initiative. The second workshop was presented at{" "}
          <a
            href="https://nycxdesign.org/events/makeshift-2026-accountable-tech-by-design"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            Makeshift 2026: Accountable Tech by Design event during NYC Design
            Week.
          </a>
        </p>
      </section>

      {/* Challenges + image */}
      <section className="mx-auto grid max-w-[1200px] grid-cols-1 gap-16 px-6 py-16 md:px-10 lg:grid-cols-[1fr_488px]">
        <div className="max-w-[648px]">
          <h2 className="font-['Nunito_Sans'] text-[27px] font-bold leading-[32px] tracking-tight text-[#101828]">
            Current Challenges: Human-AI Collaborative Workflows
          </h2>

          <div className="mt-6 space-y-5 font-['Nunito_Sans'] text-[18px] leading-[28px] text-[#364153]">
            <p className="font-bold">
              Designers, builders, and civic technologists are facing a core
              problem: how to develop civic tech responsibly in the age of AI
              without creating redundant, unmaintainable, or harmful solutions.
            </p>
            <p className="font-bold">
              Is it possible to create meaningful work using LLM models? When a
              new wave of vibecoders (builders with no programming skills) are
              shipping websites in less than a day, there's a clear gap in
              accountability that needs to be addressed.
            </p>
            <p>This creates several cascading challenges:</p>
            <ol className="list-decimal space-y-3 pl-6">
              {challenges.map((c) => (
                <li key={c.lead}>
                  <span className="font-bold">{c.lead}</span>
                  <span>{c.rest}</span>
                </li>
              ))}
            </ol>

            <h3 className="pt-4 font-bold text-[23px] text-[#101828]">
              Who Is This For?
            </h3>
            <p>
              The Smol Gardens Project is a guide created for technologists,
              designers, researchers or educators who are already using AI tools
              in their workflow.
            </p>
            <p>
              You can use the Seedscore Impact Assessment Tool as a framework or
              guide for your workflow, Smol gardens aims to educate and push for
              alternatives to using LLM models, with an end goal to incorporate
              Accountable tech principles in a builder's workflow.
            </p>
            <p>
              In the workshops, participants will be invited to document and
              audit their work using an impact assessment framework.
            </p>
          </div>

          <a
            href="#"
            className="mt-8 inline-flex h-[48px] w-fit items-center gap-2 rounded-[10px] bg-[#761fb1] px-5 font-['Inter'] text-[16px] text-white transition-colors hover:bg-[#5f1790]"
          >
            Check out our research docs
            <ArrowRight size={20} strokeWidth={2} />
          </a>
        </div>

        <div className="lg:sticky lg:top-[120px] lg:self-start">
          <img
            src={postits}
            alt="Sticky notes on a wall mapping out challenges around AI accountability"
            className="aspect-square w-full max-w-[488px] rounded-[16px] object-cover shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]"
          />
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-[#fafafa] px-6 py-20">
        <div className="mx-auto max-w-[938px]">
          <h2 className="text-center font-['Inter'] text-[28px] tracking-tight text-[#222]">
            Our Approach
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3">
            {approach.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <Icon size={48} className="text-[#364153]" strokeWidth={1.75} />
                <h3 className="mt-5 font-['Inter'] text-[18px] text-[#364153]">
                  {title}
                </h3>
                <p className="mt-5 font-['Inter'] text-[16px] leading-[28px] text-[#364153]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
