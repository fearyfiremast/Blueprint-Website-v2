import React from "react";
import { Link } from "react-router-dom";

export interface NavigationTabsProps {
  tabs: { label: string; href: string }[];
  activeHref?: string;
}

export default function NavigationTabs({ tabs, activeHref }: NavigationTabsProps) {
  return (
    <nav className="w-full font-poppins" aria-label="Section navigation">
      <div
        className="flex flex-nowrap gap-x-6 overflow-x-auto border-b border-blueprint-neutral-mutedAlt [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {tabs.map((tab) => {
          const isActive = activeHref != null && tab.href === activeHref;
          return (
            <Link
              key={tab.href}
              to={tab.href}
              className={`group relative block shrink-0 py-3 px-4 text-sm leading-[100%] tracking-normal whitespace-nowrap transition-colors duration-150 ${
                isActive ? "text-blueprint-linkHover" : "text-blueprint-neutral-dark"
              }               ${
                isActive
                  ? "-mb-px after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-1px] after:h-[6px] after:bg-blueprint-linkHover after:rounded-t-full after:shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
                  : ""
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="relative inline-block">
                <span className="font-semibold invisible select-none" aria-hidden>
                  {tab.label}
                </span>
                <span
                  className={`absolute inset-0 flex items-center ${isActive ? "font-semibold" : "font-normal group-hover:font-semibold"}`}
                >
                  {tab.label}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
