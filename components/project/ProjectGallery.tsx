import Image from "next/image";
import styles from "../../styles/components/project/ProjectGallery.module.scss";
import { ImageInterface } from "../../types";

interface ProjectGalleryInterface {
  images: ImageInterface[];
}

export const ProjectGallery = (props: ProjectGalleryInterface) => {
  const { images } = props;

  return (
    <div className={styles.grid}>
      {images.map((image: ImageInterface, index: number) => (
        <div key={index}>
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};
