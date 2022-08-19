import Hero from "../components/hero/Hero";
import Portfolio from "../components/portfolio/Portfolio";

const dummyPortfolio = [
  {
    image: "hungray.png",
    title: "Hungray Landing Page",
    desc: "A restaurant landing page, with an online ordering web app feature",
    tags: ["HTML5", "CSS", "ReactJS", "NextJS", "TailwindCSS", "GSAP"],
    slug: "hungray-landing-page",
  },
  {
    image: "invitia.png",
    title: "Invitia Landing Page",
    desc: "An online wedding invitation service company landing page",
    tags: ["HTML5", "CSS", "TailwindCSS"],
    slug: "invitia-landing-page",
  },
  {
    image: "sunnyside.png",
    title: "Sunnyside Landing Page",
    desc: "A creative services company Landing web page",
    tags: ["HTML5", "CSS", "ReactJS", "TailwindCSS", "GSAP"],
    slug: "sunnyside-landing-page",
  },
  {
    image: "weatherapp.png",
    title: "Weather Web App",
    desc: "A Weather website application using openweathermap API, and unsplash API",
    tags: ["HTML5", "CSS"],
    slug: "weatherwebapp-landing-page",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <Portfolio portfolioList={dummyPortfolio} />
      {/* Projects */}

      <div className="scroller h-48" />
      {/* Features (ideas-design-code) */}

      {/* Aboutme Page */}

      {/* Detailed Project page */}
    </div>
  );
}
