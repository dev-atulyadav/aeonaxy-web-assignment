import React from "react";
import Logo from "../../assets/logo.svg";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-20 w-full p-4 md:px-16 bg-[#FF4500] flex justify-between items-center border-b border-black fixed top-0 z-10">
      <Link to="/" className="flex justify-center items-center">
        <img src={Logo} className="h-44" alt="" />
      </Link>
      <NavBar />
    </header>
  );
};

export default Header;
