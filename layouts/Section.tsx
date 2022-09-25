import { Container } from "./";
import utilStyles from "../styles/utils.module.scss";
import { forwardRef, ReactNode, useEffect } from "react";
import classnames from "classnames";
import styles from "../styles/layouts/Section.module.scss";
import { gsap } from "gsap";
import { IconFlower } from "../components/icons";

interface SectionInterface {
  background?: string;
  center?: Boolean;
  children: ReactNode;
  contain?: Boolean;
  bleed?: Boolean;
  title?: string;
  variant?: string;
  id?: string;
}

/* eslint-disable react/display-name */
export const Section = forwardRef(
  (
    {
      background,
      bleed,
      center,
      children,
      contain,
      title,
      variant,
      id,
    }: SectionInterface,
    ref
  ) => {
    useEffect(() => {
      if (background === "gradient") {
        // @ts-ignore
        gsap.to(ref.current, {
          scrollTrigger: {
            scrub: true,
            // @ts-ignore
            trigger: ref.current,
          },
          backgroundPosition: "0% 100%",
        });
      }
    }, [background, ref]);

    return (
      <section
        id={id}
        // @ts-ignore
        ref={ref}
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
                <div
                  className={classnames(styles.flower, styles.flowerLavender)}
                >
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
          <div className={classnames({ [styles.wrapper]: !bleed })}>
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
  }
);
