import { NavLink } from "react-router";
import { Sprout } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/seedscore", label: "Seedscore Tool" },
  { to: "/topics", label: "Topics" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0px_1px_0px_#e1e1e1]">
      <div className="mx-auto flex h-[101px] max-w-[1440px] items-center justify-between px-[55px]">
        <NavLink to="/" className="inline-flex items-center gap-2 rounded-full bg-[#111] px-4 py-2">
          <Sprout size={18} className="text-[#3ecf8e]" strokeWidth={2.5} />
          <span className="font-['Nunito_Sans'] text-[18px] font-bold italic tracking-tight text-[#3ecf8e]">
            SMOL GARDENS
          </span>
        </NavLink>

        <nav className="flex items-center gap-8" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `font-['Inter'] text-[16px] font-semibold text-[#333] transition-colors hover:text-[#761fb1] ${
                  isActive ? "underline underline-offset-4" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="#contact"
            className="rounded-[8px] border-2 border-[#222] px-[30px] py-[9px] font-['Inter'] text-[16px] font-semibold text-[#222] transition-colors hover:bg-[#222] hover:text-white"
          >
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
}
