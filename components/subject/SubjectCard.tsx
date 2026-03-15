import Link from "next/link";
import type { Subject } from "@/lib/types";

interface SubjectCardProps {
  subject: Subject;
  year: string;
  branch: string;
}

export function SubjectCard({ subject, year, branch }: SubjectCardProps) {
  return (
    <Link
      href={`/year/${year}/${branch}/${subject.slug}`}
      className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md block"
    >
      <h2 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
        {subject.title}
      </h2>
      <p className="text-sm text-muted-foreground mt-1">{subject.code}</p>
    </Link>
  );
}
