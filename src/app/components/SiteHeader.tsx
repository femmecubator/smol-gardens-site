import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router";
import { Menu, Sprout, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/seedscore", label: "Seedscore Tool" },
  { to: "/topics", label: "Topics" },
];

const linkClasses = ({ isActive }: { isActive: boolean }) =>
  `font-['Inter'] text-[16px] font-semibold text-[#333] transition-colors hover:text-[#761fb1] ${
    isActive ? "underline underline-offset-4" : ""
  }`;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0px_1px_0px_#e1e1e1]">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:h-[101px] md:px-[55px]">
        <NavLink to="/" className="inline-flex items-center gap-2 rounded-full bg-[#111] px-4 py-2">
          <Sprout size={18} className="text-[#3ecf8e]" strokeWidth={2.5} />
          <span className="font-['Nunito_Sans'] text-[18px] font-bold italic tracking-tight text-[#3ecf8e]">
            SMOL GARDENS
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClasses}>
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

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="grid size-11 shrink-0 place-items-center rounded-[8px] text-[#222] hover:bg-[#f5f6f7] md:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="flex flex-col gap-1 border-t border-[#e5e7eb] bg-white px-6 pb-6 pt-2 md:hidden"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex h-12 items-center rounded-[8px] px-2 ${linkClasses({ isActive })}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex h-12 items-center justify-center rounded-[8px] border-2 border-[#222] font-['Inter'] text-[16px] font-semibold text-[#222]"
          >
            Contact us
          </a>
        </nav>
      )}
    </header>
  );
}
