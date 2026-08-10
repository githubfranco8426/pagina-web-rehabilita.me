"use client";

import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { DockItem, MagneticDockProps } from "@/components/ui/magnetic-dock";

/* Magnetic Dock — vertical variant, adapted from Motiq's magnetic-dock for a
   dock pinned to the right edge of the viewport: the bar runs top-to-bottom,
   the field responds to vertical pointer distance, icons pop LEFT into the
   page (there is no room further right), and the tooltip trails to the left. */

const MOTIQ_TOKENS = "@layer motiq{:root{--motiq-accent:#315fea;--motiq-accent-text:#244fd1;--motiq-bg:#f7f9fc;--motiq-border:#dce4ef;--motiq-border-strong:#c5d1e1;--motiq-fg:#101828;--motiq-fg-secondary:#344054;--motiq-muted:#667085;--motiq-secondary-accent:#009fb3;--motiq-success:#128a55;--motiq-surface:#ffffff;--motiq-surface-2:#f8fafd;--motiq-warning:#b86e00}}@layer motiq{.dark,[data-theme=\"dark\"]{--motiq-accent:#4f7cff;--motiq-accent-text:#7f9fff;--motiq-bg:#080c14;--motiq-border:#263449;--motiq-border-strong:#354863;--motiq-fg:#f8fafc;--motiq-fg-secondary:#cbd5e1;--motiq-muted:#9caabd;--motiq-secondary-accent:#22c7d9;--motiq-success:#32d583;--motiq-surface:#111827;--motiq-surface-2:#192337;--motiq-warning:#f6b94a}}";

function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

function useReducedMotion(): boolean {
  const [reduced, setReduced] = React.useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function useVisibilityPause<T extends Element>(
  ref: React.RefObject<T | null>,
  { threshold = 0.1 }: { threshold?: number } = {},
): boolean {
  const [onScreen, setOnScreen] = React.useState(true);
  const [tabVisible, setTabVisible] = React.useState(true);

  React.useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => setOnScreen(entries.some((e) => e.isIntersecting)),
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold]);

  React.useEffect(() => {
    const onVis = () => setTabVisible(document.visibilityState !== "hidden");
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return onScreen && tabVisible;
}

interface Spring {
  x: number;
  v: number;
}

const mkSpring = (x = 0): Spring => ({ x, v: 0 });

function spring(s: Spring, target: number, k: number, c: number, dt: number): number {
  const n = dt > 0.012 ? Math.ceil(dt / 0.008) : 1;
  const h = dt / n;
  for (let i = 0; i < n; i++) {
    s.v += (-k * (s.x - target) - c * s.v) * h;
    s.x += s.v * h;
  }
  return s.x;
}

const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);

function makeRng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const ACCENT = "var(--motiq-accent, #4f7cff)";
const CYAN = "var(--motiq-secondary-accent, #22c7d9)";
const FG = "var(--motiq-fg, #f8fafc)";

const TINTS: ReadonlyArray<[string, string]> = [
  [ACCENT, CYAN],
  [CYAN, `color-mix(in oklab, ${CYAN} 40%, ${ACCENT})`],
  [`color-mix(in oklab, ${ACCENT} 70%, ${FG})`, ACCENT],
  ["var(--motiq-success, #32d583)", CYAN],
  [ACCENT, `color-mix(in oklab, ${ACCENT} 45%, ${CYAN})`],
];

const LIFT_K = 360;
const LIFT_C = 22;
const DRIFT = 0.13;
const DRIFT_K = 300;
const DRIFT_C = 20;
const TIP_K = 340;
const TIP_C = 26;
/** How far the field reaches horizontally away from the bar. */
const HORIZONTAL_REACH = 140;
/** How far left of the bar the tooltip trails (there is no room to the right). */
const TIP_OFFSET = 44;

interface Base {
  x: number;
  y: number;
}

interface PointerState {
  x: number;
  y: number;
  inside: boolean;
}

function MagneticDockVerticalBase({
  items,
  magnetRadius = 78,
  maxScale = 1.5,
  lift = 24,
  stiffness = 420,
  damping = 26,
  idleWave = true,
  tooltip = true,
  onSelect,
  seed = 1,
  pauseWhenHidden = true,
  reducedMotion,
  className,
  style,
  ...props
}: MagneticDockProps) {
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const barRef = React.useRef<HTMLDivElement | null>(null);
  const tipRef = React.useRef<HTMLDivElement | null>(null);
  const iconsRef = React.useRef<Array<HTMLButtonElement | null>>([]);
  const basesRef = React.useRef<Base[]>([]);
  const pointerRef = React.useRef<PointerState>({ x: -1e4, y: -1e4, inside: false });
  const focusRef = React.useRef(-1);

  const systemReduced = useReducedMotion();
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => setHydrated(true), []);
  const staticMode = reducedMotion === true || (hydrated && systemReduced);
  const onScreen = useVisibilityPause(rootRef, { threshold: 0.06 });
  const paused = pauseWhenHidden && !onScreen;
  const animate = !staticMode && !paused;

  const count = items.length;
  const labels = items.map((i) => i.label).join(" ");

  const params = React.useRef({ magnetRadius, maxScale, lift, stiffness, damping, idleWave, tooltip });
  params.current = { magnetRadius, maxScale, lift, stiffness, damping, idleWave, tooltip };

  React.useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const measure = () => {
      const bx = bar.offsetLeft;
      const by = bar.offsetTop;
      basesRef.current = iconsRef.current.slice(0, count).map((el) =>
        el ? { x: bx + el.offsetLeft + el.offsetWidth / 2, y: by + el.offsetTop + el.offsetHeight / 2 } : { x: 0, y: 0 },
      );
    };
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(measure);
    ro.observe(bar);
    if (rootRef.current) ro.observe(rootRef.current);
    return () => ro.disconnect();
  }, [count, labels]);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    if (!animate) {
      iconsRef.current.forEach((el) => {
        if (el) el.style.transform = "";
      });
      if (tipRef.current) tipRef.current.style.opacity = "0";
      return;
    }

    const states = Array.from({ length: count }, () => ({ s: mkSpring(1), x: mkSpring(0), dy: mkSpring(0) }));
    const tipY = mkSpring(0);
    const tipO = mkSpring(0);
    const rng = makeRng(seed);
    let idleT = rng() * 20;
    let raf = 0;
    let last = 0;

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      let dt = (now - last) / 1000;
      last = now;
      if (!(dt > 0) || dt > 0.05) dt = 0.016;
      idleT += dt;

      const cfg = params.current;
      const bases = basesRef.current;
      const p = pointerRef.current;
      const h = root.clientHeight;
      const grow = Math.max(0, cfg.maxScale - 1);
      const sigma = Math.max(8, cfg.magnetRadius);

      let px: number;
      let py: number;
      let amp: number;
      const fi = focusRef.current;
      if (p.inside) {
        px = p.x;
        py = p.y;
        amp = 1;
      } else if (fi >= 0 && bases[fi]) {
        px = bases[fi].x;
        py = bases[fi].y;
        amp = 1;
      } else if (cfg.idleWave) {
        py = h / 2 + Math.sin(idleT * 0.55) * h * 0.34;
        px = bases[0]?.x ?? root.clientWidth - 70;
        amp = 0.42;
      } else {
        px = -1e4;
        py = -1e4;
        amp = 0;
      }

      let bestI = -1;
      let bestInf = 0;
      for (let i = 0; i < count; i++) {
        const b = bases[i];
        const el = iconsRef.current[i];
        const st = states[i];
        if (!b || !el || !st) continue;
        const d = py - b.y;
        const horiz = Math.max(0, 1 - Math.abs(px - b.x) / HORIZONTAL_REACH);
        const inf = Math.exp(-(d * d) / (2 * sigma * sigma)) * amp * horiz;
        if (inf > bestInf) {
          bestInf = inf;
          bestI = i;
        }
        spring(st.s, 1 + grow * inf, cfg.stiffness, cfg.damping, dt);
        // Icons pop LEFT into the page — a right-edge dock has no room further right.
        spring(st.x, -cfg.lift * inf, LIFT_K, LIFT_C, dt);
        spring(st.dy, d * DRIFT * inf, DRIFT_K, DRIFT_C, dt);
        el.style.transform = `translate3d(${st.x.x.toFixed(2)}px,${st.dy.x.toFixed(2)}px,0) scale(${st.s.x.toFixed(3)})`;
      }

      const tip = tipRef.current;
      if (!tip) return;
      const showTip = cfg.tooltip && (p.inside || fi >= 0) && bestInf > 0.55 && bestI >= 0;
      if (showTip) {
        const next = items[bestI]?.label ?? "";
        if (tip.textContent !== next) tip.textContent = next;
        spring(tipY, bases[bestI].y, TIP_K, TIP_C, dt);
      }
      spring(tipO, showTip ? 1 : 0, 220, 24, dt);
      const o = clamp(tipO.x, 0, 1);
      if (o > 0.01 && bestI >= 0 && bases[bestI]) {
        const tx = bases[bestI].x - TIP_OFFSET - tip.offsetWidth + states[bestI].x.x * 0.4 - 10 * o;
        const ty = tipY.x - tip.offsetHeight / 2;
        tip.style.opacity = o.toFixed(3);
        tip.style.transform = `translate3d(${tx.toFixed(1)}px,${ty.toFixed(1)}px,0)`;
      } else {
        tip.style.opacity = "0";
      }
    };

    last = typeof performance !== "undefined" ? performance.now() : 0;
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [animate, count, items, seed]);

  const track = React.useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const root = rootRef.current;
    if (!root) return;
    const r = root.getBoundingClientRect();
    pointerRef.current = { x: e.clientX - r.left, y: e.clientY - r.top, inside: true };
  }, []);

  const release = React.useCallback(() => {
    pointerRef.current = { x: -1e4, y: -1e4, inside: false };
  }, []);

  return (
    <div
      ref={rootRef}
      data-motion={staticMode ? "static" : "animated"}
      data-paused={paused ? "true" : "false"}
      className={cn("relative select-none", className)}
      style={{ touchAction: "pan-x", ...style }}
      onPointerMove={track}
      onPointerDown={track}
      onPointerLeave={release}
      onPointerCancel={release}
      {...props}
    >
      <div className="flex items-center pl-16 pr-2">
        <div
          ref={barRef}
          className={cn(
            "relative flex max-h-full flex-col items-center justify-center gap-3.5 rounded-[22px] px-3 py-[18px]",
            "border border-[var(--motiq-border,#263449)] backdrop-blur-[14px]",
          )}
          style={{
            background: "color-mix(in oklab, var(--motiq-surface, #111827) 72%, transparent)",
            boxShadow: "0 18px 50px -18px color-mix(in oklab, var(--motiq-accent, #4f7cff) 35%, transparent)",
          }}
        >
          {items.map((item, i) => {
            const [a, b] = item.tint ?? TINTS[i % TINTS.length];
            return (
              <button
                key={item.id}
                type="button"
                ref={(el) => {
                  iconsRef.current[i] = el;
                }}
                data-dock-item={item.id}
                aria-label={item.label}
                onClick={() => onSelect?.(item.id)}
                onFocus={() => {
                  focusRef.current = i;
                }}
                onBlur={() => {
                  if (focusRef.current === i) focusRef.current = -1;
                }}
                className={cn(
                  "relative grid h-[52px] w-[52px] shrink-0 origin-right place-items-center rounded-[14px]",
                  "cursor-pointer border-0 p-0 text-[15px] font-bold",
                  "[&_svg]:h-6 [&_svg]:w-6 [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-2",
                  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--motiq-accent,#4f7cff)]",
                  staticMode &&
                    "transition-transform duration-150 ease-[cubic-bezier(0.2,0,0,1)] hover:-translate-x-2 hover:scale-[1.14] focus-visible:-translate-x-2 focus-visible:scale-[1.14]",
                )}
                style={{
                  color: "var(--motiq-bg, #080c14)",
                  backgroundImage: `linear-gradient(140deg, ${a}, ${b})`,
                  boxShadow: `inset 0 1px 0 color-mix(in oklab, ${FG} 22%, transparent), 0 8px 20px -8px color-mix(in oklab, ${a} 60%, transparent)`,
                  willChange: "transform",
                }}
              >
                {item.icon ?? <span aria-hidden="true">{item.label.slice(0, 1).toUpperCase()}</span>}
              </button>
            );
          })}
        </div>
      </div>

      {tooltip && !staticMode ? (
        <div
          ref={tipRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 z-20 whitespace-nowrap rounded-lg px-[11px] py-[5px] text-xs font-semibold opacity-0"
          style={{
            background: "var(--motiq-fg, #f8fafc)",
            color: "var(--motiq-bg, #080c14)",
            transform: "translate3d(-999px,-999px,0)",
            willChange: "transform, opacity",
          }}
        />
      ) : null}
    </div>
  );
}

MagneticDockVerticalBase.displayName = "MagneticDockVertical";

export function MagneticDockVertical(props: MagneticDockProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: MOTIQ_TOKENS }} />
      <MagneticDockVerticalBase {...props} />
    </>
  );
}

export default MagneticDockVertical;
export type { DockItem };
