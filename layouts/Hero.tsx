import classnames from "classnames";
import Image from "next/image";
import utilStyles from "../styles/utils.module.scss";
import styles from "../styles/layouts/Hero.module.scss";
import { HeroInterface } from "../types";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export const Hero = ({
  title,
  subTitle,
  body,
  image,
  colors,
}: HeroInterface) => {
  const figureRef = useRef(null);
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (image) {
      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: figureRef.current,
          scrub: true,
          start: "0%",
          end: "30%",
        },
        color: colors.primary,
      });
      gsap.to(subTitleRef.current, {
        scrollTrigger: {
          trigger: figureRef.current,
          scrub: true,
          start: "5%",
          end: "30%",
        },
        color: colors.secondary,
      });
      gsap.to(overlayRef.current, {
        background: `linear-gradient(transparent, #fffdea)`,
        scrollTrigger: {
          trigger: figureRef.current,
          scrub: true,
          start: "0%",
          end: "20%",
        },
      });
    }
  }, [image]);
  return image ? (
    <figure
      ref={figureRef}
      className={classnames(styles.hero, {
        [styles.project]: image,
      })}
    >
      <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
      <figcaption className={styles.content}>
        <h1
          ref={titleRef}
          className={classnames(utilStyles.heading1, styles.title)}
        >
          {title}
        </h1>
        <h2
          ref={subTitleRef}
          className={classnames(utilStyles.heading2, styles.category)}
        >
          {subTitle}
        </h2>
      </figcaption>
      <aside ref={overlayRef} className={styles.overlay}></aside>
    </figure>
  ) : (
    <div className={styles.hero}>
      <div>
        <h1 className={utilStyles.heading1}>{title}</h1>
        <h2 className={utilStyles.heading2}>{subTitle}</h2>
        <p className={styles.body}>{body}</p>
      </div>
    </div>
  );
};
