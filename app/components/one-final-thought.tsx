"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { oneFinalThought } from "../lib/content";
import { siteConfig } from "../lib/site";

type Phase = "intro" | "playing" | "ended";
type Transition = "entering" | "visible" | "exiting";

const FADE_MS = 1000;

function frameHoldMs(text: string, reducedMotion: boolean) {
  if (reducedMotion) return 1200;
  if (text.length < 28) return 2400;
  if (text.length < 72) return 3400;
  return 4600;
}

function frameSizeClass(text: string) {
  return text.length < 28
    ? "text-[clamp(2rem,5.5vw,3.75rem)] leading-[1.15]"
    : "text-[clamp(1.5rem,4vw,2.75rem)] leading-[1.2]";
}

export function OneFinalThought() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [frameIndex, setFrameIndex] = useState(0);
  const [transition, setTransition] = useState<Transition>("visible");
  const [reducedMotion, setReducedMotion] = useState(false);
  const timeoutsRef = useRef<number[]>([]);

  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach((id) => window.clearTimeout(id));
    timeoutsRef.current = [];
  }, []);

  const wait = useCallback((ms: number) => {
    return new Promise<void>((resolve) => {
      const id = window.setTimeout(resolve, ms);
      timeoutsRef.current.push(id);
    });
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => clearAllTimeouts, [clearAllTimeouts]);

  const runSequence = useCallback(async () => {
    clearAllTimeouts();
    setPhase("playing");
    setFrameIndex(0);
    setTransition("entering");

    const fadeMs = reducedMotion ? 300 : FADE_MS;
    const frames = oneFinalThought.frames;

    for (let i = 0; i < frames.length; i++) {
      setFrameIndex(i);
      setTransition("entering");
      await wait(40);
      setTransition("visible");
      await wait(frameHoldMs(frames[i], reducedMotion));

      if (i < frames.length - 1) {
        setTransition("exiting");
        await wait(fadeMs);
      }
    }

    setPhase("ended");
    setTransition("visible");
  }, [clearAllTimeouts, reducedMotion, wait]);

  const handleReplay = () => {
    clearAllTimeouts();
    void runSequence();
  };

  const currentFrame = oneFinalThought.frames[frameIndex];
  const transitionClass =
    transition === "entering"
      ? "opacity-0 translate-y-6"
      : transition === "exiting"
        ? "opacity-0 -translate-y-3"
        : "opacity-100 translate-y-0";

  return (
    <section
      id="one-final-thought"
      className="relative flex min-h-[100svh] items-center justify-center border-t border-border bg-background px-6 py-24 md:px-10 lg:px-16"
      aria-labelledby="one-final-thought-heading"
    >
      <div className="relative mx-auto flex min-h-[70svh] w-full max-w-5xl flex-col items-center justify-center text-center">
        {phase === "intro" ? (
          <div className="flex flex-col items-center">
            <h2
              id="one-final-thought-heading"
              className="font-serif text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.08] font-medium tracking-[-0.03em] text-foreground"
            >
              {oneFinalThought.title}
            </h2>

            <button
              type="button"
              onClick={() => void runSequence()}
              className="group mt-14 flex flex-col items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              aria-label="Play One Final Thought"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-border-strong transition-colors duration-500 group-hover:border-foreground">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="ml-1 h-5 w-5 fill-foreground transition-transform duration-500 group-hover:scale-105"
                >
                  <path d="M8 5.14v14.72a1 1 0 0 0 1.5.86l11.04-7.36a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14Z" />
                </svg>
              </span>
              <span className="font-sans text-[0.65rem] tracking-[0.22em] text-foreground-subtle uppercase transition-colors group-hover:text-foreground-muted">
                Play
              </span>
            </button>
          </div>
        ) : (
          <h2 id="one-final-thought-heading" className="sr-only">
            {oneFinalThought.title}
          </h2>
        )}

        {phase === "playing" ? (
          <div
            className="absolute inset-0 flex items-center justify-center px-4"
            aria-live="polite"
            aria-atomic="true"
          >
            <p
              key={`${frameIndex}-${currentFrame}`}
              className={`max-w-4xl font-serif font-medium tracking-[-0.02em] text-foreground transition-all ease-[cubic-bezier(0.22,1,0.36,1)] ${frameSizeClass(currentFrame)} ${transitionClass}`}
              style={{
                transitionDuration: reducedMotion ? "300ms" : "1000ms",
              }}
            >
              {currentFrame}
            </p>
          </div>
        ) : null}

        {phase === "ended" ? (
          <div className="flex max-w-3xl flex-col items-center">
            <div
              className="space-y-6 opacity-0 animate-[fadeIn_1.4s_cubic-bezier(0.22,1,0.36,1)_forwards]"
              style={
                reducedMotion
                  ? { animation: "none", opacity: 1 }
                  : undefined
              }
            >
              {oneFinalThought.endLines.map((line, index) => (
                <p
                  key={line}
                  className={`font-serif font-medium tracking-[-0.02em] text-foreground ${
                    index === 2
                      ? "pt-4 font-sans text-sm text-foreground-subtle"
                      : index === 1
                        ? "text-[clamp(2rem,5.5vw,3.75rem)] leading-[1.12]"
                        : "text-[clamp(1.35rem,3.5vw,2.25rem)] leading-[1.25] text-foreground-muted"
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>

            <div
              className="mt-16 flex flex-wrap items-center justify-center gap-4 opacity-0 animate-[fadeIn_1.4s_cubic-bezier(0.22,1,0.36,1)_0.6s_forwards]"
              style={
                reducedMotion
                  ? { animation: "none", opacity: 1 }
                  : undefined
              }
            >
              <a
                href="#contact"
                className="inline-flex items-center border border-foreground/20 bg-foreground px-6 py-3 font-sans text-[0.7rem] tracking-[0.12em] text-background uppercase transition-colors hover:bg-foreground-muted"
              >
                Contact Jon
              </a>
              <Link
                href={siteConfig.resumePath}
                className="inline-flex items-center border border-border-strong px-6 py-3 font-sans text-[0.7rem] tracking-[0.12em] text-foreground uppercase transition-colors hover:border-foreground"
              >
                View Resume
              </Link>
            </div>

            <button
              type="button"
              onClick={handleReplay}
              className="mt-10 font-sans text-[0.65rem] tracking-[0.2em] text-foreground-subtle uppercase transition-colors hover:text-foreground-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              Replay
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
