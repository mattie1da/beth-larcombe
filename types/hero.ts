import { ImageInterface } from "./";

export interface HeroInterface {
  colors: {
    primary: string;
    secondary: string;
  };
  title: string;
  subTitle: string;
  body: string;
  image?: ImageInterface;
}
