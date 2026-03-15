"use client";

import { useState } from "react";

export type SubjectTab = "syllabus" | "practical" | "pyqs";

const TABS: { id: SubjectTab; label: string }[] = [
  { id: "syllabus", label: "Syllabus" },
  { id: "practical", label: "Practical File" },
  { id: "pyqs", label: "PYQs" },
];

interface TabNavProps {
  activeTab: SubjectTab;
  onTabChange: (tab: SubjectTab) => void;
}

export function TabNav({ activeTab, onTabChange }: TabNavProps) {
  return (
    <div className="border-b border-border">
      <nav className="flex gap-8" aria-label="Subject tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className="relative pb-4 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm"
          >
            <span
              className={
                activeTab === tab.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }
            >
              {tab.label}
            </span>
            {activeTab === tab.id && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                aria-hidden
              />
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
