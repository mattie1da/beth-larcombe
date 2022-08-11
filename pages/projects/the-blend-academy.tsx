import type { NextPage } from "next";
import Head from "next/head";
import { Navigation, Footer } from "../../layouts";
import styles from "../../styles/pages/Project.module.scss";
import { Project } from "../../layouts";
import { data } from "../../lib/projects/data";
import { breadcrumbs } from "../../helpers/breadcrumbs";

const TheBlendAcademy: NextPage = () => {
  const index = 2;
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

export default TheBlendAcademy;
