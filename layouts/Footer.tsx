import classnames from "classnames";
import { Form } from "../components";
import { IconBee } from "../components/icons";
import utilStyles from "../styles/utils.module.scss";
import styles from "../styles/layouts/Footer.module.scss";
import { Section } from "./";
import { forwardRef } from "react";

/* eslint-disable react/display-name */
export const Footer = forwardRef((props, ref) => {
  return (
    // @ts-ignore
    <footer ref={ref} className={styles.wrapper} id="contact">
      <Section variant="footer" contain center background="lavender">
        <h2 className={classnames(utilStyles.heading2, styles.title)}>
          Like what you see?
        </h2>
        <p className={styles.body}>
          I’m available for projects big and small and would love to hear what
          you’re planning. Feel free to give me a shout and we can have a chat.
        </p>

        <Form />

        <div className={styles.signature}>
          <p className={utilStyles.margin0}>
            Build by{" "}
            <a href="https://mattie.world" target="_blank" rel="noreferrer">
              mattie.world
            </a>
          </p>
          <div className={styles.bee}>
            <IconBee />
          </div>
          <a href="#">Back to the top &uarr;</a>
        </div>
      </Section>
    </footer>
  );
});
