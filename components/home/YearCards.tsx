import Link from "next/link";

const years = [
  { year: 1, label: "1st Year", href: "/year/1" },
  { year: 2, label: "2nd Year", href: "/year/2" },
  { year: 3, label: "3rd Year", href: "/year/3" },
  { year: 4, label: "4th Year", comingSoon: true },
];

export function YearCards() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {years.map(({ year, label, href, comingSoon }) =>
        comingSoon ? (
          <div
            key={year}
            className="rounded-xl border border-border bg-card p-6 shadow-sm opacity-75"
          >
            <h2 className="font-display text-xl font-semibold text-foreground mb-1">
              {label}
            </h2>
            <p className="text-sm text-muted-foreground font-medium">Coming Soon</p>
          </div>
        ) : (
          <Link
            key={year}
            href={href!}
            className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
          >
            <h2 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
              {label}
            </h2>
            <p className="text-sm text-muted-foreground">View branches & subjects</p>
          </Link>
        )
      )}
    </div>
  );
}
