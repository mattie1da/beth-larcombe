import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/projects/Tiled.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import { ButtonInterface, ImageInterface } from "../../types";
import { IconFlower } from "../icons";

interface TiledProjectInterface {
  button: ButtonInterface;
  images: ImageInterface[];
}

export const TiledProject = ({ button, images }: TiledProjectInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flower}>
        <IconFlower color="var(--pink)" />
      </div>
      <div className={classnames(styles.image, styles.square)}>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={classnames(styles.image, styles.large)}>
        <Image
          src={images[1].src}
          alt={images[1].alt}
          layout="fill"
          objectFit="cover"
          priority
        />
        <Link href={button.href}>
          <a className={classnames(styles.button, utilStyles.button)}>
            {button.text}
          </a>
        </Link>
      </div>
    </div>
  );
};
