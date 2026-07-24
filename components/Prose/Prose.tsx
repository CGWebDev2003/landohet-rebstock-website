import styles from "./Prose.module.css";

interface ProseProps {
  readonly children: React.ReactNode;
  readonly className?: string;
}

/** Container für redaktionellen Fließtext mit angenehmer Zeilenlänge. */
export function Prose({ children, className }: ProseProps): React.ReactElement {
  return (
    <div className={`${styles.prose}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
