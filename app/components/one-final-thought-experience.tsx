"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { oneFinalThought } from "../lib/content";

type Phase = "intro" | "playing" | "ended";
type Transition = "entering" | "visible" | "exiting";

type OneFinalThoughtExperienceProps = {
  titleId: string;
  active: boolean;
};

const FADE_MS = 1000;

function frameHoldMs(text: string, reducedMotion: boolean) {
  if (reducedMotion) return 1200;
  if (text.length < 28) return 2400;
  if (text.length < 72) return 3400;
  return 4600;
}

function frameSizeClass(text: string) {
  return text.length < 28
    ? "text-[clamp(1.75rem,5vw,3.25rem)] leading-[1.15]"
    : "text-[clamp(1.25rem,3.5vw,2.25rem)] leading-[1.25]";
}

export function OneFinalThoughtExperience({
  titleId,
  active,
}: OneFinalThoughtExperienceProps) {
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

  useEffect(() => {
    if (!active) {
      clearAllTimeouts();
      setPhase("intro");
      setFrameIndex(0);
      setTransition("visible");
    }
  }, [active, clearAllTimeouts]);

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
    <div className="relative flex min-h-[min(85svh,40rem)] w-full flex-col items-center justify-center px-6 py-16 text-center md:min-h-[70svh] md:px-10">
      {phase === "intro" ? (
        <div className="flex flex-col items-center">
          <h2
            id={titleId}
            className="font-serif text-[clamp(2rem,5.5vw,3.75rem)] leading-[1.08] font-medium tracking-[-0.03em] text-foreground"
          >
            {oneFinalThought.title}
          </h2>

          <button
            type="button"
            onClick={() => void runSequence()}
            className="group mt-12 flex flex-col items-center gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
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
        <h2 id={titleId} className="sr-only">
          {oneFinalThought.title}
        </h2>
      )}

      {phase === "playing" ? (
        <div
          className="absolute inset-0 flex items-center justify-center px-6 md:px-10"
          aria-live="polite"
          aria-atomic="true"
        >
          <p
            key={`${frameIndex}-${currentFrame}`}
            className={`max-w-3xl font-serif font-medium tracking-[-0.02em] text-foreground transition-all ease-[cubic-bezier(0.22,1,0.36,1)] ${frameSizeClass(currentFrame)} ${transitionClass}`}
            style={{
              transitionDuration: reducedMotion ? "300ms" : "1000ms",
            }}
          >
            {currentFrame}
          </p>
        </div>
      ) : null}

      {phase === "ended" ? (
        <div className="flex max-w-2xl flex-col items-center">
          <div
            className="space-y-5 opacity-0 animate-[fadeIn_1.4s_cubic-bezier(0.22,1,0.36,1)_forwards]"
            style={
              reducedMotion ? { animation: "none", opacity: 1 } : undefined
            }
          >
            {oneFinalThought.endLines.map((line, index) => (
              <p
                key={line}
                className={`font-serif font-medium tracking-[-0.02em] text-foreground ${
                  index === 2
                    ? "pt-3 font-sans text-sm text-foreground-subtle"
                    : index === 1
                      ? "text-[clamp(1.75rem,4.5vw,2.75rem)] leading-[1.12]"
                      : "text-[clamp(1.2rem,3vw,1.75rem)] leading-[1.3] text-foreground-muted"
                }`}
              >
                {line}
              </p>
            ))}
          </div>

          <div
            className="mt-12 flex flex-wrap items-center justify-center gap-4 opacity-0 animate-[fadeIn_1.4s_cubic-bezier(0.22,1,0.36,1)_0.6s_forwards]"
            style={
              reducedMotion ? { animation: "none", opacity: 1 } : undefined
            }
          >
            <Link
              href="/#contact"
              className="inline-flex items-center border border-foreground/20 bg-foreground px-6 py-3 font-sans text-[0.7rem] tracking-[0.12em] text-background uppercase transition-colors hover:bg-foreground-muted"
            >
              Contact Jon
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center border border-border-strong px-6 py-3 font-sans text-[0.7rem] tracking-[0.12em] text-foreground uppercase transition-colors hover:border-foreground"
            >
              View Resume
            </Link>
          </div>

          <button
            type="button"
            onClick={handleReplay}
            className="mt-8 font-sans text-[0.65rem] tracking-[0.2em] text-foreground-subtle uppercase transition-colors hover:text-foreground-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            Replay
          </button>
        </div>
      ) : null}
    </div>
  );
}
