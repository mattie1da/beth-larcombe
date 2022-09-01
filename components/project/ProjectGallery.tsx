import classnames from "classnames";
import Image from "next/image";
import styles from "../../styles/components/project/ProjectGallery.module.scss";
import { ImageInterface } from "../../types";
import { IconFlower } from "../icons";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";

interface ProjectGalleryInterface {
  images: ImageInterface[];
}

export const ProjectGallery = (props: ProjectGalleryInterface) => {
  const { images } = props;
  const galleryItems = useRef([]);
  const gridWrapper = useRef(null);

  useEffect(() => {
    gsap.to(galleryItems.current[1], {
      scrollTrigger: {
        trigger: gridWrapper.current,
        scrub: true,
        start: "0%",
        end: "100%",
      },
      y: 250,
    });

    gsap.to(galleryItems.current[2], {
      scrollTrigger: {
        trigger: gridWrapper.current,
        scrub: true,
        start: "0%",
        end: "100%",
      },
      y: -120,
    });

    // TODO: Last 3 items?
  }, []);

  return (
    <>
      <div
        ref={gridWrapper}
        className={classnames(styles.grid, styles.gridTwo)}
      >
        {images.slice(0, 4).map((image: ImageInterface, index: number) => (
          <div ref={(el) => (galleryItems.current[index] = el)} key={index}>
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
