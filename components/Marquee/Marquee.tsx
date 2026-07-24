"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Marquee.module.css";

interface MarqueeProps {
  /** Wortliste, die mit Stern-Trennzeichen als Laufband gezeigt wird. */
  readonly items: readonly string[];
}

/**
 * Laufband/Marquee mit großer Serif-Schrift und Stern-Trennzeichen als
 * Sektionsbrücke. Respektiert prefers-reduced-motion (Animation pausiert)
 * und lässt sich per Klick/Fokus anhalten.
 */
export function Marquee({ items }: MarqueeProps): React.ReactElement {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = (): void => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const sequence = (
    <div className={styles.group} aria-hidden="true">
      {items.map((item, i) => (
        <span className={styles.item} key={i}>
          <span className={styles.word}>{item}</span>
          <span className={styles.star}>✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={styles.marquee} role="marquee" aria-label={items.join(" · ")}>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setPaused((p) => !p)}
        aria-pressed={paused}
      >
        <span className="srOnly">
          {paused ? "Laufband abspielen" : "Laufband anhalten"}
        </span>
      </button>
      <div
        ref={trackRef}
        className={styles.track}
        data-paused={paused || reduced ? "true" : "false"}
      >
        {sequence}
        {sequence}
      </div>
    </div>
  );
}
