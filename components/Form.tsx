import styles from "../styles/components/Form.module.scss";
import utilStyles from "../styles/utils.module.scss";
import classnames from "classnames";

export const Form = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      window.location.href = "/success";
    } catch (error) {
      console.error("Form submission failed", error);
    }
  };

  return (
    <form
      method="POST"
      name="contact"
      className={styles.form}
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/__forms.html"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="name" className={utilStyles.visuallyHidden}>
        Your name
      </label>
      <input
        className={styles.input}
        id="name"
        name="name"
        type="text"
        placeholder="Your name"
        required
      />

      <label htmlFor="email" className={utilStyles.visuallyHidden}>
        Your email addreess
      </label>
      <input
        className={styles.input}
        id="email"
        type="text"
        name="email"
        placeholder="Your email address"
        required
      />

      <label htmlFor="message" className={utilStyles.visuallyHidden}>
        Your message
      </label>
      <textarea
        className={classnames(styles.input, styles.message)}
        id="message"
        name="message"
        rows={6}
        placeholder="Your message..."
        required
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
