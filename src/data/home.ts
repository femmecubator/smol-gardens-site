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
  ctaHref: "/seedscore",
  image: "/img/hero-team.jpg",
  imageAlt: "A team of builders and educators collaborating around a table",
};

export const cards: HomeCard[] = [
  {
    icon: Heart,
    title: "Build with Intention",
    body: "Explore our study on accountable AI workflow using Seedscore, a practical frameworks for builders who want to create responsibly.",
    link: "Learn about Smol Gardens >",
    href: "/about",
  },
  {
    icon: Users,
    title: "Contribute to this research",
    body: "Researchers, educators, and civic tech builders — join our working group and help shape accountable AI. Email us to get involved.",
    link: "Join the Working Group >",
    // Copy says "Email us to get involved" but no address exists in the repo
    // yet; point at the topic that describes the working group until one does.
    href: "/docs/topics/community-governance",
  },
  {
    icon: MessageSquare,
    title: "Host a workshop",
    body: "Everything you need to run a Smol Gardens workshop — hosting instructions and materials included. Bring Smol Gardens to your community.",
    link: "Access workshop materials",
    href: "/docs/templates/topic-page",
  },
];
