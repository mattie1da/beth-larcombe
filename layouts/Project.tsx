import {
  ProjectHero,
  ProjectIntro,
  ProjectGallery,
  ProjectNavigation,
} from "../components/project";
import { ProjectInterface } from "../types";
import { Section } from "./Section";

export const Project = ({
  hero,
  intro,
  images,
  navigation,
}: ProjectInterface) => {
  return (
    <>
      <ProjectHero {...hero} />
      <Section>
        <ProjectIntro {...intro} />
        <ProjectGallery images={images} />
        <ProjectNavigation {...navigation} />
      </Section>
    </>
  );
};
