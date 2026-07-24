import type { Metadata } from "next";
import styles from "./arrangements.module.css";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Section } from "@/components/Section/Section";
import { Button } from "@/components/Button/Button";
import { CheckList } from "@/components/CheckList/CheckList";
import { Icon } from "@/components/Icon/Icon";
import { hotelNav } from "@/content/nav";
import { arrangements } from "@/content/arrangements";
import { bookingUrl, bookingIsExternal } from "@/content/booking";

export const metadata: Metadata = {
  title: "Arrangements",
  description:
    "Sparwoche (7 Tage bleiben, 6 bezahlen, inkl. Gästepass) und individuelle Familienarrangements im Landhotel Rebstock. Buchbar von November bis März.",
};

export default function ArrangementsPage(): React.ReactElement {
  return (
    <>
      <PageHeader
        eyebrow="Hotel"
        title="Arrangements"
        lead="Ob längerer Aufenthalt zum Sparpreis oder ein individuelles Angebot für die ganze Familie — mit unseren Arrangements wird Ihr Aufenthalt noch schöner."
        subnav={hotelNav}
        activePath="/hotel/arrangements"
      />

      <Section>
        <div className={styles.grid}>
          {arrangements.map((a) => (
            <article
              key={a.name}
              className={`${styles.card} ${a.highlight ? styles.highlight : ""}`}
            >
              <span className={styles.icon}>
                <Icon name={a.icon} />
              </span>
              <h2 className={styles.title}>{a.name}</h2>
              <p className={styles.desc}>{a.description}</p>
              <CheckList items={a.details} />
              <div className={styles.actions}>
                <Button
                  href={a.highlight ? bookingUrl : "/kontakt"}
                  external={a.highlight ? bookingIsExternal : undefined}
                  variant={a.highlight ? "primary" : "secondary"}
                  icon="arrowRight"
                >
                  {a.highlight ? "Sparwoche anfragen" : "Angebot anfragen"}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
