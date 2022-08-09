import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { TiledProject } from "../components/projects";
import { Navigation, Container, Hero, Section } from "../layouts/";
import styles from "../styles/pages/Home.module.css";
import utilStyles from "../styles/utils.module.scss";

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

      <main className={styles.main}>
        <Container>
          <div className={utilStyles.grid}>
            <Hero
              title="Beth Larcombe"
              subTitle="Graphic Designer"
              body="A multi-disciplined designer based in Southampton with over 6 years
              experience on a variety of brand, print &amp; digital projects."
            />
            <TiledProject
              images={[
                {
                  src: "https://www.portseattle.org/sites/default/files/styles/detailpageimagesize/public/2019-12/Police%20K9%20team_181114_307.jpg?itok=Ac3I1crY",
                  alt: "Cute puppy",
                },
                {
                  src: "https://www.oliverpetcare.com/wp-content/uploads/2020/12/pexels-helena-lopes-1790446.jpg",
                  alt: "Another one omg",
                },
              ]}
              button={{
                text: "Check It Out",
                href: "/todo!",
              }}
            />
          </div>
        </Container>
        <Section background="gradient" title="Recent Work">
          Carousel
        </Section>
      </main>

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
