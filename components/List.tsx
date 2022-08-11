import styles from "../styles/components/List.module.scss";

interface ListInterface {
  list: string[];
}

export const List = (props: ListInterface) => {
  const { list } = props;

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
