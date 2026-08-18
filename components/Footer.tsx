import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-ink-border py-14">
      <div className="section grid gap-10 md:grid-cols-2">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Referência em criação de aplicativos e sistemas de gestão para negócios
            locais e digitais.
          </p>
        </div>
        <div className="md:justify-self-end">
          <p className="mb-4 text-xs uppercase tracking-[0.15em] text-slate-500">Segmentos</p>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li><a href="#segmentos" className="transition hover:text-white">Saúde &amp; Bem-estar</a></li>
            <li><a href="#segmentos" className="transition hover:text-white">Beleza &amp; Estética</a></li>
            <li><a href="#segmentos" className="transition hover:text-white">Fitness &amp; Performance</a></li>
          </ul>
        </div>
      </div>
      <div className="section mt-10 border-t border-ink-border pt-6">
        <p className="text-xs text-slate-500">© 2026 Nexora. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
