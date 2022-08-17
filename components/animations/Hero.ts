import { gsap } from "gsap";

export const heroAnimation = (
  figure: HTMLElement,
  title: HTMLElement,
  subTitle: HTMLElement,
  overlay: HTMLElement,
  darkOverlay: HTMLElement,
  colors
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
