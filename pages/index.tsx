import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navigation, Container } from "../layouts/";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beth Larcombe</title>
        <meta
          name="description"
          content="A multi-disciplined designer based in Southampton with over 6 years experience on a variety of brand, print & digital projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <Container>
        <main className={styles.main}>
          <h1 className={styles.title}>Beth Larcombe</h1>

          <h2>Graphic Design</h2>

          <p className={styles.description}>
            A multi-disciplined designer based in Southampton with over 6 years
            experience on a variety of brand, print &amp; digital projects.
          </p>
        </main>
      </Container>

      <footer>
        <Container>
          <h2>Like what you see?</h2>
          <p>
            I’m available for projects big and small and would love to hear what
            you’re planning. Feel free to give me a shout and we can have a
            chat.
          </p>

          <form>
            <label htmlFor="name">Your name</label>
            <input id="name" type="text" placeholder="Your name" />

            <label htmlFor="email">Your email addreess</label>
            <input id="email" type="text" placeholder="Your email address" />

            <label htmlFor="email">Your message</label>
            <input id="email" type="text" placeholder="Your message" />

            <button type="submit">Submit</button>
          </form>

          <p>
            Build by{" "}
            <a href="https://mattie.world" target="_blank" rel="noreferrer">
              mattie.world
            </a>
          </p>
          <span>bee</span>
          <a href="#">Back to the top &uarr;</a>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
