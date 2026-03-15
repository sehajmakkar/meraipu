"use client";

import { useState } from "react";
import type { Subject } from "@/lib/types";
import { TabNav, type SubjectTab } from "./TabNav";
import { SyllabusAccordion } from "./SyllabusAccordion";
import { PdfCard } from "./PdfCard";

interface SubjectDetailProps {
  subject: Subject;
}

export function SubjectDetail({ subject }: SubjectDetailProps) {
  const [activeTab, setActiveTab] = useState<SubjectTab>("syllabus");

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-foreground mb-2">
        {subject.title}
      </h1>
      <p className="text-muted-foreground mb-8">{subject.code}</p>

      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="mt-8">
        {activeTab === "syllabus" && (
          <SyllabusAccordion units={subject.units} />
        )}
        {activeTab === "practical" && (
          <div className="grid gap-4 sm:grid-cols-2">
            {(subject.practicalFiles ?? []).length === 0 ? (
              <p className="text-muted-foreground col-span-full">No practical files added yet.</p>
            ) : (
              (subject.practicalFiles ?? []).map((file, i) => (
                <PdfCard key={i} file={file} />
              ))
            )}
          </div>
        )}
        {activeTab === "pyqs" && (
          <div className="grid gap-4 sm:grid-cols-2">
            {(subject.pyqs ?? []).length === 0 ? (
              <p className="text-muted-foreground col-span-full">No PYQs added yet.</p>
            ) : (
              (subject.pyqs ?? []).map((file, i) => (
                <PdfCard key={i} file={file} />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
