import { ProjectInterface } from "../../types";

export const featuredProjectResolver = (data: ProjectInterface) => {
  return {
    slug: data.meta.slug,
    images: [
      {
        src: data.images[0].src,
        alt: data.images[0].alt,
      },
      {
        src: data.hero.image && data.hero.image.src,
        alt: data.hero.image && data.hero.image.alt,
      },
    ],
  };
};
