import classnames from "classnames";
import Image from "next/image";
import utilStyles from "../styles/utils.module.scss";
import styles from "../styles/layouts/Hero.module.scss";
import { HeroInterface } from "../types";
import { useEffect, useRef } from "react";
import { heroAnimation } from "../components/animations/Hero";

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
    if (image) {
      heroAnimation(
        figureRef.current,
        titleRef.current,
        subTitleRef.current,
        overlayRef.current,
        darkOverlayRef.current,
        colors
      );
    }
  }, [image]);
  return image ? (
    <figure
      ref={figureRef}
      className={classnames(styles.hero, {
        [styles.project]: image,
      })}
    >
      <Image
        src={`http://localhost:3000${image.src}`}
        alt={image.alt}
        layout="fill"
        objectFit="cover"
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
