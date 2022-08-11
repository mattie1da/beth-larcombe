// TODO: How to type check the array passed to this list?
import styles from "../styles/components/List.module.scss";

export const List = ({ list }) => {
  return (
    <ul className={styles.wrapper}>
      {list.map((item: string) => (
        <li className={styles.item} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};
