import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

import RoundedArrowLeft from "../ui/jsx/rounded-arrow-left";
import RoundedArrowRight from "../ui/jsx/rounded-arrow-right";
import SkillIconsTags from "../skills/SkillIconsTags";
import FullscreenIcon from "../ui/jsx/fullscreenIcon";
import PortfolioImgModal from "./PortfolioImgModal";
import ArrowLeft from "../ui/jsx/arrow-left";
import ArrowRight from "../ui/jsx/arrow-right";

const PorfolioDetails = ({ post, nextPost, previousPost }) => {
  const { title, skills, imageContent, description, webLink, codeLink } = post;

  const [imageIndex, setImageIndex] = useState(0);
  const loadedImage = imageContent[imageIndex];

  const increaseIndexHandler = () => {
    if (imageIndex !== imageContent.length - 1) {
      setImageIndex((prev) => prev + 1);
    } else {
      setImageIndex(0);
    }
  };

  const decreaseIndexHandler = () => {
    if (imageIndex !== 0) {
      setImageIndex((prev) => prev - 1);
    } else {
      setImageIndex(imageContent.length - 1);
    }
  };

  //animate image transition
  const imgRef = useRef();

  useEffect(() => {
    gsap.fromTo(imgRef.current, { opacity: 0 }, { opacity: 1 });
  }, [imageIndex]);

  //open modal image fullscreen
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //components==============================================================
  const PorfolioDetailsImages = (
    <div className="bg-black shadow-xl fixed top-0 left-0 sm:relative w-full select-none overflow-hidden z-10 lg:z-0 lg:rounded-3xl">
      {imageContent.length > 1 && (
        <RoundedArrowLeft
          size="2.2rem"
          className="absolute left-3 top-1/2 hover:scale-125 transition duration-300 origin-right mix-blend-difference cursor-pointer z-10"
          onClick={decreaseIndexHandler}
        />
      )}
      <img
        ref={imgRef}
        src={loadedImage.url}
        alt={title}
        width={loadedImage.width}
        height={loadedImage.height}
        className=""
      />
      {imageContent.length > 1 && (
        <RoundedArrowRight
          size="2.2rem"
          className="absolute right-3 top-1/2 hover:scale-125 transition duration-300 origin-left mix-blend-difference cursor-pointer z-10"
          onClick={increaseIndexHandler}
        />
      )}
      <FullscreenIcon
        onClick={() => setModalIsOpen(true)}
        size="1.5rem"
        className="absolute bottom-5 right-5 cursor-pointer hidden md:block mix-blend-difference"
      />
    </div>
  );

  const PortfolioDetailsButtons = (
    <div className="lg:col-span-3 flex justify-start items-center gap-4 flex-wrap mt-12">
      <a
        className="py-3 px-7 bg-black rounded-full text-white hover:bg-green-200 hover:text-black hover:shadow-xl transition duration-300"
        href={webLink}
        target={"_blank"}
        rel="noopener noreferrer"
      >
        Visit Website
      </a>
      {codeLink && (
        <a
          className="py-3 px-7 bg-white rounded-full text-black hover:bg-green-900 hover:text-white hover:shadow-xl transition duration-300"
          href={codeLink}
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Review Code
        </a>
      )}
    </div>
  );

  const PortfolioDetialsIcons = (
    <div className="flex flex-row flex-wrap w-full mt-12 justify-start gap-x-8 gap-y-12">
      {skills.map((skill) => (
        <SkillIconsTags
          skill={skill}
          key={skill.id}
          iconOnly={true}
          iconSize="40px"
        />
      ))}
    </div>
  );

  const PortfolioDetailsContent = (
    <div className="lg:col-span-3 px-4 lg:px-6">
      <h1 className="text-2xl lg:text-[2.5vw] lg:leading-[2.5vw] font-bold mb-6 lg:mb-12">
        {title}
      </h1>
      <div
        className="details-page-content"
        dangerouslySetInnerHTML={{ __html: description.html }}
      />
    </div>
  );

  const PortfolioDetailsNextPreviousPost = (
    <div className="w-full grid grid-cols-2 md:flex md:justify-between px-8 lg:px-0 pt-24 mt-6 ">
      <Link href={`/portfolios/${previousPost.slug}`} legacyBehavior>
        <a className=" flex flex-col md:flex-row items-start md:items-center gap-4 p-4 hover:bg-white hover:text-black transition duration-300 hover:translate-x-5">
          <ArrowLeft size="2.2rem" />
          <div className="flex flex-col">
            <span>go to previous post</span>
            <strong className="text-lg">{previousPost.title}</strong>
          </div>
        </a>
      </Link>
      <Link href={`/portfolios/${nextPost.slug}`} legacyBehavior>
        <a className=" flex flex-col md:flex-row-reverse items-end md:items-center gap-4 p-4 hover:bg-white hover:text-black transition duration-300 hover:-translate-x-5">
          <ArrowRight size="2.2rem" />
          <div className="flex flex-col justify-end text-right">
            <span>go to next post</span>
            <strong className="text-lg">{nextPost.title}</strong>
          </div>
        </a>
      </Link>
    </div>
  );

  return (
    <div className="relative h-full flex flex-col justify-start gap-0 pt-[50vw] sm:pt-0">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-7 gap-8 items-start px-8">
        <div className="lg:col-span-4 ">
          <>{PorfolioDetailsImages}</>
          <div className="flex flex-col gap-0 items-start px-8">
            <>{PortfolioDetailsButtons}</>
            <>{PortfolioDetialsIcons}</>
          </div>
        </div>
        <>{PortfolioDetailsContent}</>
      </div>
      <>{PortfolioDetailsNextPreviousPost}</>
      {modalIsOpen && (
        <PortfolioImgModal
          onClose={() => setModalIsOpen(false)}
          imageContent={imageContent}
          imageIndex={imageIndex}
          increaseIndexHandler={increaseIndexHandler}
          decreaseIndexHandler={decreaseIndexHandler}
          title={title}
        />
      )}
    </div>
  );
};

export default PorfolioDetails;
