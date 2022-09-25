import { gsap } from "gsap";

// @ts-ignore
export const flowerAnimation = (icon) => {
  gsap.to(icon, {
    scrollTrigger: {
      trigger: icon,
      scrub: true,
    },
    rotate: 30,
  });
};
