import classnames from "classnames";
import styles from "../../styles/components/project/ProjectGallery.module.scss";
import { ImageInterface } from "../../types";
import { IconFlower } from "../icons";
import { Media } from "../Media";

interface ProjectGalleryInterface {
  images: ImageInterface[];
}

export const ProjectGallery = (props: ProjectGalleryInterface) => {
  const { images } = props;
  console.log(images);

  return (
    <>
      <div className={classnames(styles.grid, styles.gridTwo)}>
        {images.slice(0, 4).map((image: ImageInterface, index: number) => (
          // @ts-ignore
          <div key={index}>
            {index === 1 ? (
              <>
                <Media media={image} />
                <div className={styles.flower}>
                  <IconFlower />
                </div>
              </>
            ) : (
              <Media media={image} />
            )}
          </div>
        ))}
      </div>
      <div className={classnames(styles.grid, styles.gridThree)}>
        {images.slice(4, 7).map((image: ImageInterface, index: number) => (
          <div key={index}>
            <Media media={image} />
          </div>
        ))}
      </div>
    </>
  );
};
