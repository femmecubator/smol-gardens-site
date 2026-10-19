import { Heart, Users, MessageSquare } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type HomeCard = {
  icon: LucideIcon;
  title: string;
  body: string;
  link: string;
  /** Where the card's link goes. */
  href: string;
};

export type HomeHero = {
  title: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
};

export const hero: HomeHero = {
  title: "Accountable AI\nguide for Builders and Educators",
  ctaLabel: "Plan your projects with Seedscore",
  ctaHref: "https://seedscore.netlify.app",
  image: "/img/hero-team.jpg",
  imageAlt: "A team of builders and educators collaborating around a table",
};

export const cards: HomeCard[] = [
  {
    icon: Heart,
    title: "Build with Intention",
    body: "Explore our study on accountable AI using Seedscore, an impact assessment tool where you track against design principles for AI-enabled workflows.",
    link: "Learn about Seedscore >",
    href: "/seedscore",
  },
  {
    icon: Users,
    title: "Contribute to this research",
    body: "Researchers, educators, and civic tech builders — join our working group and help shape accountable AI. Complete the form or reach out to the Open Civic Tech team at community@opencivic.tech.",
    link: "Join the Working Group >",
    // Copy says "Email us to get involved" but no address exists in the repo
    // yet; point at the topic that describes the working group until one does.
    href: "https://docs.google.com/forms/d/1so4UCcg7znJr8Y6p6PbC734GFCASsoL1Zlh7krHRkIQ/preview",
  },
  {
    icon: MessageSquare,
    title: "Host a workshop",
    body: "Everything you need to run a Smol Gardens workshop — hosting instructions and materials included. Bring Smol Gardens to your community.",
    link: "Access workshop materials",
    href: "https://gist.github.com/kriziaf/0f26e854766bdcbfdb44fb8ffa71bc93",
  },
];
