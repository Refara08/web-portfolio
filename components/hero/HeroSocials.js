import LinkedIn from "../ui/jsx/LinkedIn";
import Github from "../ui/jsx/Github";
import Twitter from "../ui/jsx/Twitter";
import Codepen from "../ui/jsx/Codepen";

const HeroSocials = (props) => {
  const sizeIcon = "1.75rem";

  return (
    <div className="hidden lg:flex gap-4 socials">
      <a
        target="_blank"
        href="https://twitter.com/GRefantero"
        rel="noopener noreferrer"
      >
        <Twitter size={sizeIcon} />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/gema-refantero-b0141a231/"
        rel="noopener noreferrer"
      >
        <LinkedIn size={sizeIcon} />
      </a>
      <a
        target="_blank"
        href="https://github.com/Refara08"
        rel="noopener noreferrer"
      >
        <Github size={sizeIcon} />
      </a>
      <a
        target="_blank"
        href="https://codepen.io/refantero"
        rel="noopener noreferrer"
      >
        <Codepen size={sizeIcon} />
      </a>
    </div>
  );
};

export default HeroSocials;
