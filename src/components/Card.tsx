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
    <article className="flex flex-col items-center rounded-[16px] border border-[#cfcfcf] bg-white p-8 text-center">
      <span className="flex size-16 items-center justify-center rounded-full bg-[#dcfce7]">
        <Icon size={32} className="text-[#16a34a]" strokeWidth={2} />
      </span>
      <h3 className="mt-5 font-['Nunito_Sans'] text-[18px] font-bold text-[#0a0a0a]">{title}</h3>
      <p className="mt-5 font-['Nunito_Sans'] text-[14px] leading-[24px] text-[#4a5565]">{body}</p>
      <Link
        to={href}
        className="mt-2 font-['Nunito_Sans'] text-[14px] font-bold text-[#222] underline"
      >
        {link}
      </Link>
    </article>
  );
}
