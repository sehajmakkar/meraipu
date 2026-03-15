import { notFound } from "next/navigation";
import { BackButton } from "@/components/ui/BackButton";
import { Breadcrumb, buildBreadcrumbForBranch } from "@/components/layout/Breadcrumb";
import { SubjectCard } from "@/components/subject/SubjectCard";
import {
  getSubjectsForBranchYear,
  getValidYears,
  getBranches,
} from "@/lib/content";
import { BRANCHES } from "@/constants/branches";

interface PageProps {
  params: Promise<{ year: string; branch: string }>;
}

export async function generateStaticParams() {
  const branches = getBranches();
  const params: { year: string; branch: string }[] = [];
  for (const year of getValidYears()) {
    for (const branch of branches) {
      params.push({ year: String(year), branch });
    }
  }
  return params;
}

export default async function BranchSubjectsPage({ params }: PageProps) {
  const { year, branch } = await params;
  const yearNum = parseInt(year, 10);

  if (!getValidYears().includes(yearNum) || !BRANCHES[branch]) {
    notFound();
  }

  const subjects = getSubjectsForBranchYear(yearNum, branch);
  const branchName = BRANCHES[branch];

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <BackButton href={`/year/${year}`} />
      <Breadcrumb items={buildBreadcrumbForBranch(year, branch)} />
      <h1 className="font-display text-2xl font-bold text-foreground mb-8">
        Year {year} — {branchName} Subjects
      </h1>

      {subjects.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-12 text-center">
          <p className="text-muted-foreground">No subjects added yet.</p>
          <p className="text-sm text-muted-foreground mt-2">Coming soon.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <SubjectCard
              key={subject.slug}
              subject={subject}
              year={year}
              branch={branch}
            />
          ))}
        </div>
      )}
    </div>
  );
}
