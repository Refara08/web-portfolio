import Head from "next/head";
import Skills from "../components/skills/Skills";

import { getAllSkillIcons } from "../components/skills/skills-helper";

const SkillsPage = () => {
  const allIcons = getAllSkillIcons();

  return (
    <>
      <Head>
        <title>Gema Refantero | Services</title>
        <meta
          name="description"
          content="Services I offered as web designer and web developer"
        />
      </Head>
      <Skills icons={allIcons} />
    </>
  );
};

export default SkillsPage;
