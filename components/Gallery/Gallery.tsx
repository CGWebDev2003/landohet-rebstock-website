"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./Gallery.module.css";
import { Placeholder } from "@/components/Placeholder/Placeholder";
import { Icon } from "@/components/Icon/Icon";

export interface GalleryItem {
  readonly label: string;
  readonly ratio: "4/3" | "3/2" | "1/1" | "16/10" | "3/4";
}

interface GalleryProps {
  readonly items: readonly GalleryItem[];
}

/**
 * Masonry-artige Galerie mit Lightbox. Client-Komponente wegen Overlay-State,
 * Tastatursteuerung (Esc, Pfeile) und Fokus-Handling.
 *
 * BILDER-TODO: Die <Placeholder> hier später durch <Image> ersetzen.
 */
export function Gallery({ items }: GalleryProps): React.ReactElement {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const show = useCallback(
    (dir: 1 | -1) =>
      setOpen((cur) =>
        cur === null ? cur : (cur + dir + items.length) % items.length,
      ),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(1);
      if (e.key === "ArrowLeft") show(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, show]);

  return (
    <>
      <ul className={styles.grid}>
        {items.map((item, i) => (
          <li key={i} className={styles.cell} data-ratio={item.ratio}>
            <button
              type="button"
              className={styles.trigger}
              onClick={() => setOpen(i)}
              aria-label={`Bild vergrößern: ${item.label}`}
            >
              <Placeholder label={item.label} ratio={item.ratio} rounded="lg" />
              <span className={styles.zoom} aria-hidden="true">
                <Icon name="play" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {open !== null ? (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={items[open].label}
          onClick={close}
        >
          <button type="button" className={styles.lbClose} onClick={close}>
            <span className="srOnly">Schließen</span>
            <span aria-hidden="true">✕</span>
          </button>
          <button
            type="button"
            className={`${styles.lbNav} ${styles.lbPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              show(-1);
            }}
          >
            <span className="srOnly">Vorheriges Bild</span>
            <Icon name="arrowRight" />
          </button>
          <figure className={styles.lbFigure} onClick={(e) => e.stopPropagation()}>
            <Placeholder label={items[open].label} ratio={items[open].ratio} rounded="lg" />
            <figcaption className={styles.lbCaption}>{items[open].label}</figcaption>
          </figure>
          <button
            type="button"
            className={`${styles.lbNav} ${styles.lbNext}`}
            onClick={(e) => {
              e.stopPropagation();
              show(1);
            }}
          >
            <span className="srOnly">Nächstes Bild</span>
            <Icon name="arrowRight" />
          </button>
        </div>
      ) : null}
    </>
  );
}
