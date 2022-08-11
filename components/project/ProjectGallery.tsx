import Image from "next/image";
import styles from "../../styles/components/project/ProjectGallery.module.scss";

export const ProjectGallery = ({ images }) => {
  return (
    <div className={styles.grid}>
      <div>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <Image
          src={images[0].src}
          alt={images[0].alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
