import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { isVideo } from "../../helpers/isVideo";
import styles from "../../styles/components/projects/Tiled.module.scss";
import utilStyles from "../../styles/utils.module.scss";
import { ButtonInterface, ImageInterface } from "../../types";
import { IconFlower } from "../icons";
import { Media } from "../Media";

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
        <Media media={images[0]} />
        <Link href={button.href}>
          <a target="_blank" className={classnames(styles.button, utilStyles.button)}>
            {button.text}
          </a>
        </Link>
      </div>
      <div className={classnames(styles.image, styles.large)}>
        <Media media={images[1]} />
      </div>
    </div>
  );
};
