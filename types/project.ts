import { ReactNode } from "react";
import { ImageInterface, ButtonInterface } from "./";

export interface ProjectInterface {
  meta: {
    description: string;
    slug: string;
  };
  hero: ProjectHeroInterface;
  intro: ProjectIntroInterface;
  images: ImageInterface[];
  navigation: {
    previous: ButtonInterface;
    next: ButtonInterface;
  };
}

export interface ProjectHeroInterface {
  image: ImageInterface;
  title: string;
  category: string;
}

export interface ProjectIntroInterface {
  description: ReactNode;
  list: string[];
}
