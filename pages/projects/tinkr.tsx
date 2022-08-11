import type { NextPage } from "next";
import Head from "next/head";
import { Navigation, Footer } from "../../layouts";
import styles from "../../styles/pages/Project.module.scss";
import { Project } from "../../layouts";
import { breadcrumbs } from "../../helpers/breadcrumbs";

const Tinkr: NextPage = () => {
  const data = require("../../lib/projects/data.json");
  const index = 1;
  const { meta, hero, intro, images } = data[index];

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
          navigation={breadcrumbs(index)}
        />
      </main>

      <Footer />
    </>
  );
};

export default Tinkr;
