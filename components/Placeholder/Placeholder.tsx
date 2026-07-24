import styles from "./Placeholder.module.css";
import { Icon } from "@/components/Icon/Icon";

type Ratio = "16/9" | "16/10" | "3/2" | "4/3" | "1/1" | "3/4";

interface PlaceholderProps {
  /**
   * Beschreibt das später einzusetzende Motiv — dient als sichtbares Label
   * und als Alternativtext-Vorlage.
   */
  readonly label: string;
  readonly ratio?: Ratio;
  readonly rounded?: "md" | "lg" | "xl";
  /** Zeigt ein Play-Overlay (für spätere Video-Einbindung). */
  readonly play?: boolean;
  readonly priority?: boolean;
  readonly className?: string;
}

/**
 * Bild-Platzhalter mit korrektem Seitenverhältnis und abgerundeten Ecken.
 *
 * BILDER-TODO: Sobald echte Fotos vorliegen, diesen Platzhalter durch
 * <Image> aus next/image ersetzen (mit width/height bzw. fill + sizes,
 * `priority` beim Hero). Der `label`-Text wandert dann in das `alt`-Attribut.
 * Als aria-Label bleibt der Platzhalter für Screenreader beschreibbar.
 */
export function Placeholder({
  label,
  ratio = "4/3",
  rounded = "lg",
  play = false,
  priority = false,
  className,
}: PlaceholderProps): React.ReactElement {
  return (
    <div
      className={`${styles.placeholder} ${styles[`r${rounded}`]}${
        className ? ` ${className}` : ""
      }`}
      style={{ aspectRatio: ratio.replace("/", " / ") }}
      role="img"
      aria-label={`Bildplatzhalter: ${label}`}
      data-priority={priority ? "true" : undefined}
    >
      <span className={styles.grain} aria-hidden="true" />
      <div className={styles.caption} aria-hidden="true">
        <Icon name={play ? "play" : "mountain"} className={styles.captionIcon} />
        <span className={styles.captionText}>{label}</span>
      </div>
      {play ? (
        <span className={styles.playBadge} aria-hidden="true">
          <Icon name="play" />
        </span>
      ) : null}
    </div>
  );
}
