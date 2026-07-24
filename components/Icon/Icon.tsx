import styles from "./Icon.module.css";

/**
 * Dünne Outline-Icons als Inline-SVG (kein rohes <img>, keine Icon-Library).
 * Alle Icons teilen ein 24×24-Viewport-Grid, currentColor und stroke-basiert.
 */
export type IconName =
  | "wifi"
  | "parking"
  | "balcony"
  | "tv"
  | "phone"
  | "hairdryer"
  | "fridge"
  | "safe"
  | "radio"
  | "lift"
  | "evCharging"
  | "breakfast"
  | "coffee"
  | "drinks"
  | "dog"
  | "bus"
  | "mountain"
  | "family"
  | "wallet"
  | "calendar"
  | "clock"
  | "hiking"
  | "bike"
  | "wedding"
  | "users"
  | "leaf"
  | "sun"
  | "mapPin"
  | "star"
  | "play"
  | "arrowRight"
  | "mail"
  | "check"
  | "gift"
  | "car"
  | "key";

export interface IconProps {
  readonly name: IconName;
  readonly className?: string;
  /** Dekoratives Icon (Standard). Bei true wird es Screenreadern angeboten. */
  readonly title?: string;
}

const paths: Record<IconName, React.ReactNode> = {
  wifi: (
    <>
      <path d="M5 12.5a10 10 0 0 1 14 0" />
      <path d="M8.5 16a5 5 0 0 1 7 0" />
      <circle cx="12" cy="19" r="0.5" />
    </>
  ),
  parking: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <path d="M10 16V8h3a2.5 2.5 0 0 1 0 5h-3" />
    </>
  ),
  balcony: (
    <>
      <path d="M4 21v-6h16v6" />
      <path d="M4 15V8a8 8 0 0 1 16 0v7" />
      <path d="M12 15v6M8 15v6M16 15v6" />
    </>
  ),
  tv: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M9 21h6" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5 9 4l1 3.5-1.7 1.2a11 11 0 0 0 5 5L14.5 13l3.5 1 .5 2.5a2 2 0 0 1-2.2 2.3A14 14 0 0 1 4.2 5.7 2 2 0 0 1 6.5 3.5Z" />
  ),
  hairdryer: (
    <>
      <path d="M4 6h9a4 4 0 0 1 0 8H4z" />
      <path d="M4 6v8" />
      <path d="M9 14l1 6" />
    </>
  ),
  fridge: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="2" />
      <path d="M6 10h12" />
      <path d="M9 6v2M9 13v3" />
    </>
  ),
  safe: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 8.5V6M12 18v-2.5" />
    </>
  ),
  radio: (
    <>
      <rect x="3" y="8" width="18" height="11" rx="2" />
      <circle cx="8" cy="13.5" r="2.5" />
      <path d="M15 12h3M15 15h3M8 8l9-4" />
    </>
  ),
  lift: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M12 3v18" />
      <path d="M9 8l-1.5 2h3zM15 16l-1.5-2h3z" />
    </>
  ),
  evCharging: (
    <>
      <rect x="4" y="4" width="10" height="16" rx="2" />
      <path d="M4 9h10" />
      <path d="M9 12l-1.5 3H10l-1.5 3" />
      <path d="M17 8l3 3v6a2 2 0 0 1-2 2" />
    </>
  ),
  breakfast: (
    <>
      <path d="M4 8h11v3a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
      <path d="M15 9h2a2.5 2.5 0 0 1 0 5h-2" />
      <path d="M7 3c-.6.8-.6 1.7 0 2.5M11 3c-.6.8-.6 1.7 0 2.5" />
      <path d="M3 20h14" />
    </>
  ),
  coffee: (
    <>
      <path d="M4 8h13v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
      <path d="M17 9h2a2.5 2.5 0 0 1 0 5h-2" />
      <path d="M7 3v2M11 3v2" />
    </>
  ),
  drinks: (
    <>
      <path d="M6 3h12l-1 5a5 5 0 0 1-10 0z" />
      <path d="M12 13v6M8 21h8" />
    </>
  ),
  dog: (
    <>
      <path d="M10 5 7 4 5 6v4l-2 2 2 2v5h5v-3h4v3h5v-6l2-2-2-2V6l-2-2-3 1z" />
      <circle cx="9" cy="11" r="0.5" />
      <circle cx="15" cy="11" r="0.5" />
    </>
  ),
  bus: (
    <>
      <rect x="4" y="4" width="16" height="13" rx="2" />
      <path d="M4 11h16" />
      <circle cx="8" cy="19" r="1.5" />
      <circle cx="16" cy="19" r="1.5" />
    </>
  ),
  mountain: (
    <>
      <path d="m3 19 6-11 4 6 2-3 6 8z" />
      <path d="m8 10 1.5 2.5" />
    </>
  ),
  family: (
    <>
      <circle cx="8" cy="7" r="2.5" />
      <circle cx="16" cy="8" r="2" />
      <path d="M4 20v-3a4 4 0 0 1 8 0v3" />
      <path d="M13 20v-2a3 3 0 0 1 6 0v2" />
    </>
  ),
  wallet: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <circle cx="16" cy="14.5" r="1" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  hiking: (
    <>
      <circle cx="13" cy="4.5" r="1.5" />
      <path d="M12 8 9 12l3 2 1 6" />
      <path d="M12 8l4 2 2-1" />
      <path d="M9 12l-2 8M6 21V9l1 3" />
    </>
  ),
  bike: (
    <>
      <circle cx="6" cy="17" r="3.5" />
      <circle cx="18" cy="17" r="3.5" />
      <path d="M6 17 10 8h4l3 5M9 8h3l3 9" />
      <circle cx="14" cy="5" r="1" />
    </>
  ),
  wedding: (
    <>
      <circle cx="9" cy="14" r="4" />
      <circle cx="15" cy="14" r="4" />
      <path d="m9 4 1.5 3h-3zM9 4l1.5 3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20v-2a5 5 0 0 1 10 0v2" />
      <path d="M16 6a3 3 0 0 1 0 5M18 20v-2a5 5 0 0 0-2-4" />
    </>
  ),
  leaf: (
    <>
      <path d="M4 20c0-9 5-14 16-14 0 11-5 16-14 16" />
      <path d="M4 20c4-6 8-8 12-9" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" />
    </>
  ),
  mapPin: (
    <>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  star: <path d="m12 3 2.6 5.6 6 .7-4.4 4 1.2 6-5.4-3-5.4 3 1.2-6-4.4-4 6-.7z" />,
  play: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 9 5 3-5 3z" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  check: <path d="m5 12 4 4 10-10" />,
  gift: (
    <>
      <rect x="4" y="9" width="16" height="11" rx="1.5" />
      <path d="M4 13h16M12 9v11" />
      <path d="M12 9C10 9 8 8 8 6a2 2 0 0 1 4 0c0-2 2-3 4-2a2 2 0 0 1-4 5Z" />
    </>
  ),
  car: (
    <>
      <path d="M4 16v-3l2-5h12l2 5v3" />
      <path d="M3 16h18v3h-3v-2H6v2H3z" />
      <circle cx="7.5" cy="16" r="1" />
      <circle cx="16.5" cy="16" r="1" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="8" r="4" />
      <path d="m11 11 8 8M16 16l2-2M18 18l2-2" />
    </>
  ),
};

export function Icon({ name, className, title }: IconProps): React.ReactElement {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`${styles.icon}${className ? ` ${className}` : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      {paths[name]}
    </svg>
  );
}
