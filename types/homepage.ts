import { carouselItemInterface } from "./carouselItem";
import { ImageInterface } from "./image";

export interface homepageInterface {
  homepageData: {
    featuredProject: {
      slug: string;
      images: ImageInterface[];
    };
    carousel: carouselItemInterface[];
  };
}
