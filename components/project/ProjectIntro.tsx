import Image from "next/image";
import { Container } from "../../layouts";
import { ProjectIntroInterface } from "../../types";
import styles from "../../styles/components/project/ProjectIntro.module.scss";
import { List } from "../List";

export const ProjectIntro = ({ description, list }: ProjectIntroInterface) => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.description}>{description}</div>
        <div>
          <p>This project included:</p>
          <List list={list} />
        </div>
      </div>
    </Container>
  );
};
