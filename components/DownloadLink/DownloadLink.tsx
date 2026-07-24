import styles from "./DownloadLink.module.css";
import { Icon } from "@/components/Icon/Icon";

interface DownloadLinkProps {
  readonly label: string;
  /** Pfad zum PDF. Ist er null, wird ein deaktivierter „folgt“-Zustand gezeigt. */
  readonly href: string | null;
}

/**
 * PDF-Download-Link. Solange noch keine Datei hinterlegt ist (href === null),
 * wird ein klar erkennbarer Platzhalter mit Hinweis angezeigt.
 */
export function DownloadLink({ label, href }: DownloadLinkProps): React.ReactElement {
  if (!href) {
    return (
      <span className={`${styles.link} ${styles.pending}`} aria-disabled="true">
        <Icon name="arrowRight" className={styles.icon} />
        <span>
          {label}
          <span className={styles.note}> — PDF folgt in Kürze</span>
        </span>
      </span>
    );
  }

  return (
    <a href={href} className={styles.link} download>
      <Icon name="arrowRight" className={styles.icon} />
      <span>
        {label} <span className={styles.note}>(PDF)</span>
      </span>
    </a>
  );
}
