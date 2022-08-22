import ServicesCard from "./ServicesCard";
import DesigningIcon from "../ui/jsx/Designing";
import DevelopmentIcon from "../ui/jsx/Development";

const services = [
  {
    jsx: <DesigningIcon size="3em" />,
    service: "Web Designing",
    desc: "We will find the best solution for your product or service. Then, We'll design the best design depending on the design theme of your product or service",
  },
  {
    jsx: <DevelopmentIcon size="3em" />,
    service: "Front end Development",
    desc: "After Designing process is done, we will convert the web design into a functional website that will be compatible with various types of browsers and devices",
  },
];

const Services = () => {
  return (
    <div id={"services"} className="my-40 px-10">
      <h1 className="text-4xl font-bold mb-12 uppercase tracking-widest">
        What can I do for you
      </h1>
      <div className={`grid grid-cols-${services.length} gap-8`}>
        {services.map((item, index) => (
          <ServicesCard key={index} serviceItem={item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
