import styles from "../styles/components/List.module.scss";
import { CSSProperties } from "react";

interface ListInterface {
  list: string[];
  title: string;
  bulletColor: string;
}

export const List = (props: ListInterface) => {
  const { list, title, bulletColor } = props;

  return (
    <>
      <p className={styles.title}>{title}</p>
      <ul className={styles.wrapper}>
        {list.map((item: string) => (
          <li
            className={styles.item}
            key={item}
            style={{ "--bullet-color": bulletColor } as CSSProperties}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
