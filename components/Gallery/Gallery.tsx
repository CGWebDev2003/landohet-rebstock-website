"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Gallery.module.css";
import { Icon } from "@/components/Icon/Icon";

export interface GalleryItem {
  readonly src: string;
  readonly label: string;
  readonly ratio: "4/3" | "3/2" | "1/1" | "16/10" | "3/4";
}

interface GalleryProps {
  readonly items: readonly GalleryItem[];
}

/**
 * Masonry-artige Galerie mit Lightbox. Client-Komponente wegen Overlay-State,
 * Tastatursteuerung (Esc, Pfeile) und Fokus-Handling.
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
              <div className={styles.media} style={{ aspectRatio: item.ratio.replace("/", " / ") }}>
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  sizes="(min-width: 960px) 33vw, (min-width: 600px) 50vw, 100vw"
                  className={styles.mediaImg}
                />
              </div>
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
            <div
              className={`${styles.media} ${styles.lbMedia}`}
              style={{ aspectRatio: items[open].ratio.replace("/", " / ") }}
            >
              <Image
                src={items[open].src}
                alt={items[open].label}
                fill
                sizes="90vw"
                className={styles.mediaImg}
              />
            </div>
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
