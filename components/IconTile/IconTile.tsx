import styles from "./IconTile.module.css";
import { Icon, type IconName } from "@/components/Icon/Icon";

interface IconTileProps {
  readonly icon: IconName;
  readonly title: string;
  readonly text?: string;
  /** Grün hervorgehobener Fokuspunkt der Kachelreihe. */
  readonly highlight?: boolean;
}

/** Icon-Kachel mit dünnem Outline-Icon, Titel und optionalem Text. */
export function IconTile({
  icon,
  title,
  text,
  highlight = false,
}: IconTileProps): React.ReactElement {
  return (
    <div className={`${styles.tile} ${highlight ? styles.highlight : ""}`}>
      <span className={styles.iconWrap}>
        <Icon name={icon} className={styles.icon} />
      </span>
      <h3 className={styles.title}>{title}</h3>
      {text ? <p className={styles.text}>{text}</p> : null}
    </div>
  );
}

interface IconTileGridProps {
  readonly children: React.ReactNode;
  /** Feste Spaltenzahl auf Desktop; mobil immer flexibel. */
  readonly columns?: 2 | 3 | 4;
  readonly className?: string;
}

/** Gleichmäßiges Raster für Icon-Kacheln. */
export function IconTileGrid({
  children,
  columns = 3,
  className,
}: IconTileGridProps): React.ReactElement {
  return (
    <div
      className={`${styles.grid} ${styles[`cols${columns}`]}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </div>
  );
}
