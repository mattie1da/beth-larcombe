import { ProjectInterface } from "../../types";

export const carouselItemResolver = (data: ProjectInterface) => {
  return {
    slug: data.meta.slug,
    image: {
      src: data.hero.image && data.hero.image.src,
      alt: data.hero.image && data.hero.image.alt,
    },
    title: data.hero.title,
    category: data.meta.category,
    button: {
      href: `/projects/${data.meta.slug}`,
      text: `View the ${data.hero.title} project`,
    },
  };
};
