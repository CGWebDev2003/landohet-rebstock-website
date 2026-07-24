import styles from "./Card.module.css";

interface CardProps {
  readonly children: React.ReactNode;
  readonly variant?: "surface" | "outline" | "forest" | "sand";
  readonly className?: string;
  readonly as?: "article" | "div" | "li";
}

/** Basis-Card: großzügig abgerundet, weicher Schatten. Wiederverwendbar. */
export function Card({
  children,
  variant = "surface",
  className,
  as: Tag = "div",
}: CardProps): React.ReactElement {
  return (
    <Tag className={`${styles.card} ${styles[variant]}${className ? ` ${className}` : ""}`}>
      {children}
    </Tag>
  );
}
