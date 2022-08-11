import classnames from "classnames";
import { IconBee } from "../components/icons";
import styles from "../styles/layouts/Footer.module.scss";
import utilStyles from "../styles/utils.module.scss";
import { Section } from "./";

export const Footer = () => {
  return (
    <footer className={styles.wrapper} id="contact">
      <Section contain center background="lavender">
        <h2 className={classnames(utilStyles.heading2, styles.title)}>
          Like what you see?
        </h2>
        <p className={styles.body}>
          I’m available for projects big and small and would love to hear what
          you’re planning. Feel free to give me a shout and we can have a chat.
        </p>

        <form className={styles.form}>
          <label htmlFor="name" className={utilStyles.visuallyHidden}>
            Your name
          </label>
          <input
            className={styles.input}
            id="name"
            type="text"
            placeholder="Your name"
          />

          <label htmlFor="email" className={utilStyles.visuallyHidden}>
            Your email addreess
          </label>
          <input
            className={styles.input}
            id="email"
            type="text"
            placeholder="Your email address"
          />

          <label htmlFor="message" className={utilStyles.visuallyHidden}>
            Your message
          </label>
          <textarea
            className={styles.input}
            id="message"
            rows={6}
            placeholder="Your message..."
          />

          <button
            className={classnames(styles.submit, utilStyles.button)}
            type="submit"
          >
            Submit
          </button>
        </form>

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
};
