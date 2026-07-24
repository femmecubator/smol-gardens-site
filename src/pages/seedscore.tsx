import Layout from "@theme/Layout";
import { ArrowRight } from "lucide-react";

const bullets = [
  "Identify where you can intentionally enable LLMs, and think about reducing redundant prompting.",
  "Proactively plan for maintenance, security, and accessibility decisions.",
  "Adopt AI usage transparency from end to end, and refocus your practice on prioritizing your community.",
];

export default function Seedscore() {
  return (
    <Layout title="Seedscore Tool" description="Seedscore Impact Assessment Tool for accountable AI workflows">
      <div>
        {/* Intro banner */}
        <section className="bg-[#d5ffca] px-6 py-16 md:px-[200px]">
          <p className="mx-auto max-w-[1200px] font-['Nunito_Sans'] text-[24px] font-medium leading-snug text-[#222] md:text-[28px]">
            Seedscore is an Impact Assessment Tool made for builders to implement
            guardrails for AI-driven workflows. It follows Responsible Computing
            and Socio-technical framework.
          </p>
        </section>

        {/* Getting started hero */}
        <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 px-6 py-20 md:px-10 lg:grid-cols-2">
          <div className="flex flex-col">
            <h2 className="font-['Nunito_Sans'] text-[27px] font-bold tracking-tight text-[#101828]">
              How to get started with Seedscore
            </h2>
            <p className="mt-6 font-['Nunito_Sans'] text-[16px] leading-relaxed text-[#364153]">
              Seedscore applies responsible computing principles to project
              planning, putting accountable AI frameworks into practice. This guide
              is meant to be included in your workflow as a way to measure your
              project's impact when using generative AI models.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 font-['Nunito_Sans'] text-[16px] leading-relaxed text-[#364153]">
              {bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <a
              href="#"
              className="mt-8 inline-flex h-[48px] w-fit items-center gap-2 rounded-[10px] bg-[#761fb1] px-5 font-['Inter'] text-[16px] text-white transition-colors hover:bg-[#5f1790]"
            >
              Start using Seedscore
              <ArrowRight size={20} strokeWidth={2} />
            </a>
          </div>

          <div className="lg:justify-self-end">
            <img
              src="/img/seedscore-report.png"
              alt="Seedscore environment report showing estimated CO₂, inference calls, model used, and efficiency comparison"
              className="w-full max-w-[538px] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}
