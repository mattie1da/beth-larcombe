import type { NextPage } from "next";
import Head from "next/head";
import { Navigation, Footer } from "../../layouts";
import styles from "../../styles/pages/Project.module.scss";
import { Project } from "../../layouts";
import { breadcrumbs } from "../../helpers/breadcrumbs";
import { ProjectInterface } from "../../types";

export async function getStaticPaths() {
  const data = require("../../lib/projects/data.json");

  return {
    paths: data.map((project: ProjectInterface) => {
      return {
        params: {
          id: project.id,
          slug: project.meta.slug,
        },
      };
    }),
    fallback: false, // use stock 404
  };
}

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const data = require("../../lib/projects/data.json");

  return {
    props: {
      project: data.find((project) => project.meta.slug === slug),
    },
  };
};

const ProjectPage: NextPage<ProjectInterface> = ({ project }) => {
  const { id, meta, hero, intro, images } = project;

  return (
    <>
      <Head>
        <title>{`Beth Larcombe - ${hero.title}`}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className={styles.main}>
        <Project
          meta={meta}
          hero={hero}
          intro={intro}
          images={images}
          navigation={breadcrumbs(id)}
        />
      </main>

      <Footer />
    </>
  );
};

export default ProjectPage;
