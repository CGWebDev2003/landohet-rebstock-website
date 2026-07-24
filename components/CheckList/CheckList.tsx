import styles from "./CheckList.module.css";
import { Icon, type IconName } from "@/components/Icon/Icon";

interface CheckListProps {
  readonly items: readonly string[];
  readonly icon?: IconName;
  readonly columns?: 1 | 2;
  readonly className?: string;
}

/** Aufzählung mit Häkchen-Icons, optional zweispaltig. */
export function CheckList({
  items,
  icon = "check",
  columns = 1,
  className,
}: CheckListProps): React.ReactElement {
  return (
    <ul
      className={`${styles.list} ${columns === 2 ? styles.two : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {items.map((item) => (
        <li key={item} className={styles.item}>
          <Icon name={icon} className={styles.icon} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
