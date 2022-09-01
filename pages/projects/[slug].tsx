import type { NextPage } from "next";
import Head from "next/head";
import { Navigation, Footer, Meta } from "../../layouts";
import styles from "../../styles/pages/Project.module.scss";
import { Project } from "../../layouts";
import { BreadcrumbsInterface, ProjectInterface } from "../../types";
import { breadcrumbs } from "../../helpers/breadcrumbs";

// make all the pages/urls at build time
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

// get the data for a specific page based on it's slug
// @ts-ignore
export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const data = require("../../lib/projects/data.json");

  const project = data.find(
    (project: ProjectInterface) => project.meta.slug === slug
  );

  return {
    props: {
      project,
      breadcrumbs: breadcrumbs(project.id),
    },
  };
};

interface ProjectPageInterface {
  project: ProjectInterface;
  breadcrumbs: BreadcrumbsInterface;
}

const ProjectPage = ({ project, breadcrumbs }: ProjectPageInterface) => {
  const { id, meta, hero, intro, images } = project;

  return (
    <>
      <Meta title={`Beth Larcombe - ${hero.title}`} />
      <Navigation />

      <main className={styles.main}>
        <Project
          id={id}
          meta={meta}
          hero={hero}
          intro={intro}
          images={images}
          navigation={breadcrumbs}
        />
      </main>

      <Footer />
    </>
  );
};

export default ProjectPage;
