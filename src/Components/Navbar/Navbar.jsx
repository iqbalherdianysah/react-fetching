import React from "react";
import NavbarTitle from "./NavbarTitle";
import NavList from "./NavList";

const Navbar = () => {
  return (
    <>
      <div className="container flex justify-between">
        <NavbarTitle />
        <NavList />
      </div>
    </>
  );
};

export default Navbar;
