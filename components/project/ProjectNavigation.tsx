import Link from "next/link";
import { ButtonInterface } from "../../types";
import utilStyles from "../../styles/utils.module.scss";
import styles from "../../styles/components/project/ProjectNavigation.module.scss";

interface ProjectNavigationInterface {
  previous: ButtonInterface;
  next: ButtonInterface;
}

export const ProjectNavigation = ({
  previous,
  next,
}: ProjectNavigationInterface) => {
  return (
    <div className={styles.buttons}>
      <Link href={previous.href} title={`Navigate to ${previous.text}`}>
        <a className={utilStyles.button}>View Previous</a>
      </Link>
      <Link href={next.href} title={`Navigate to ${previous.text}`}>
        <a className={utilStyles.button}>View Next</a>
      </Link>
    </div>
  );
};
