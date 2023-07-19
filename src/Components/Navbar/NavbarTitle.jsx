import React from "react";
import Logo from "./../../assets/images/Logo1.png";

const NavbarTitle = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <img className="h-10 mt-3 ml-20" src={Logo} alt="" />
        <h1 className="text-2xl font-bold my-4 ml-8">Library</h1>
      </div>
    </>
  );
};

export default NavbarTitle;
