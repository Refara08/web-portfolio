import NavComp from "../ui/nav-comps/nav-comp";

const Navigation = (props) => {
  const { items } = props;

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
