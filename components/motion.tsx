"use client";

import {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/** Fade-up reveal on scroll-into-view, fires once. Base unit for the stagger cascade. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? undefined : { opacity: 0, y: 14 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </motion.div>
  );
}

/** Wraps a list of items (e.g. cards in a grid) with an 80ms stagger between each. */
export function RevealGroup({
  children,
  className = "",
  stagger = 0.08,
}: {
  children: ReactNode[];
  className?: string;
  stagger?: number;
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <Reveal key={i} delay={i * stagger}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}

/** Radial highlight that tracks the cursor inside the wrapped element. */
export function Spotlight({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50, opacity: 0 });
  const reduce = useReducedMotion();

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 1,
    });
  }

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos((p) => ({ ...p, opacity: 0 }))}
    >
      {!reduce && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
          style={{
            opacity: pos.opacity,
            background: `radial-gradient(280px circle at ${pos.x}% ${pos.y}%, rgba(59,158,255,0.14), transparent 70%)`,
          }}
        />
      )}
      {children}
    </div>
  );
}

/** Animates the leading number of a metric string ("+42% de recorrência") from 0 once it enters view. */
export function CountUpMetric({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const match = text.match(/^([+-]?)(\d+(?:\.\d+)?)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(
    match ? `${match[1]}0${match[3]}` : text
  );

  useEffect(() => {
    if (!match || reduce) {
      setDisplay(text);
      return;
    }
    if (!inView) return;

    const [, sign, numStr, suffix] = match;
    const target = parseFloat(numStr);
    const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
    const duration = 900;
    const start = performance.now();
    let raf = 0;

    function tick(now: number) {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(`${sign}${(target * eased).toFixed(decimals)}${suffix}`);
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, match, reduce, text]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display}
    </span>
  );
}

/** Thin fixed rail on the right edge that fills with overall page scroll progress. */
export function ScrollProgressRail() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.3,
  });
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-y-0 right-0 z-[60] hidden w-[3px] bg-white/5 md:block"
    >
      <motion.div
        className="w-full origin-top bg-brand-gradient"
        style={{ scaleY, height: "100%" }}
      />
    </div>
  );
}

/** Splits text into words and reveals them with a soft blur-in, staggered. Use sparingly. */
export function WordReveal({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");
  const reduce = useReducedMotion();

  if (reduce) return <span className={className}>{text}</span>;

  return (
    <span className={className}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0.25, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, delay: i * 0.045, ease: EASE_OUT_EXPO }}
        >
          {w}&nbsp;
        </motion.span>
      ))}
    </span>
  );
}
