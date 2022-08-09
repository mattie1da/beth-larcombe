import styles from "../styles/layouts/Hero.module.scss";
import utilStyles from "../styles/utils.module.scss";

interface HeroInterface {
  title: string;
  subTitle: string;
  body: string;
}

export const Hero = ({ title, subTitle, body }: HeroInterface) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={utilStyles.heading1}>{title}</h1>
      <h2 className={utilStyles.heading2}>{subTitle}</h2>
      <p className={styles.body}>{body}</p>
    </div>
  );
};
