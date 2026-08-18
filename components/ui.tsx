import { ReactNode } from "react";

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
      <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
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
      className={`group inline-flex items-center gap-3 rounded-full bg-brand-gradient px-7 py-4 text-sm font-semibold text-white shadow-glow transition hover:brightness-110 ${className}`}
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

/* Mockup estilizado de dashboard (placeholder do print do Figma) */
export function DashboardMock() {
  const stats = [
    { label: "Clientes ativos", value: "1.286", delta: "+18,6%" },
    { label: "Agendamentos", value: "342", delta: "+12,4%" },
    { label: "Usuários recorrentes", value: "764", delta: "+23,1%" },
    { label: "Receita gerada", value: "R$ 48.690", delta: "+16,7%" },
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-border bg-ink-card shadow-2xl">
      <div className="flex items-center justify-between border-b border-ink-border px-5 py-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <span className="text-gradient">Nexora</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-ink-700 px-2 py-1 text-[10px] text-slate-400">Produção</span>
          <div className="h-6 w-6 rounded-full bg-brand-gradient text-center text-[10px] leading-6 text-white">GN</div>
        </div>
      </div>
      <div className="p-5">
        <p className="text-lg font-semibold text-white">Olá, Gestor 👋</p>
        <p className="mb-4 text-xs text-slate-400">Gerencie seu aplicativo exclusivo e impulsione seus resultados.</p>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-ink-border bg-ink-800 p-3">
              <p className="text-[10px] text-slate-400">{s.label}</p>
              <p className="mt-1 text-lg font-bold text-white">{s.value}</p>
              <p className="text-[10px] font-medium text-brand-400">{s.delta}</p>
              <div className="mt-3 h-8 rounded bg-gradient-to-t from-brand-500/30 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
