import HTML5Icon from "../ui/jsx/HTMLIcon";
import CssIcon from "../ui/jsx/CssIcon";
import ReactJsIcon from "../ui/jsx/ReactJsIcon";
import NextJsIcon from "../ui/jsx/NextJsIcon";
import TailwindCssIcon from "../ui/jsx/TailwindCssIcon";
import GSAPIcon from "../ui/jsx/GSAPIcon";
import GitIcon from "../ui/jsx/GitIcon";
import GithubIcon from "../ui/jsx/GithubIcon";
import FigmaIcon from "../ui/jsx/FigmaIcon";
import JavasriptIcon from "../ui/jsx/JavascriptIcon";

const iconSkillsArr = [
  { jsx: <HTML5Icon />, tag: "HTML5" },
  { jsx: <CssIcon />, tag: "CSS" },
  { jsx: <JavasriptIcon />, tag: "Javascript" },
  { jsx: <ReactJsIcon />, tag: "ReactJS" },
  { jsx: <NextJsIcon />, tag: "NextJS" },
  { jsx: <TailwindCssIcon />, tag: "TailwindCSS" },
  { jsx: <GSAPIcon />, tag: "GSAP" },
  { jsx: <GitIcon />, tag: "Git" },
  { jsx: <GithubIcon />, tag: "Github" },
  { jsx: <FigmaIcon />, tag: "Figma" },
];

export const getAllSkillIcons = () => {
  return iconSkillsArr;
};

export const getSpecificSkillsIcon = (iconTagsArr) => {
  const selectedIconSkills = iconTagsArr.map((tag) => {
    return iconSkillsArr.find((icon) => icon.tag === tag);
  });

  return selectedIconSkills;
};
