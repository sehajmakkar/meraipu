import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BRANCHES } from "@/constants/branches";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-4 w-4 shrink-0" />}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function buildBreadcrumbForBranch(year: string, branch: string): BreadcrumbItem[] {
  const branchName = BRANCHES[branch] ?? branch;
  return [
    { label: "Home", href: "/" },
    { label: `Year ${year}`, href: `/year/${year}` },
    { label: branchName },
  ];
}

export function buildBreadcrumbForSubject(
  year: string,
  branch: string,
  subjectTitle: string
): BreadcrumbItem[] {
  const branchName = BRANCHES[branch] ?? branch;
  return [
    { label: "Home", href: "/" },
    { label: `Year ${year}`, href: `/year/${year}` },
    { label: branchName, href: `/year/${year}/${branch}` },
    { label: subjectTitle },
  ];
}
