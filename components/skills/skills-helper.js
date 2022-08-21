import HTML5Icon from "../ui/jsx/HTMLIcon";
import CssIcon from "../ui/jsx/CssIcon";
import ReactJsIcon from "../ui/jsx/ReactJsIcon";
import NextJsIcon from "../ui/jsx/NextJsIcon";
import TailwindCssIcon from "../ui/jsx/TailwindCssIcon";
import GSAPIcon from "../ui/jsx/GSAPIcon";
import FigmaIcon from "../ui/jsx/FigmaIcon";

const iconSkillsArr = [
  { jsx: <HTML5Icon />, tag: "HTML5" },
  { jsx: <CssIcon />, tag: "CSS" },
  { jsx: <ReactJsIcon />, tag: "ReactJS" },
  { jsx: <NextJsIcon />, tag: "NextJS" },
  { jsx: <TailwindCssIcon />, tag: "TailwindCSS" },
  { jsx: <GSAPIcon />, tag: "GSAP" },
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
