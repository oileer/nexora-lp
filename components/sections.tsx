"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Badge, SectionHeading, PrimaryButton, DashboardMock } from "./ui";
import { LogoMark } from "./Logo";
import { Reveal, RevealGroup, Spotlight, CountUpMetric, WordReveal } from "./motion";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/* ---------------- HERO ---------------- */
export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="aplicativo" className="relative overflow-hidden pt-40 pb-24">
      <motion.div
        className="pointer-events-none absolute inset-0 bg-radial-glow animate-breathe"
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1.2, ease: EASE_OUT_EXPO }}
      />
      <div className="section relative text-center">
        <motion.div
          className="flex justify-center"
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        >
          <Badge>Aplicativos Exclusivos</Badge>
        </motion.div>
        <motion.h1
          className="mx-auto mt-8 max-w-[720px] text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl md:text-[60px]"
          initial={reduce ? undefined : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE_OUT_EXPO }}
        >
          Um aplicativo <WordReveal className="text-gradient" text="feito sob medida para a sua marca." />{" "}
          Não um template. O seu.
        </motion.h1>
        <motion.p
          className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE_OUT_EXPO }}
        >
          Enquanto o mercado divide o mesmo app genérico entre centenas de negócios, a
          Nexora cria aplicativos exclusivos, com a sua marca, as suas regras e
          funcionalidades que só você tem. Mais autoridade, mais recorrência, mais controle.
        </motion.p>
        <motion.div
          className="mt-10 flex justify-center"
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE_OUT_EXPO }}
        >
          <PrimaryButton>Quero meu aplicativo exclusivo</PrimaryButton>
        </motion.div>
        <motion.div
          className="relative mx-auto mt-20 max-w-4xl"
          initial={reduce ? undefined : { opacity: 0, y: 24, scale: 0.98 }}
          animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE_OUT_EXPO }}
        >
          <div className="absolute -inset-x-10 -top-10 bottom-0 bg-radial-glow blur-2xl animate-breathe" />
          <div className="relative animate-floaty">
            <DashboardMock />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
export function Marquee() {
  const items = ["Suas regras", "Seu aplicativo", "Sua marca", "Aplicativos exclusivos", "Sistemas sob medida"];
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-ink-border bg-gradient-to-r from-brand-600/30 via-ink-800 to-brand-600/30 py-5">
      <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-lg font-semibold uppercase tracking-wide text-white/90">
            {t}
            <LogoMark className="h-5 w-5" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- PROBLEMA ---------------- */
function ProblemCard({ icon, title, text, full = false }: { icon: ReactNode; title: string; text: string; full?: boolean }) {
  return (
    <div className={`rounded-2xl border border-ink-border bg-ink-card p-6 ${full ? "sm:col-span-2" : ""}`}>
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-ink-border bg-ink-800 text-slate-300">
        {icon}
      </div>
      <h3 className="font-semibold text-white">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{text}</p>
    </div>
  );
}

export function Problem() {
  return (
    <section id="diferenciais" className="relative overflow-hidden py-24">
      <div
        className="pointer-events-none absolute -left-40 -top-32 -z-10 h-[620px] w-[620px] animate-breathe opacity-70"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(29,111,242,0.5) 0%, rgba(29,111,242,0.18) 35%, rgba(5,7,11,0) 70%)",
        }}
      />
      <div className="section">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <SectionHeading
            center={false}
            badge="Seu negócio"
            title="Seu negócio é referência. Por que o seu app é"
            highlight="igual ao de todo mundo?"
          />
          <p className="text-base leading-relaxed text-slate-400 lg:pt-16">
            Você construiu uma marca forte, um atendimento impecável, uma clientela fiel.
            Mas na hora de agendar, o seu cliente{" "}
            <span className="text-white">cai no mesmo aplicativo genérico que dezenas de outros negócios também usam.</span>{" "}
            Mesmo layout, mesmo nome no topo, mesma experiência de sempre.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div>
            <div className="mb-5 flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-950/20 p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" /><path d="m4 4 16 16" strokeLinecap="round" /></svg>
              </span>
              <p className="text-sm leading-relaxed text-slate-300">
                Isso não passa autoridade. Passa a mensagem de que você é <span className="text-white">mais um</span>.
                E no seu nível de mercado, ser mais um <span className="text-white">custa caro</span>.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal delay={0}>
                <ProblemCard
                  title="App clonado"
                  text="Um app genérico que dezenas de negócios usam igual ao seu."
                  icon={<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></svg>}
                />
              </Reveal>
              <Reveal delay={0.08}>
                <ProblemCard
                  title="Marca escondida"
                  text="Sua identidade fica dentro da marca de outra empresa."
                  icon={<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z" /><path d="m4 4 16 16" strokeLinecap="round" /></svg>}
                />
              </Reveal>
              <Reveal delay={0.16}>
                <ProblemCard
                  title="Zero exclusividade"
                  text="Nenhuma funcionalidade que seja só sua."
                  icon={<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>}
                />
              </Reveal>
              <Reveal delay={0.24}>
                <ProblemCard
                  title="Sem recorrência"
                  text="Cliente sem motivo pra voltar sempre ao seu app."
                  icon={<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 2l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></svg>}
                />
              </Reveal>
              <Reveal delay={0.32} className="sm:col-span-2">
                <ProblemCard
                  full
                  title="Refém da plataforma"
                  text="Preso às regras e limitações de terceiros."
                  icon={<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" /><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" /></svg>}
                />
              </Reveal>
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center justify-between rounded-t-2xl border border-ink-border bg-ink-card px-5 py-3">
              <span className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M4 16V6a2 2 0 0 1 2-2h10" /></svg>
                Todos usam o mesmo
              </span>
              <span className="rounded-full bg-red-500/15 px-2.5 py-1 text-[10px] font-semibold text-red-400">CTRL+C · CTRL+V</span>
            </div>
            <div className="overflow-hidden rounded-2xl border border-ink-border">
              <Image
                src="/figma-assets/chat-generic-mockup.png"
                alt="Todos os negócios usam o mesmo aplicativo genérico"
                width={587}
                height={340}
                className="h-auto w-full"
              />
            </div>
            <div className="mt-5 rounded-2xl border border-brand-500/40 bg-brand-500/10 p-6">
              <p className="text-lg font-medium text-white">
                No topo do mercado, exclusividade não é luxo.{" "}
                <span className="text-gradient font-semibold">É posicionamento.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SEGMENTOS ---------------- */
function SegmentCard({ icon, title, text, tags, image, cta }: { icon: ReactNode; title: string; text: string; tags: string; image: string; cta: string }) {
  return (
    <Spotlight className="group rounded-2xl border border-ink-border bg-ink-card p-6 transition hover:border-brand-500/50">
      <div className="mb-5 overflow-hidden rounded-xl shadow-glow-sm">
        <Image src={image} alt={title} width={430} height={210} className="h-auto w-full" />
      </div>
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
      <p className="mt-4 text-xs uppercase tracking-wide text-slate-500">{tags}</p>
      <a href="#contato" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-400 transition hover:text-brand-300">
        {cta} <span aria-hidden>→</span>
      </a>
    </Spotlight>
  );
}

export function Segments() {
  return (
    <section id="segmentos" className="py-24">
      <div className="section">
        <SectionHeading
          badge="Segmentos de atuação"
          title="Uma"
          highlight="solução, feita sob medida"
          after="para o seu segmento."
          subtitle="O modelo Nexora se adapta a qualquer negócio de serviço recorrente. Escolha o seu e veja a solução pensada pra ele."
        />
        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            <SegmentCard
              key="saude"
              title="Saúde & Bem-estar"
              text="App próprio pra agendamento, recorrência e relacionamento com o paciente."
              tags="Clínicas · consultórios · terapias"
              cta="Ver solução para Saúde"
              image="/figma-assets/segment-saude.png"
              icon={<svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-7-4.35-9.5-8.5C.9 9.5 2.5 6 6 6c2 0 3.2 1.2 4 2.3C10.8 7.2 12 6 14 6c3.5 0 5.1 3.5 3.5 6.5C19 16.65 12 21 12 21z" /></svg>}
            />,
            <SegmentCard
              key="beleza"
              title="Beleza & Estética"
              text="App exclusivo com a sua marca pra fidelizar e elevar a percepção do seu serviço."
              tags="Barbearias · salões · estúdios"
              cta="Ver solução para Beleza"
              image="/figma-assets/segment-beleza.png"
              icon={<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" /></svg>}
            />,
            <SegmentCard
              key="fitness"
              title="Fitness & Performance"
              text="App sob medida pra agenda, planos e engajamento dos seus alunos."
              tags="Estúdios · personal · boxes"
              cta="Ver solução para Fitness"
              image="/figma-assets/segment-fitness.png"
              icon={<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6.5 6.5 17.5 17.5M4 8l4-4M20 16l-4 4M3 15l6-6M15 3l6 6" strokeLinecap="round" /></svg>}
            />,
          ]}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ---------------- DIFERENCIAL (alugar x ter) ---------------- */
const CompareIcons = {
  users: <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
  eye: <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z" /><circle cx="12" cy="12" r="3" /></svg>,
  puzzle: <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" /><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" /></svg>,
  shield: <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /></svg>,
};

function CompareRow({ text, ok, icon }: { text: string; ok?: boolean; icon: keyof typeof CompareIcons }) {
  return (
    <div className={`flex items-center gap-3 rounded-xl border px-4 py-3.5 ${ok ? "border-brand-500/30 bg-brand-500/10" : "border-ink-border bg-ink-800"}`}>
      <span className={ok ? "text-brand-300" : "text-slate-500"}>{CompareIcons[icon]}</span>
      <span className={`flex-1 ${ok ? "text-white" : "text-slate-400"}`}>{text}</span>
      {ok ? (
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-500 text-white">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      ) : (
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-ink-border text-slate-500">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" /></svg>
        </span>
      )}
    </div>
  );
}

export function Differential() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="section">
        <div className="relative mx-auto mb-12 max-w-4xl overflow-visible rounded-2xl border border-ink-border shadow-glow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/figma-assets/differential-arc-glow.png"
            alt=""
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-40 -z-10 h-[520px] w-[520px] animate-breathe select-none mix-blend-screen"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/figma-assets/differential-arc-glow.png"
            alt=""
            aria-hidden
            className="pointer-events-none absolute -bottom-40 -right-32 -z-10 h-[520px] w-[520px] rotate-180 animate-breathe select-none mix-blend-screen"
          />
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/figma-assets/dashboard-compare-blur.png"
              alt="Comparação entre app genérico e app exclusivo Nexora"
              width={1189}
              height={603}
              className="h-auto w-full"
            />
          </div>
        </div>
        <SectionHeading badge="O grande diferencial" title="A diferença entre" highlight="alugar e ter." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink-border bg-ink-card p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-border bg-ink-800 text-slate-400">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-500">Alugar</p>
                <p className="text-lg font-semibold text-white">App genérico</p>
              </div>
            </div>
            <RevealGroup className="space-y-3">
              {[
                <CompareRow key="1" icon="users" text="Dividido com concorrentes" />,
                <CompareRow key="2" icon="eye" text="A marca é da plataforma" />,
                <CompareRow key="3" icon="puzzle" text="Você segue as regras deles" />,
                <CompareRow key="4" icon="shield" text="Some se a plataforma sumir" />,
              ]}
            </RevealGroup>
          </div>

          <div className="rounded-2xl border border-brand-500/50 bg-brand-500/5 p-6 shadow-glow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow-sm">
                  <LogoMark className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-brand-300">Ter</p>
                  <p className="text-lg font-semibold text-white">App Nexora</p>
                </div>
              </div>
              <span className="rounded-full bg-brand-500 px-3 py-1 text-xs font-medium text-white">Recomendado</span>
            </div>
            <RevealGroup className="space-y-3">
              {[
                <CompareRow key="1" ok icon="users" text="Exclusivo, só seu" />,
                <CompareRow key="2" ok icon="eye" text="A marca é 100% sua" />,
                <CompareRow key="3" ok icon="puzzle" text="As regras são suas" />,
                <CompareRow key="4" ok icon="shield" text="É seu patrimônio digital" />,
              ]}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMO FUNCIONA (secao clara) ---------------- */
function StepCard({ n, title, text, icon }: { n: string; title: string; text: string; icon: ReactNode }) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">{icon}</div>
        <span className="text-4xl font-bold text-slate-900/10">{n}</span>
      </div>
      <h3 className="font-semibold text-ink-900">{title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{text}</p>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="section">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-slate-500">
              <span className="h-2 w-2 rotate-45 bg-brand-400" /> Como funciona
            </span>
          </div>
          <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.02em] text-ink-900 sm:text-5xl">
            Da ideia ao app na <span className="text-gradient">mão dos seus clientes:</span>
          </h2>
        </div>
        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            <StepCard key="1" n="01" title="Entendimento" text="A gente mergulha na sua marca e no seu negócio pra desenhar o app do jeito que faz sentido pra você."
              icon={<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" strokeLinecap="round" /></svg>} />,
            <StepCard key="2" n="02" title="Criação personalizada" text="Construímos seu aplicativo do zero, com sua identidade e suas funcionalidades exclusivas, com suporte em toda a etapa."
              icon={<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m8 9-3 3 3 3M16 9l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" /></svg>} />,
            <StepCard key="3" n="03" title="Entrega e publicação" text="Seu app pronto, testado e publicado, com a sua marca na loja de aplicativos."
              icon={<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" strokeLinecap="round" strokeLinejoin="round" /></svg>} />,
            <StepCard key="4" n="04" title="Acompanhamento contínuo" text="Depois da entrega, seguimos acompanhando o funcionamento enquanto servidores e recorrência estão ativos. Você nunca fica sozinho."
              icon={<svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h4l3 8 4-16 3 8h4" strokeLinecap="round" strokeLinejoin="round" /></svg>} />,
          ]}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ---------------- CASES ---------------- */
function CaseCard({ seg, quote, name, biz, metric }: { seg: string; quote: string; name: string; biz: string; metric: string }) {
  return (
    <Spotlight className="flex flex-col rounded-2xl bg-white p-6 shadow-lg">
      <span className="mb-4 w-fit rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">{seg}</span>
      <p className="flex-1 text-base leading-relaxed text-ink-900">{quote}</p>
      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-brand-500" />
          <div>
            <p className="text-sm font-semibold text-ink-900">{name}</p>
            <p className="text-xs text-slate-500">{biz}</p>
          </div>
        </div>
        <CountUpMetric text={metric} className="text-sm font-medium text-brand-600" />
      </div>
    </Spotlight>
  );
}

export function Cases() {
  return (
    <section id="cases" className="py-24">
      <div className="section">
        <div className="rounded-3xl bg-brand-gradient p-8 sm:p-12">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-white">
              <span className="h-2 w-2 rotate-45 bg-white" /> Cases
            </span>
            <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
              Negócios que <span className="text-white/70">já saíram do genérico:</span>
            </h2>
          </div>
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              <CaseCard key="1" seg="Saúde & Bem-estar" quote="“Nossos pacientes reservam sozinhos e voltam mais. O app com a nossa cara mudou a percepção da clínica.”" name="Dra. Marina Alves" biz="Clínica Vitalis" metric="+42% de recorrência" />,
              <CaseCard key="2" seg="Beleza & Estética" quote="“Deixei de dividir espaço com concorrente. Agora meu salão tem app próprio na App Store.”" name="Rafael Nunes" biz="Studio Lumière" metric="4.9 ★ de avaliação" />,
              <CaseCard key="3" seg="Fitness & Performance" quote="“Os alunos acompanham planos e agendamentos em um app só nosso. O engajamento disparou.”" name="Camila Torres" biz="Box Iron Fit" metric="+61% de engajamento" />,
            ]}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SHOWCASE DASHBOARD ---------------- */
export function DashboardShowcase() {
  return (
    <section className="py-10">
      <div className="section">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-ink-border shadow-glow">
          <Image
            src="/figma-assets/dashboard-lucas.png"
            alt="Dashboard exclusivo com a marca do cliente Nexora"
            width={2396}
            height={1350}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- PARA QUEM É ---------------- */
function CheckItem({ text, ok }: { text: string; ok: boolean }) {
  return (
    <li className="flex items-center gap-3 text-slate-300">
      {ok ? (
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      ) : (
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink-border text-slate-500">
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" /></svg>
        </span>
      )}
      {text}
    </li>
  );
}

export function Audience() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/figma-assets/audience-eclipse-glow.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[1440px] max-w-none -translate-x-1/2 -translate-y-1/2 animate-breathe select-none"
      />
      <div className="section relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading center={false} badge="Para quem é" title="Esse projeto não é" highlight="para todo mundo." />
          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-400">
            Pra marcas que já entenderam que crescer não é só vender mais, é elevar a
            percepção, a experiência e o valor.
          </p>
        </div>
        <RevealGroup className="space-y-6">
          {[
            <div key="sim" className="rounded-2xl border border-brand-500/40 bg-brand-500/5 p-6">
              <p className="mb-4 text-xs uppercase tracking-[0.15em] text-brand-300">É pra você se...</p>
              <ul className="space-y-3.5 text-sm">
                <CheckItem ok text="Seu negócio já é uma marca consolidada" />
                <CheckItem ok text="Você tem faturamento consistente e quer escalar" />
                <CheckItem ok text="Busca exclusividade e um posicionamento premium" />
                <CheckItem ok text="Entende que autoridade se constrói nos detalhes" />
              </ul>
            </div>,
            <div key="nao" className="rounded-2xl border border-ink-border bg-ink-card p-6">
              <p className="mb-4 text-xs uppercase tracking-[0.15em] text-slate-500">Não é pra você se...</p>
              <ul className="space-y-3.5 text-sm">
                <CheckItem ok={false} text="Seu faturamento ainda é inconsistente" />
                <CheckItem ok={false} text="Procura a solução mais barata do mercado" />
                <CheckItem ok={false} text="Se contenta com o app genérico que todo mundo usa" />
                <CheckItem ok={false} text="Não busca exclusividade nem posicionamento" />
              </ul>
            </div>,
          ]}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ---------------- CONTATO / CTA FINAL ---------------- */
export function ContactCTA() {
  const inputCls =
    "w-full rounded-xl border border-ink-border bg-ink-900/60 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-brand-500";
  return (
    <section id="contato" className="py-24">
      <div className="section">
        <div className="relative overflow-hidden rounded-3xl border border-brand-500/30 bg-gradient-to-br from-brand-600/25 via-ink-800 to-ink-900 p-8 sm:p-12">
          <div className="dot-grid pointer-events-none absolute inset-0 opacity-40 animate-breathe" />
          <div className="relative grid gap-12 lg:grid-cols-2">
            <Reveal delay={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-brand-300">
                <span className="h-2 w-2 rotate-45 bg-brand-400" /> Vagas limitadas
              </span>
              <h2 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
                Sua marca merece mais do que um <span className="text-gradient">app de prateleira.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-slate-400">
                Trabalhamos com um número limitado de projetos por vez, para garantir
                exclusividade e qualidade em cada aplicativo. Preencha o formulário e nossa
                equipe vai avaliar o seu projeto.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
            <form className="rounded-2xl border border-ink-border bg-ink-card/80 p-6 backdrop-blur">
              <p className="mb-4 text-sm text-slate-300">Conte pra gente sobre o seu negócio:</p>
              <div className="space-y-3">
                <input className={inputCls} placeholder="Nome" />
                <input className={inputCls} placeholder="Nome do negócio" />
                <div className="grid grid-cols-2 gap-3">
                  <input className={inputCls} placeholder="Cidade" />
                  <input className={inputCls} placeholder="WhatsApp" />
                </div>
                <input className={inputCls} placeholder="Faturamento médio mensal" />
                <select className={`${inputCls} appearance-none`} defaultValue="">
                  <option value="" disabled>Qual o seu tipo de negócio?</option>
                  <option>Saúde & Bem-estar</option>
                  <option>Beleza & Estética</option>
                  <option>Fitness & Performance</option>
                  <option>Outro</option>
                </select>
                <PrimaryButton className="w-full justify-center">Quero meu aplicativo exclusivo</PrimaryButton>
                <p className="text-center text-xs text-slate-500">
                  Vagas limitadas por período. Sua aplicação será avaliada e roteada para o time do seu segmento.
                </p>
              </div>
            </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
