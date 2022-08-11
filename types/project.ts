import { ReactNode } from "react";
import { ImageInterface, ButtonInterface } from "./";

export interface ProjectInterface {
  hero: ProjectHeroInterface;
  intro: ProjectIntroInterface;
  images: [
    // fixed length of 7 images
    ImageInterface,
    ImageInterface,
    ImageInterface,
    ImageInterface,
    ImageInterface,
    ImageInterface,
    ImageInterface
  ];
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
