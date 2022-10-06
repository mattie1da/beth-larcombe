import Image from "next/image";
import { isVideo } from "../helpers/isVideo";
import styles from "../styles/components/Media.module.scss";
import { ImageInterface } from "../types";

interface MediaInterface {
  media: ImageInterface;
}

export const Media = ({ media }: MediaInterface) => {
  return isVideo(media.src) ? (
    <video autoPlay loop muted className={styles.video}>
      <source src={media.src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <Image
      src={media.src}
      alt={media.alt}
      layout="fill"
      objectFit="cover"
      priority
    />
  );
};
