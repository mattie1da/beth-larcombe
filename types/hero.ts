import { ImageInterface, ColorsInterface } from "./";

export interface HeroInterface {
  colors?: ColorsInterface;
  title: string;
  subTitle: string;
  body: string;
  image?: ImageInterface;
}
