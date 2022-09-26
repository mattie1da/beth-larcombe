import classnames from "classnames";
import Image from "next/image";
import styles from "../../styles/components/project/ProjectGallery.module.scss";
import { ImageInterface } from "../../types";
import { IconFlower } from "../icons";

interface ProjectGalleryInterface {
  images: ImageInterface[];
}

export const ProjectGallery = (props: ProjectGalleryInterface) => {
  const { images } = props;

  return (
    <>
      <div className={classnames(styles.grid, styles.gridTwo)}>
        {images.slice(0, 4).map((image: ImageInterface, index: number) => (
          // @ts-ignore
          <div key={index}>
            {index === 1 ? (
              <>
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                />
                <div className={styles.flower}>
                  <IconFlower />
                </div>
              </>
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
        ))}
      </div>
      <div className={classnames(styles.grid, styles.gridThree)}>
        {images.slice(3, -1).map((image: ImageInterface, index: number) => (
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
    </>
  );
};
