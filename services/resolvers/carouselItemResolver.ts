import { ProjectInterface } from "../../types";

export const carouselItemResolver = (data: ProjectInterface) => {
  return {
    slug: data.meta.slug,
    image: {
      src: data.images[1].src,
      alt: data.images[1].alt,
    },
    title: data.hero.title,
    category: data.meta.category,
    button: {
      href: `/projects/${data.meta.slug}`,
      text: `View the ${data.hero.title} project`,
    },
  };
};
