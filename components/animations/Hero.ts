import { gsap } from "gsap";
import { ColorsInterface } from "../../types/colors";

export const heroAnimation = (
  figure: any,
  title: any,
  subTitle: any,
  overlay: any,
  darkOverlay: any,
  colors: ColorsInterface
) => {
  gsap.to(title, {
    scrollTrigger: {
      trigger: figure,
      scrub: true,
      start: "0%",
      end: "30%",
    },
    translateY: 20,
    color: colors.primary,
  });
  gsap.to(subTitle, {
    scrollTrigger: {
      trigger: figure,
      scrub: true,
      start: "5%",
      end: "30%",
    },
    translateY: 20,
    color: colors.secondary,
  });
  gsap.to(darkOverlay, {
    scrollTrigger: {
      trigger: figure,
      scrub: true,
      start: "0%",
      end: "30%",
    },
    opacity: 0,
  });
  gsap.to(overlay, {
    background: `linear-gradient(transparent, #fffdea)`,
    scrollTrigger: {
      trigger: figure,
      scrub: true,
      start: "0%",
      end: "20%",
    },
  });
};
