import NavComp from "../ui/nav-comps/nav-comp";

const Navigation = (props) => {
  const items = [
    // { placeholder: "Home", link: "/" },
    { placeholder: "Skills", link: "/#skills" },
    { placeholder: "Portfolios", link: "/#portfolios" },
    { placeholder: "About Me", link: "/#about-me" },
    { placeholder: "Contact", link: "/#contact" },
  ];

  return (
    <NavComp
      logo="/assets/exclude-logo-light.png"
      width={175}
      ratio={4.16}
      navItems={items}
    />
  );
};

export default Navigation;
