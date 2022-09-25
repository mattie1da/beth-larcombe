import { gsap } from "gsap";

// @ts-ignore
export const carouselAnimation = (items) => {
  gsap.set(items, {
    opacity: 0,
    y: 50,
  });
  gsap.to(items, {
    stagger: 0.3,
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: items[0],
      start: "-120%",
    },
  });
};
