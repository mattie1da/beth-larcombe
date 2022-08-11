import useEmblaCarousel from "embla-carousel-react";
import { ReactNode, useCallback, useEffect, useState } from "react";
import styles from "../../styles/components/carousel/Carousel.module.scss";
import { NextButton, PrevButton } from "./Buttons";

interface CarouselInterface {
  items: ReactNode[];
}

export const Carousel = ({ items }: CarouselInterface) => {
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const [viewportRef, embla] = useEmblaCarousel({
    align: "start",
  });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <div className={styles.wrapper}>
      <div ref={viewportRef}>
        <div className={styles.grid}>{items.map((item) => item)}</div>
      </div>
      <div className={styles.buttons}>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
    </div>
  );
};
