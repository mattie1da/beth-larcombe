import { ProjectInterface } from "../../types";

const data = require("./data.json");

export const navigationData = data.map((project: ProjectInterface) => {
  return {
    text: project.hero.title,
    href: project.meta.slug,
  };
});
