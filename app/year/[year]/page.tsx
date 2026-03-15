import { notFound } from "next/navigation";
import { BackButton } from "@/components/ui/BackButton";
import { Breadcrumb, buildBreadcrumbForBranch } from "@/components/layout/Breadcrumb";
import { BranchGrid } from "@/components/branch/BranchGrid";
import { getValidYears, getAllYearParams } from "@/lib/content";

interface PageProps {
  params: Promise<{ year: string }>;
}

export async function generateStaticParams() {
  return getAllYearParams();
}

export default async function YearBranchPage({ params }: PageProps) {
  const { year } = await params;
  const yearNum = parseInt(year, 10);
  const validYears = getValidYears();

  if (!validYears.includes(yearNum)) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <BackButton href="/" />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: `Year ${year}` },
        ]}
      />
      <h1 className="font-display text-2xl font-bold text-foreground mb-8">
        Select Your Branch — Year {year}
      </h1>
      <BranchGrid year={year} />
    </div>
  );
}
