import { ReactNode } from "react";
import { ImageInterface, ButtonInterface, HeroInterface } from "./";

export interface ProjectInterface {
  id: number;
  meta: {
    description: string;
    category: string;
    slug: string;
  };
  hero: HeroInterface;
  intro: ProjectIntroInterface;
  images: ImageInterface[];
  navigation: {
    previous: ButtonInterface;
    next: ButtonInterface;
  };
}

export interface ProjectIntroInterface {
  description: string;
  list: string[];
}
