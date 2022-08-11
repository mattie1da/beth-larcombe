import Image from "next/image";
import classnames from "classnames";
import { ProjectHeroInterface } from "../../types";
import styles from "../../styles/components/project/ProjectHero.module.scss";
import utilStyles from "../../styles/utils.module.scss";

export const ProjectHero = ({
  image,
  title,
  category,
}: ProjectHeroInterface) => {
  return (
    <figure className={styles.hero}>
      <Image src={image.src} alt={image.alt} layout="fill" objectFit="cover" />
      <figcaption className={styles.content}>
        <h1 className={classnames(utilStyles.heading1, styles.title)}>
          {title}
        </h1>
        <h2 className={classnames(utilStyles.heading2, styles.category)}>
          {category}
        </h2>
      </figcaption>
    </figure>
  );
};
