import Link from "@docusaurus/Link";
import type { LucideIcon } from "lucide-react";

export type CardProps = {
  icon: LucideIcon;
  title: string;
  body: string;
  link: string;
  /** Destination for the card's link. */
  href: string;
};

export default function Card({ icon: Icon, title, body, link, href }: CardProps) {
  return (
    // Icon and title centre, body and link stay left-aligned — the design
    // centres only the first two, so a blanket text-center was wrong.
    <article className="flex flex-col items-center rounded-[16px] border border-[var(--color-border-muted)] bg-white p-8">
      <span className="flex size-16 items-center justify-center rounded-full bg-[var(--color-icon-accent-bg)]">
        <Icon size={32} className="text-[var(--color-icon-accent)]" strokeWidth={2} />
      </span>
      <h3 className="mt-5 w-full text-center font-['Nunito_Sans'] text-[18px] font-bold leading-[24px] tracking-[-0.31px] text-[var(--color-text-strong)]">{title}</h3>
      <p className="mt-5 w-full font-['Nunito_Sans'] text-[14px] leading-[24px] tracking-[-0.31px] text-[var(--color-text-muted)]">{body}</p>
      <Link
        to={href}
        className="mt-1.5 w-full font-['Nunito_Sans'] text-[14px] font-bold leading-[24px] tracking-[-0.31px] text-[var(--color-content-default)] underline"
      >
        {link}
      </Link>
    </article>
  );
}
