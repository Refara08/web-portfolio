import Navigation from "../nav/Navigation";

const Layout = (props) => {
  const { navItems } = props;

  return (
    <div className="relative">
      <div className={`bg-primary text-txt-prime min-h-screen flex flex-col`}>
        <Navigation items={navItems} />
        <div className="container mx-auto flex-[1] grid items-center overflow-hidden">
          <main className="">{props.children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
