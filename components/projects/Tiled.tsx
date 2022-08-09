import classnames from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/projects/Tiled.module.scss";

interface ButtonInterface {
  text: string;
  href: string;
}

interface ImageInterface {
  src: string;
  alt: string;
}

interface TiledProjectInterface {
  button: ButtonInterface;
  images: ImageInterface[];
}

export const TiledProject = ({ button, images }: TiledProjectInterface) => {
  return (
    <div className={styles.wrapper}>
      <div className={classnames(styles.image, styles.square)}>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={classnames(styles.image, styles.large)}>
        <Image
          src={images[1].src}
          alt={images[1].alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Link href={button.href}>
        <a className={styles.button}>{button.text}</a>
      </Link>
    </div>
  );
};
