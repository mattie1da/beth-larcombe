import { data } from "./data";

export const navigationData = data.map((project) => {
  return {
    text: project.hero.title,
    href: project.meta.slug,
  };
});
