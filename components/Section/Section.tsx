import styles from "./Section.module.css";

interface SectionProps {
  readonly children: React.ReactNode;
  /** Hebt die Sektion optisch als schwebende weiße Card hervor. */
  readonly as?: "section" | "div";
  readonly variant?: "plain" | "card" | "forest";
  readonly width?: "default" | "narrow" | "wide";
  readonly className?: string;
  readonly id?: string;
}

/** Standard-Sektionscontainer mit zentraler Breite und vertikalem Rhythmus. */
export function Section({
  children,
  as: Tag = "section",
  variant = "plain",
  width = "default",
  className,
  id,
}: SectionProps): React.ReactElement {
  return (
    <Tag
      id={id}
      className={`${styles.section} ${styles[variant]}${
        className ? ` ${className}` : ""
      }`}
    >
      <div className={`${styles.inner} ${styles[width]}`}>{children}</div>
    </Tag>
  );
}

interface SectionHeaderProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly text?: string;
  readonly align?: "left" | "center";
}

/** Kopfzeile einer Sektion: kleines Eyebrow, große Serif-Headline, Fließtext. */
export function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left",
}: SectionHeaderProps): React.ReactElement {
  return (
    <header className={`${styles.header} ${styles[align]}`}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <h2 className={styles.title}>{title}</h2>
      {text ? <p className={styles.headerText}>{text}</p> : null}
    </header>
  );
}
