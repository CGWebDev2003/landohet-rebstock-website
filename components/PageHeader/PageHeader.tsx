import Link from "next/link";
import styles from "./PageHeader.module.css";
import type { NavItem } from "@/content/nav";
import { Icon } from "@/components/Icon/Icon";

interface PageHeaderProps {
  readonly eyebrow?: string;
  readonly title: string;
  readonly lead?: string;
  /** Optionale Sub-Navigation (z. B. für den Hotel-Bereich). */
  readonly subnav?: readonly NavItem[];
  /** Aktueller Pfad zum Markieren des aktiven Subnav-Punktes. */
  readonly activePath?: string;
}

/**
 * Einheitlicher Seitenkopf für alle Unterseiten. Schafft Abstand zur
 * schwebenden Header-Leiste und bietet optional eine Sub-Navigation.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
  subnav,
  activePath,
}: PageHeaderProps): React.ReactElement {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
        <h1 className={styles.title}>{title}</h1>
        {lead ? <p className={styles.lead}>{lead}</p> : null}

        {subnav ? (
          <nav className={styles.subnav} aria-label="Unterseiten">
            {subnav.map((item) => {
              const active = activePath === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.subnavLink} ${active ? styles.subnavActive : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  {active ? <Icon name="check" className={styles.subnavIcon} /> : null}
                </Link>
              );
            })}
          </nav>
        ) : null}
      </div>
    </div>
  );
}
