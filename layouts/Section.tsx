import { Container } from "./";
import utilStyles from "../styles/utils.module.scss";
import { ReactNode } from "react";
import classnames from "classnames";
import styles from "../styles/layouts/Section.module.scss";

interface SectionInterface {
  background?: string;
  center?: Boolean;
  children: ReactNode;
  contain?: Boolean;
  title?: string;
  variant?: string;
  id?: string;
}

export const Section = ({
  background,
  center,
  children,
  contain,
  title,
  variant,
  id,
}: SectionInterface) => {
  return (
    <section
      id={id}
      className={classnames(styles.section, {
        [styles.gradient]: background === "gradient",
        [styles.lavender]: background === "lavender",
        [styles.about]: variant === "about",
        [styles.center]: center,
      })}
    >
      {contain ? (
        <Container>
          {title && (
            <h2 className={classnames(styles.title, utilStyles.heading2)}>
              {title}
            </h2>
          )}
          {children}
        </Container>
      ) : (
        <div>
          {title && (
            <h2
              className={classnames(
                styles.padLeft,
                styles.title,
                utilStyles.heading2
              )}
            >
              {title}
            </h2>
          )}
          {children}
        </div>
      )}
    </section>
  );
};
