export type SeedscoreContent = {
  banner: string;
  heading: string;
  intro: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
};

const seedscore: SeedscoreContent = {
  banner:
    "Seedscore is an Impact Assessment Tool made for builders to implement guardrails for AI-driven workflows. It follows Responsible Computing and Socio-technical framework.",
  heading: "How to get started with Seedscore",
  intro:
    "Seedscore applies responsible computing principles to project planning, putting accountable AI frameworks into practice. This guide is meant to be included in your workflow as a way to measure your project's impact when using generative AI models.",
  bullets: [
    "Identify where you can intentionally enable LLMs, and think about reducing redundant prompting.",
    "Proactively plan for maintenance, security, and accessibility decisions.",
    "Adopt AI usage transparency from end to end, and refocus your practice on prioritizing your community.",
  ],
  ctaLabel: "Start using Seedscore",
  ctaHref: "#",
  image: "/img/seedscore-report.png",
  imageAlt:
    "Seedscore environment report showing estimated CO₂, inference calls, model used, and efficiency comparison",
};

export default seedscore;
