import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";
import { TiledProject } from "../components/projects";
import { StackedProject } from "../components/projects/Stacked";
import { Navigation, Container, Hero, Section, Footer } from "../layouts/";
import styles from "../styles/pages/Home.module.scss";
import utilStyles from "../styles/utils.module.scss";
import { Carousel } from "../components/carousel";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Beth Larcombe</title>
        <meta
          name="description"
          content="A multi-disciplined designer based in Southampton with over 6 years experience on a variety of brand, print & digital projects."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main>
        <section className={styles.hero}>
          <Container>
            <div className={classnames(utilStyles.grid, styles.heroGrid)}>
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
        </section>
        <Section background="gradient" title="Recent Work" id="projects">
          <Carousel
            items={[
              <StackedProject
                key={0}
                image={{
                  src: "https://www.oliverpetcare.com/wp-content/uploads/2020/12/pexels-helena-lopes-1790446.jpg",
                  alt: "cuuute puppy",
                }}
                category={"Brand & Digital"}
                title={"Willo Remedies"}
                button={{
                  href: "/todo",
                  text: "view project",
                }}
              />,
              <StackedProject
                key={1}
                image={{
                  src: "https://www.oliverpetcare.com/wp-content/uploads/2020/12/pexels-helena-lopes-1790446.jpg",
                  alt: "cuuute puppy",
                }}
                category={"Brand & Digital"}
                title={"Tinkr"}
                button={{
                  href: "/todo",
                  text: "view project",
                }}
              />,
              <StackedProject
                key={2}
                image={{
                  src: "https://www.oliverpetcare.com/wp-content/uploads/2020/12/pexels-helena-lopes-1790446.jpg",
                  alt: "cuuute puppy",
                }}
                category={"Brand & Digital"}
                title={"The Blend Academy"}
                button={{
                  href: "/todo",
                  text: "view project",
                }}
              />,
            ]}
          />
        </Section>
        <Section contain variant="about" id="about">
          <h2 className={classnames(utilStyles.heading2, utilStyles.margin0)}>
            Time flies
          </h2>
          <h3 className={utilStyles.heading3}>
            Over 6 years of design adventures
          </h3>
          <p>
            With experience in brand agencies, digital studios and in-house,
            I’ve spent the last few years honing my craft. My absolutely
            favourite projects to work on are brand creation, refreshes and
            digital, but I have a whole heap of print experience to boot too.
            Basically, whatever you need, I’ve got you covered.
          </p>
          <a className={utilStyles.button} href="https://linkedin.com">
            Catch me on Linkedin
          </a>
        </Section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
