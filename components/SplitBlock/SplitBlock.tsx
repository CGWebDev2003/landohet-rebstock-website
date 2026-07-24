import styles from "./SplitBlock.module.css";

interface SplitBlockProps {
  readonly media: React.ReactNode;
  readonly children: React.ReactNode;
  /** Bild links (Standard) oder rechts. */
  readonly mediaSide?: "left" | "right";
  readonly className?: string;
}

/** Asymmetrischer Zwei-Spalten-Block: Bildblock neben Textblock. */
export function SplitBlock({
  media,
  children,
  mediaSide = "left",
  className,
}: SplitBlockProps): React.ReactElement {
  return (
    <div
      className={`${styles.split} ${mediaSide === "right" ? styles.reverse : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      <div className={styles.media}>{media}</div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
