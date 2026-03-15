"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { SyllabusUnit } from "@/lib/types";

interface SyllabusAccordionProps {
  units: SyllabusUnit[];
}

export function SyllabusAccordion({ units }: SyllabusAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-2">
      {units.map((unit, i) => (
        <div
          key={i}
          className="rounded-xl border border-border bg-card overflow-hidden"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left font-medium text-foreground hover:bg-muted/50 transition-colors"
          >
            <span>{unit.title}</span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 transition-transform ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`grid transition-[grid-template-rows] duration-200 ease-out ${
              openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-4 pt-0">
                <div className="text-muted-foreground whitespace-pre-line text-sm leading-relaxed">
                  {unit.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
