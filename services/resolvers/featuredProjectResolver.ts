import { ProjectInterface } from "../../types";

export const featuredProjectResolver = (data: ProjectInterface) => {
  return {
    slug: data.meta.slug,
    images: [
      {
        src: data.gif ? data.gif.src : data.images[1].src,
        alt: data.gif ? data.gif.alt : data.images[1].alt,
      },
      {
        src: data.images[0].src,
        alt: data.images[0].alt,
      },
    ],
  };
};
