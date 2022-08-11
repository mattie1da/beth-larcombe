import { IconArrow } from "../icons";
import utilStyles from "../../styles/utils.module.scss";
import styles from "../../styles/components/carousel/Buttons.module.scss";
import classnames from "classnames";

interface CarouselButtonInterface {
  onClick: Function;
  enabled: Boolean;
}

export const PrevButton = ({ onClick, enabled }: CarouselButtonInterface) => {
  return (
    <button
      className={classnames(styles.button, styles.prev)}
      onClick={() => onClick()}
      disabled={!enabled}
    >
      <span className={utilStyles.visuallyHidden}>Previous item</span>
      <IconArrow />
    </button>
  );
};

export const NextButton = ({ onClick, enabled }: CarouselButtonInterface) => {
  return (
    <button
      className={styles.button}
      onClick={() => onClick()}
      disabled={!enabled}
    >
      <span className={utilStyles.visuallyHidden}>Next item</span>
      <IconArrow />
    </button>
  );
};
