import { ReactNode } from "react";
import Image from "next/image";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-ink-border bg-ink-800/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-slate-300">
      <span className="h-2 w-2 rotate-45 bg-brand-400" />
      {children}
    </span>
  );
}

export function SectionHeading({
  badge,
  title,
  highlight,
  after,
  subtitle,
  center = true,
}: {
  badge?: string;
  title: string;
  highlight?: string;
  after?: string;
  subtitle?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-xl"}>
      {badge && (
        <div className={center ? "flex justify-center" : ""}>
          <Badge>{badge}</Badge>
        </div>
      )}
      <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
        {after && ` ${after}`}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PrimaryButton({
  children,
  href = "#contato",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full bg-brand-gradient px-7 py-4 text-sm font-semibold uppercase tracking-wide text-white shadow-glow transition hover:brightness-110 ${className}`}
    >
      {children}
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition group-hover:translate-x-0.5">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}

/* Mockup real do dashboard, exportado do Figma */
export function DashboardMock() {
  return (
    <div className="overflow-hidden rounded-2xl shadow-2xl">
      <Image
        src="/figma-assets/hero-mockup.png"
        alt="Dashboard exclusivo Nexora"
        width={1000}
        height={490}
        priority
        className="h-auto w-full"
      />
    </div>
  );
}
