import PortfolioItem from "./PortfolioItem";

const Portfolio = (props) => {
  const { portfolioList } = props;

  return (
    <div id="portfolios" className="mt-40 px-10">
      <h1 className="text-4xl font-bold mb-12">My Latest Projects</h1>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {portfolioList.map((item, index) => (
          <PortfolioItem key={index} portfolio={item} />
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
