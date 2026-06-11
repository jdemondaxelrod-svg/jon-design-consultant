"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { ResumeClosingNoteLightbox } from "./resume-closing-note-lightbox";

type ResumeClosingNoteContextValue = {
  isOpen: boolean;
};

const ResumeClosingNoteContext = createContext<ResumeClosingNoteContextValue>({
  isOpen: false,
});

export function useResumeClosingNote() {
  return useContext(ResumeClosingNoteContext);
}

const RESUME_PRINT_REQUESTED = "resume-print-requested";

export function notifyResumePrintRequested() {
  window.dispatchEvent(new Event(RESUME_PRINT_REQUESTED));
}

export function ResumeClosingNoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let shouldOpenAfterPrint = false;

    const onBeforePrint = () => {
      shouldOpenAfterPrint = true;
    };

    const onPrintRequested = () => {
      shouldOpenAfterPrint = true;
    };

    const onAfterPrint = () => {
      if (shouldOpenAfterPrint) {
        setIsOpen(true);
        shouldOpenAfterPrint = false;
      }
    };

    window.addEventListener("beforeprint", onBeforePrint);
    window.addEventListener("afterprint", onAfterPrint);
    window.addEventListener(RESUME_PRINT_REQUESTED, onPrintRequested);

    return () => {
      window.removeEventListener("beforeprint", onBeforePrint);
      window.removeEventListener("afterprint", onAfterPrint);
      window.removeEventListener(RESUME_PRINT_REQUESTED, onPrintRequested);
    };
  }, []);

  return (
    <ResumeClosingNoteContext.Provider value={{ isOpen }}>
      {children}
      <ResumeClosingNoteLightbox
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </ResumeClosingNoteContext.Provider>
  );
}
