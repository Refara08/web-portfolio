import React from "react";
import Header from "./_components/Header";

const CoolHamburgerMenuLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default CoolHamburgerMenuLayout;
