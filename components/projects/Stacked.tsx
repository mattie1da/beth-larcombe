import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/projects/Stacked.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import { ButtonInterface, ImageInterface } from "../../types";
import { IconEye, IconFlower } from "../icons";

interface StackedProjectInterface {
  button: ButtonInterface;
  image: ImageInterface;
  title: string;
  category: string;
  flower: Boolean;
}

export const StackedProject = ({
  button,
  image,
  title,
  category,
  flower,
}: StackedProjectInterface) => {
  return (
    <figure className={styles.wrapper}>
      {flower && (
        <div className={styles.flower}>
          <IconFlower color="var(--pink)" />
        </div>
      )}
      <div className={styles.image}>
        <Link href={button.href}>
          <a className={styles.imageInner}>
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
            />
          </a>
        </Link>
      </div>
      <figcaption className={styles.caption}>
        <div>
          <span className={styles.category}>{category}</span>
          <h3 className={classnames(utilStyles.heading2, styles.title)}>
            <Link href={button.href}>{title}</Link>
          </h3>
        </div>
        <Link href={button.href}>
          <a className={styles.button}>
            <span className={utilStyles.visuallyHidden}>{button.text}</span>
            <IconEye />
          </a>
        </Link>
      </figcaption>
    </figure>
  );
};
