import { ImageInterface } from "./";

export interface HeroInterface {
  title: string;
  subTitle: string;
  body: string;
  image?: ImageInterface;
}
