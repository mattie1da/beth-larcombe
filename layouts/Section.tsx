import { Container } from "./";
import utilStyles from "../styles/utils.module.scss";
import { ReactNode } from "react";
import classnames from "classnames";
import styles from "../styles/layouts/Section.module.scss";

interface SectionInterface {
  background: string;
  children: ReactNode;
  contain?: Boolean;
  title: string;
}

export const Section = ({
  background,
  children,
  contain,
  title,
}: SectionInterface) => {
  return (
    <section
      className={classnames(styles.section, {
        [styles.gradient]: background === "gradient",
        [styles.pink]: background === "pink",
      })}
    >
      {contain ? (
        <Container>
          <h2 className={classnames(styles.title, utilStyles.heading2)}>
            {title}
          </h2>
          {children}
        </Container>
      ) : (
        <div className={styles.padLeft}>
          <h2 className={classnames(styles.title, utilStyles.heading2)}>
            {title}
          </h2>
          {children}
        </div>
      )}
    </section>
  );
};
