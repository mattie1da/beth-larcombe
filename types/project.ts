import { ImageInterface, BreadcrumbsInterface, HeroInterface } from "./";
import { ColorsInterface } from "./colors";

export interface ProjectInterface {
  id: number;
  meta: {
    description: string;
    category: string;
    slug: string;
    colors: ColorsInterface;
  };
  hero: HeroInterface;
  intro: ProjectIntroInterface;
  images: ImageInterface[];
  navigation: BreadcrumbsInterface;
}

export interface ProjectIntroInterface {
  bulletColor: string;
  description: string;
  list: string[];
}
