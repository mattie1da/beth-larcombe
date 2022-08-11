import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/projects/Stacked.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import { ButtonInterface, ImageInterface } from "../../types";

interface StackedProjectInterface {
  button: ButtonInterface;
  image: ImageInterface;
  title: string;
  category: string;
}

export const StackedProject = ({
  button,
  image,
  title,
  category,
}: StackedProjectInterface) => {
  return (
    <figure className={styles.wrapper}>
      <div className={styles.image}>
        <Image
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <figcaption className={styles.caption}>
        <div>
          <span className={styles.category}>{category}</span>
          <h2 className={classnames(utilStyles.heading2, styles.title)}>
            {title}
          </h2>
        </div>
        <Link href={button.href}>
          <a className={styles.button}>{button.text}</a>
        </Link>
      </figcaption>
    </figure>
  );
};
