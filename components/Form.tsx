import styles from "../styles/components/Form.module.scss";
import utilStyles from "../styles/utils.module.scss";
import classnames from "classnames";

export const Form = () => {
  return (
    <form
      method="POST"
      name="contact"
      className={styles.form}
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/success"
    >
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
      <label style={{ display: "none" }}>
        Don’t fill this out if you’re human:
        <input name="bot-field" />
      </label>

      <button
        className={classnames(styles.submit, utilStyles.button)}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
