import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/pages/Success.module.scss";
import utilStyles from "../styles/utils.module.scss";

const Success: NextPage = () => {
  return (
    <div className={styles.success}>
      <div className={styles.content}>
        <h1 className={utilStyles.heading1}>Thank you!</h1>
        <h2 className={utilStyles.heading2}>I&apos;ll be in touch - Beth</h2>
        <Link href="/">
          <a className={utilStyles.button}>&larr; Back to home</a>
        </Link>
      </div>
    </div>
  );
};

export default Success;
