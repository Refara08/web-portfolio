import Navigation from "../nav/Navigation";
import Footer from "../footer/Footer";

const Layout = (props) => {
  const { navItems } = props;
  return (
    <>
      <div className={`bg-primary text-txt-prime`}>
        <Navigation items={navItems} />
        <div className="container mx-auto ">
          <main className="flex-[1]">{props.children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
