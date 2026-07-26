import { Users, Lightbulb, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** A run of banner text; a plain string renders as text, an object as a link. */
export type TextSegment = string | { text: string; href: string };

export type Challenge = { lead: string; rest: string };
export type ApproachItem = { icon: LucideIcon; title: string; body: string };

export type AboutContent = {
  originBanner: TextSegment[];
  challengesHeading: string;
  intro: string[];
  challengesLede: string;
  challenges: Challenge[];
  whoHeading: string;
  whoParagraphs: string[];
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  approachHeading: string;
  approach: ApproachItem[];
};

const about: AboutContent = {
  originBanner: [
    "Smol Gardens began as a concept presented by the Femmecubator team at ",
    { text: "BetaNYC's UnSchool of Data 2026", href: "https://schoolofdata.nyc/" },
    " conference on March 2026, emerging from the Open Civic Tech initiative. The second workshop was presented at ",
    {
      text: "Makeshift 2026: Accountable Tech by Design event during NYC Design Week.",
      href: "https://nycxdesign.org/events/makeshift-2026-accountable-tech-by-design",
    },
  ],
  challengesHeading: "Current Challenges: Human-AI Collaborative Workflows",
  intro: [
    "Designers, builders, and civic technologists are facing a core problem: how to develop civic tech responsibly in the age of AI without creating redundant, unmaintainable, or harmful solutions.",
    "Is it possible to create meaningful work using LLM models? When a new wave of vibecoders (builders with no programming skills) are shipping websites in less than a day, there's a clear gap in accountability that needs to be addressed.",
  ],
  challengesLede: "This creates several cascading challenges:",
  challenges: [
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
  ],
  whoHeading: "Who Is This For?",
  whoParagraphs: [
    "The Smol Gardens Project is a guide created for technologists, designers, researchers or educators who are already using AI tools in their workflow.",
    "You can use the Seedscore Impact Assessment Tool as a framework or guide for your workflow, Smol gardens aims to educate and push for alternatives to using LLM models, with an end goal to incorporate Accountable tech principles in a builder's workflow.",
    "In the workshops, participants will be invited to document and audit their work using an impact assessment framework.",
  ],
  ctaLabel: "Check out our research docs",
  ctaHref: "#",
  image: "/img/about-postits.jpg",
  imageAlt: "Sticky notes on a wall mapping out challenges around AI accountability",
  approachHeading: "Our Approach",
  approach: [
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
  ],
};

export default about;
