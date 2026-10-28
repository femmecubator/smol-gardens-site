import { Users, Lightbulb, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** A run of banner text; a plain string renders as text, an object as a link. */
export type TextSegment = string | { text: string; href: string };

export type Challenge = { lead: string; rest: string };
export type ApproachItem = {
  icon: LucideIcon;
  title: string;
  body: string;
};

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
    { text: "BetaNYC's UnSchool of Data 2026", href: "https://www.beta.nyc/event/unschool-of-data/" },
    " conference on March 2026, emerging from the Open Civic Tech initiative. The second workshop was presented at ",
    {
      text: "Makeshift 2026: Accountable Tech by Design event during NYC Design Week.",
      href: "https://nycxdesign.org/events/makeshift-2026-accountable-tech-by-design",
    },
  ],
  challengesHeading: "Current Challenges: Human-AI Collaborative Workflows",
  intro: [
    "Designers, builders, and civic technologists are facing a core problem: how to develop civic tech responsibly in the age of AI without creating redundant, unmaintainable, or harmful solutions.",
    "Who owns an AI-built tool when it fails? Whose data is protected? What happens to communities served by hastily-built systems? These questions go unasked. Large organizations justify AI as cost-cutting, ignoring real harms: data center expansion, environmental costs, unauthorized creative labor use, and loss of community accountability.",
    "For civic tech to actually serve communities, builders need to understand what guardrails matter in the age of Human-AI collaboration. That's what Smol Gardens is about—building intentionally with small, right-sized models instead of defaulting to what Big Tech is providing us.",
  ],
  challengesLede: "This creates several cascading challenges:",
  challenges: [
    {
      lead: "Velocity Over Responsibility",
      rest: "- While foundational ethical frameworks exist, they are not widely disseminated or adapted for the speed of generative AI. Practitioners lack accessible, real-time methodologies to help them move fast without sacrificing accountability when building civic tools.",
    },
    {
      lead: "Lack of transparency about tradeoffs",
      rest: "- current AI development practices often lack transparency about tradeoffs, making it difficult for communities to understand how AI systems will impact them or to offer meaningful critique.",
    },
    {
      lead: "Scale mismatch",
      rest: " - Large language models (LLMs) are often pushed as the default solution, even when they are overkill and carry heavy environmental and resource costs.",
    },
    {
      lead: "Erosion of community agency",
      rest: " - Without continuous accountability mechanisms and openness, affected communities lose their power to shape and govern the AI systems built for them.",
    },
    {
      lead: "No clear and easy to use alternative path",
      rest: "- Non-technical practitioners who want to build differently lack both a practical toolkit and evidence that smaller, more efficient AI models can deliver meaningful civic tech solutions.",
    },
    {
      lead: "Asymmetric Control & The Trust Gap",
      rest: "- Because models hide their internal logic, users cannot distinguish between facts and confident hallucinations. This creates a dangerous pendulum swing in trust: users either blindly over-trust the AI or abandon it entirely after one mistake.",
    },
  ],
  whoHeading: "Who Is This For?",
  whoParagraphs: [
    "The Smol Gardens Project is a dedicated guide for designers and builders exploring alternative, community-owned, localized, and open-source AI models.",
    "Through it, practitioners leverage resources like the Seedscore Impact Assessment Tool to quantify their ecological footprint and measure projects against responsible computing standards.",
    "Ultimately, workshop participants learn to plan sustainable initiatives and embed accountable AI directly into their daily workflows."
  ],
  ctaLabel: "Search through a reading list",
  ctaHref: "https://askwiki.netlify.app/",
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
