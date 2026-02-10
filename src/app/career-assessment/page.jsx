"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import CodeEditorPanel from "../../components/CodeEditorPanel";

export default function CareerAssessment() {
  const containerRef = useRef(null);
  const [frameWidth, setFrameWidth] = useState(700);
  const [dragging, setDragging] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [renderStatus, setRenderStatus] = useState("idle");
  const [previewImage, setPreviewImage] = useState(null);

  const TIMER_KEY = "career-assessment-timer";
  const DURATION_SECONDS = 30 * 60;

  const startDrag = useCallback(() => {
    setDragging(true);
  }, []);

  const stopDrag = useCallback(() => {
    setDragging(false);
  }, []);

  useEffect(() => {
    if (!dragging) return;

    const handlePointerMove = (event) => {
      if (!containerRef.current) return;
      const bounds = containerRef.current.getBoundingClientRect();
      const nextWidth = Math.min(
        Math.max(event.clientX - bounds.left, 320),
        bounds.width - 32
      );
      setFrameWidth(nextWidth);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", stopDrag);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", stopDrag);
    };
  }, [dragging, stopDrag]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // TODO: Replace localStorage timer with server-stored start time for integrity.
    const stored = window.localStorage.getItem(TIMER_KEY);
    let startTime = Date.now();

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed?.startTime) {
          startTime = parsed.startTime;
        }
      } catch (error) {
        startTime = Date.now();
      }
    }

    window.localStorage.setItem(
      TIMER_KEY,
      JSON.stringify({ startTime, duration: DURATION_SECONDS })
    );

    const tick = () => {
      const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
      const remaining = Math.max(DURATION_SECONDS - elapsedSeconds, 0);
      setRemainingSeconds(remaining);
    };

    tick();
    const intervalId = window.setInterval(tick, 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remaining = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remaining
      .toString()
      .padStart(2, "0")}`;
  };

  const requestPreviewImage = async () => {
    if (typeof window === "undefined") return;

    setRenderStatus("loading");
    setPreviewImage(null);

    try {
      const stored = window.localStorage.getItem("career-assessment-preview");
      if (!stored) {
        setRenderStatus("missing");
        return;
      }

      const payload = JSON.parse(stored);

      const response = await fetch("/api/render", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setRenderStatus("error");
        return;
      }

      const data = await response.json();
      setPreviewImage(`data:${data.mimeType};base64,${data.imageBase64}`);
      setRenderStatus("success");
    } catch (error) {
      setRenderStatus("error");
    }
  };

  return (
    <div className="min-h-screen overflow-y-hidden bg-black text-slate-100">
      <div className="mx-auto w-full max-w-8xl px-6 md:px-16 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              Career Assessment
            </p>
            <h1 className="text-3xl font-semibold text-white md:text-4xl">
              Design + Code Workspace
            </h1>
            <p className="max-w-2xl text-base text-slate-300">
              A lightweight prototype of the experience: view a Figma-like design
              canvas, edit code side-by-side, and jump into a live preview.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <div className="inline-flex items-center gap-3 rounded-2xl border border-slate-800/80 bg-linear-to-br from-slate-900/80 via-slate-900/50 to-slate-800/60 px-4 py-2 text-xs text-slate-200 shadow-[0_12px_40px_rgba(15,23,42,0.45)]">
              <span className="flex h-2.5 w-2.5 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/50">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span className="uppercase tracking-[0.2em] text-[10px] text-slate-400">
                Time Left
              </span>
              <span className="rounded-full bg-black/40 px-3 py-1 text-sm font-semibold text-white">
                {formatTime(remainingSeconds)}
              </span>
            </div>

            <button
              type="button"
              onClick={requestPreviewImage}
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Generate Preview Image
            </button>
            {renderStatus === "loading" && (
              <span className="text-xs text-slate-400">Rendering image...</span>
            )}
            {renderStatus === "missing" && (
              <span className="text-xs text-amber-300">
                No editor code found yet.
              </span>
            )}
            {renderStatus === "error" && (
              <span className="text-xs text-rose-300">
                Render failed. Try again.
              </span>
            )}
            {renderStatus === "success" && (
              <span className="text-xs text-emerald-300">
                Image generated.
              </span>
            )}
          </div>
        </div>

         {previewImage && (
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
            <img
              src={previewImage}
              alt="Preview capture"
              className="w-full rounded-xl border border-slate-800"
              
            />
          </div>
        )} 

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <section
            ref={containerRef}
            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 "
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <p className="ml-2 text-sm font-semibold text-slate-200">
                  Figma Design
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl p-6">
              <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4">
                <div
                  className="relative overflow-hidden rounded-xl bg-slate-900"
                  style={{ width: `${frameWidth}px`, height: "500px" }}
                >
                  <Image
                    src="/images/image.png"
                    alt="Figma design"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>{Math.round(frameWidth)}px</span>
                </div>

                <button
                  type="button"
                  onPointerDown={startDrag}
                  className="absolute bottom-6 right-6 h-5 w-5 cursor-ew-resize rounded-full border border-slate-500 bg-slate-800 shadow-[0_0_0_2px_rgba(15,23,42,0.9)]"
                  aria-label="Resize canvas width"
                />
              </div>
            </div>
          </section>

          <CodeEditorPanel />
        </div>
      </div>
    </div>
  );
}
