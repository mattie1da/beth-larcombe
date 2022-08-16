import Image from "next/image";
import { Container } from "../../layouts";
import { ProjectIntroInterface } from "../../types";
import styles from "../../styles/components/project/ProjectIntro.module.scss";
import { List } from "../List";

export const ProjectIntro = ({
  description,
  list,
  bulletColor,
}: ProjectIntroInterface) => {
  return (
    <Container>
      <div className={styles.wrapper}>
        <div
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <div>
          <List
            title="This project included:"
            list={list}
            bulletColor={bulletColor}
          />
        </div>
      </div>
    </Container>
  );
};
