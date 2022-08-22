import HeroSocials from "../hero/HeroSocials";

const Footer = () => {
  return (
    <div
      id="contact"
      className="grid grid-cols-2 pt-12 pb-20 px-56 bg-dark-prime"
    >
      <div className="pl-40">
        <div className="mb-12">
          <h3 className="uppercase tracking-widest mb-2">Contact</h3>
          <a
            href="mailto:refara.08@gmail.com"
            className="border-b-2 border-white pb-2 hover:border-secondary hover:pb-1 transition-all duration-300"
          >
            refara.08@gmail.com
          </a>
        </div>
        <div>
          <h3 className="uppercase tracking-widest mb-2">socials</h3>
          <HeroSocials />
        </div>
      </div>
      <div>
        <h2 className="text-5xl font-bold mb-8">Let&apos;s Talk!</h2>
        <form>
          <div className="input-group">
            <label htmlFor="name">Name & Company</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Andy from CompanyA"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="andy@companya.com"
            />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="50"
              rows="5"
              placeholder="we need help to remake our company website"
            />
          </div>
          <button className="font-bold tracking-wider bg-dark-prime hover:bg-white text-white hover:text-dark-prime border-[0.5px] border-white hover:border-opacity-0 py-2 px-6 mt-4 rounded-full transition-all duration-300">
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
