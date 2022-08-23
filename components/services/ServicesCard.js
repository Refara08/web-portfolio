const ServicesCard = (props) => {
  const { serviceItem } = props;
  return (
    <div className="flex flex-col sm:grid grid-cols-6 bg-dark-prime p-6 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-lg">
      <div className="place-self-center mb-4">{serviceItem.jsx}</div>
      <div className="col-span-5">
        <h3 className="text-2xl font-semibold mb-3">{serviceItem.service}</h3>
        <p>{serviceItem.desc}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
