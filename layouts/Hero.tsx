import classnames from "classnames";
import Image from "next/image";
import utilStyles from "../styles/utils.module.scss";
import styles from "../styles/layouts/Hero.module.scss";
import { HeroInterface } from "../types";
import { useEffect, useRef } from "react";
import { heroAnimation } from "../components/animations/Hero";
import { IconFlower } from "../components/icons";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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
  const darkOverlayRef = useRef(null);

  useEffect(() => {
    if (image && colors) {
      heroAnimation(
        figureRef.current,
        titleRef.current,
        subTitleRef.current,
        overlayRef.current,
        darkOverlayRef.current,
        colors
      );

      return () => {
        ScrollTrigger.getAll().map((item) => item.kill());
      };
    }
  }, [image, colors]);

  return image && colors ? (
    <figure
      ref={figureRef}
      className={classnames(styles.hero, {
        [styles.project]: image,
      })}
    >
      <Image
        src={image.src}
        alt={image.alt}
        layout="fill"
        objectFit="cover"
        priority
      />
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
      <aside ref={darkOverlayRef} className={styles.darkOverlay}></aside>
      <aside ref={overlayRef} className={styles.overlay}></aside>
      <div className={styles.flower}>
        <IconFlower color="var(--pink)" />
      </div>
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
