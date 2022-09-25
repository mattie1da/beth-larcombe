import { useEffect, useRef } from "react";
import styles from "../../styles/components/icons/Flower.module.scss";
import { flowerAnimation } from "../animations/Flower";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface IconFlowerInterface {
  color?: string;
}

export const IconFlower = ({
  color = "var(--lavender)",
}: IconFlowerInterface) => {
  const flowerRef = useRef(null);

  useEffect(() => {
    flowerAnimation(flowerRef.current);

    return () => {
      ScrollTrigger.getAll().map((item) => item.kill());
    };
  }, []);

  return (
    <svg
      className={styles.icon}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 333 333"
      ref={flowerRef}
    >
      <g stroke={color} strokeWidth="2">
        <path
          vectorEffect="non-scaling-stroke"
          d="M234.73 71.01c-19.04 44.84-68.25 95.47-68.25 95.47s2.23-70.58 21.26-115.42C206.78 6.23 222.43-1.4 235.4 4.11c12.98 5.5 18.36 22.06-.67 66.9ZM98.23 261.95c19.03-44.84 68.24-95.47 68.24-95.47s-2.22 70.58-21.26 115.41c-19.03 44.85-34.69 52.47-47.65 46.96-12.98-5.51-18.36-22.07.67-66.9ZM261.94 234.72c-44.84-19.03-95.46-68.24-95.46-68.24s70.57 2.22 115.41 21.26c44.84 19.03 52.47 34.69 46.96 47.65-5.5 12.98-22.07 18.37-66.9-.67ZM71.02 98.23c44.84 19.03 95.46 68.25 95.46 68.25S95.9 164.25 51.07 145.2C6.23 126.18-1.4 110.52 4.1 97.56c5.5-12.97 22.06-18.36 66.9.67Z"
        />
        <path
          vectorEffect="non-scaling-stroke"
          d="M282.24 147.24c-45.17 18.24-115.77 19.25-115.77 19.25s51.48-48.33 96.65-66.58c45.17-18.26 61.62-12.58 66.9.5 5.3 13.06-2.62 28.57-47.78 46.83ZM50.72 185.72c45.16-18.24 115.76-19.24 115.76-19.24S115 214.8 69.84 233.05c-45.17 18.25-61.63 12.58-66.9-.5-5.28-13.06 2.61-28.58 47.78-46.83Z"
        />
        <path
          vectorEffect="non-scaling-stroke"
          d="M185.71 282.24c-18.24-45.16-19.24-115.76-19.24-115.76s48.32 51.47 66.57 96.64c18.25 45.17 12.58 61.63-.5 66.9-13.05 5.29-28.57-2.62-46.83-47.78ZM147.23 50.71c18.25 45.17 19.25 115.76 19.25 115.76S118.16 115 99.9 69.83c-18.24-45.16-12.58-61.62.5-66.9 13.07-5.28 28.59 2.62 46.83 47.78Z"
        />
      </g>
    </svg>
  );
};
