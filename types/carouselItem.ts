import { ButtonInterface } from "./button";
import { ImageInterface } from "./image";

export interface carouselItemInterface {
  slug: string;
  image: ImageInterface;
  title: string;
  category: string;
  button: ButtonInterface;
}
