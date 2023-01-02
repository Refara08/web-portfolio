import Head from "next/head";
import Skills from "../components/skills/Skills";

import {
  getAbout,
  getCvLink,
  getExperiences,
  getSkills,
} from "../lib/get-contents";

const SkillsPage = ({ skills, experiences, about, cvLink }) => {
  return (
    <>
      <Head>
        <title>Gema Refantero | skill and experiences</title>
        <meta name="description" content="All skills and my experiences" />
      </Head>
      <Skills
        skills={skills}
        experiences={experiences}
        about={about}
        cvLink={cvLink}
      />
    </>
  );
};

export default SkillsPage;

export const getStaticProps = async () => {
  const skills = (await getSkills()) || [];
  const experiences = (await getExperiences()) || [];
  const abouts = (await getAbout()) || [];
  const cvLink = (await getCvLink()) || [];

  return {
    props: {
      skills,
      experiences,
      about: abouts[0],
      cvLink: cvLink[0].downloadLink,
    },
    revalidate: 60,
  };
};
