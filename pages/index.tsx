import type { NextPage } from "next";
import Head from "next/head";
import classnames from "classnames";
import { TiledProject } from "../components/projects";
import { StackedProject } from "../components/projects/Stacked";
import {
  Navigation,
  Container,
  Hero,
  Section,
  Footer,
  Meta,
} from "../layouts/";
import styles from "../styles/pages/Home.module.scss";
import utilStyles from "../styles/utils.module.scss";
import { carouselItemInterface, ProjectInterface } from "../types";
import { Carousel } from "../components/carousel";
import {
  carouselItemResolver,
  featuredProjectResolver,
} from "../services/resolvers";
import { homepageInterface } from "../types/homepage";
import { IconFlower } from "../components/icons";

export const getStaticProps = async () => {
  const data = require("../lib/projects/data.json");

  return {
    props: {
      homepageData: {
        featuredProject: featuredProjectResolver(
          data.find((item: ProjectInterface) => item.id === 2)
        ),
        carousel: data.map((item: ProjectInterface) =>
          carouselItemResolver(item)
        ),
      },
    },
  };
};

const Home: NextPage<homepageInterface> = ({ homepageData }) => {
  const { featuredProject, carousel } = homepageData;

  return (
    <>
      <Meta />
      <Navigation />

      <main style={{ overflow: "hidden" }}>
        <Container>
          <section className={classnames(utilStyles.grid, styles.hero)}>
            <Hero
              title="Beth Larcombe"
              subTitle="Graphic Designer"
              body="A multi-disciplined designer based in Southampton with over 6 years
                experience on a variety of brand, print &amp; digital projects."
            />
            <TiledProject
              images={featuredProject.images.map((image) => image)}
              button={{
                text: "Check It Out",
                href: `/projects/${featuredProject.slug}`,
              }}
            />
          </section>
          <div className={styles.heroFlower}>
            <IconFlower />
          </div>
        </Container>
        <Section background="gradient" title="Recent Work" id="projects">
          <Carousel
            items={[
              carousel.map((project: carouselItemInterface, index: number) => (
                <StackedProject
                  key={index}
                  flower={index === 0}
                  image={project.image}
                  category={project.category}
                  title={project.title}
                  button={{
                    href: `/projects/${project.slug}`,
                    text: "View project",
                  }}
                />
              )),
            ]}
          />
        </Section>
        <Section contain variant="about" id="about">
          <div>
            <h2 className={classnames(utilStyles.heading2, utilStyles.margin0)}>
              Time flies
            </h2>
            <h3 className={utilStyles.heading3}>
              Over 6 years of design adventures
            </h3>
          </div>
          <div>
            <p>
              With experience in brand agencies, digital studios and in-house,
              I’ve spent the last few years honing my craft. My absolutely
              favourite projects to work on are brand creation, refreshes and
              digital, but I have a whole heap of print experience to boot too.
              Basically, whatever you need, I’ve got you covered.
            </p>
            <a
              className={utilStyles.button}
              href="https://www.linkedin.com/in/beth-larcombe-5200b6103"
            >
              Catch me on Linkedin
            </a>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
