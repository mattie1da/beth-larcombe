import { Container } from "./";
import utilStyles from "../styles/utils.module.scss";
import { ReactNode, useEffect, useRef } from "react";
import classnames from "classnames";
import styles from "../styles/layouts/Section.module.scss";
import { gsap } from "gsap";
import { IconFlower } from "../components/icons";

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
  const sectionRef = useRef(null);

  useEffect(() => {
    if (background === "gradient") {
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          scrub: true,
          trigger: sectionRef.current,
        },
        backgroundPosition: "0% 100%",
      });
    }
  }, [background]);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={classnames(styles.section, {
        [styles.gradient]: background === "gradient",
        [styles.lavender]: background === "lavender",
        [styles.about]: variant === "about",
        [styles.footer]: variant === "footer",
        [styles.center]: center,
      })}
    >
      {contain ? (
        <Container>
          <div className={variant === "about" ? styles.aboutGrid : ""}>
            {title && (
              <h2 className={classnames(styles.title, utilStyles.heading2)}>
                {title}
              </h2>
            )}
            {children}
          </div>
          {variant === "about" && (
            <>
              <div className={classnames(styles.flower, styles.flowerLavender)}>
                <IconFlower />
              </div>
              <div className={classnames(styles.flower, styles.flowerPink)}>
                <IconFlower color="var(--pink)" />
              </div>
              <div className={classnames(styles.flower, styles.flowerTeal)}>
                <IconFlower color="var(--teal)" />
              </div>
            </>
          )}
        </Container>
      ) : (
        <div className={styles.wrapper}>
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
