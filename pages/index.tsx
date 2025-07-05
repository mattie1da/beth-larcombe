import type { NextPage } from "next";
import Head from "next/head";
import classnames from "classnames";
import { TiledProject } from "../components/projects";
import { StackedProject } from "../components/projects/Stacked";
import { Container, Hero, Layout, Section, Meta } from "../layouts/";
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
import { useEffect, useRef, useState } from "react";
import { carouselAnimation } from "../components/animations/Carousel";

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
  const carouselProjectsRef = useRef([]);

  const [activeSection, setActiveSection] = useState(null);

  const sectionProjectsRef = useRef(null);
  const sectionAboutRef = useRef(null);
  const sectionContactRef = useRef(null);

  useEffect(() => {
    carouselAnimation(carouselProjectsRef.current);
  }, []);

  useEffect(() => {
    const sectionRefs = [
      { section: "Projects", ref: sectionProjectsRef },
      { section: "About", ref: sectionAboutRef },
      { section: "Contact", ref: sectionContactRef },
    ];

    const navigationScroll = () => {
      const recognitionOffset = 250;

      // @ts-ignore
      const sectionDistanceTop = (section) =>
        section.offsetTop - recognitionOffset;

      // @ts-ignore
      const sectionDistanceBottom = (section) =>
        section.offsetTop + section.offsetHeight - recognitionOffset;

      // @ts-ignore
      const sectionIsInView = (section) =>
        scrollY > sectionDistanceTop(section) &&
        scrollY < sectionDistanceBottom(section);

      const activeRef = sectionRefs.find((section) =>
        sectionIsInView(section.ref.current)
      );

      if (activeRef && activeSection !== activeRef.section) {
        // @ts-ignore
        setActiveSection(activeRef.section);
      } else if (!activeRef && activeSection) {
        setActiveSection(null);
      }
    };

    window.addEventListener("scroll", navigationScroll);

    return () => {
      window.removeEventListener("scroll", navigationScroll);
    };
  }, [activeSection]);

  return (
    <>
      <Meta />
      <Layout
        activeSection={activeSection}
        sectionContactRef={sectionContactRef}
      >
        <main>
          <div className={styles.homeHero}>
            <Container>
              <div className={styles.navFlower}>
                <IconFlower color="var(--teal)" />
              </div>
              <section className={classnames(utilStyles.grid, styles.hero)}>
                <Hero
                  title="Beth Larcombe"
                  subTitle="Graphic Designer"
                  body="A multi-disciplined designer based in Somerset with over 10 years
                    experience on a variety of brand, print &amp; digital projects."
                />
                <TiledProject
                  images={featuredProject.images.map((image) => image)}
                  button={{
                    text: "Download Portfolio",
                    href: `/files/portfolio.pdf`,
                  }}
                />
              </section>
              <div className={styles.heroFlower}>
                <IconFlower />
              </div>
            </Container>
          </div>
          <Section
            background="gradient"
            title="Recent Work"
            id="projects"
            ref={sectionProjectsRef}
          >
            <Carousel
              items={[
                carousel.map(
                  (project: carouselItemInterface, index: number) => (
                    <div
                      // @ts-ignore
                      ref={(el) => (carouselProjectsRef.current[index] = el)}
                      key={index}
                    >
                      <StackedProject
                        flower={index === 0}
                        image={project.image}
                        category={project.category}
                        title={project.title}
                        button={{
                          href: `/projects/${project.slug}`,
                          text: "View project",
                        }}
                      />
                    </div>
                  )
                ),
              ]}
            />
          </Section>
          <Section contain variant="about" id="about" ref={sectionAboutRef}>
            <div>
              <h2
                className={classnames(utilStyles.heading2, utilStyles.margin0)}
              >
                Time flies
              </h2>
              <h3 className={utilStyles.heading3}>
                Over 8 years of design adventures
              </h3>
            </div>
            <div>
              <p>
                With experience in brand agencies, digital studios and in-house,
                I’ve spent the last few years honing my craft. My absolute
                favourite projects to work on are brand identity, refreshes and
                digital, but I have a whole heap of print experience to boot
                too. Basically, whatever you need, I’ve got you covered.
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
      </Layout>
    </>
  );
};

export default Home;
