import Link from "next/link";
import styles from "./Button.module.css";
import { Icon, type IconName } from "@/components/Icon/Icon";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface CommonProps {
  readonly variant?: Variant;
  readonly size?: Size;
  readonly icon?: IconName;
  readonly className?: string;
  readonly children: React.ReactNode;
}

interface LinkProps extends CommonProps {
  readonly href: string;
  /** Externe Ziele (mailto:, tel:, andere Domains) öffnen ohne Prefetch. */
  readonly external?: boolean;
}

/**
 * Pill-förmiger Button. Standardmäßig als Link gerendert, da alle CTAs im
 * Projekt navigieren (Buchung, Telefon, E-Mail, Seiten).
 * Alle States (hover, focus-visible, active, disabled) sind im Modul definiert.
 */
export function Button({
  href,
  external,
  variant = "primary",
  size = "md",
  icon,
  className,
  children,
}: LinkProps): React.ReactElement {
  const cls = `${styles.button} ${styles[variant]} ${styles[size]}${
    className ? ` ${className}` : ""
  }`;

  const content = (
    <>
      <span className={styles.label}>{children}</span>
      {icon ? <Icon name={icon} className={styles.icon} /> : null}
    </>
  );

  if (external) {
    const isProtocol = /^(mailto:|tel:)/.test(href);
    return (
      <a
        href={href}
        className={cls}
        {...(isProtocol
          ? {}
          : { target: "_blank", rel: "noopener noreferrer" })}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
