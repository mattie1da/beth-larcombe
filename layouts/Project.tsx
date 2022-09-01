import {
  ProjectIntro,
  ProjectGallery,
  ProjectNavigation,
} from "../components/project";
import { ProjectInterface } from "../types";
import { Section, Hero } from "./";

export const Project = ({
  meta,
  hero,
  intro,
  images,
  navigation,
}: ProjectInterface) => {
  return (
    <>
      <Hero {...hero} colors={meta.colors} />
      <Section bleed>
        <ProjectIntro {...intro} bulletColor={meta.colors.secondary} />
        <ProjectGallery images={images} />
        <ProjectNavigation {...navigation} />
      </Section>
    </>
  );
};
