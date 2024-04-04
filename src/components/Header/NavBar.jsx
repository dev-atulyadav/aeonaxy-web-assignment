import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-6">
        <li className="hidden sm:block hover:underline">
          <Link to="/">Sign in</Link>
        </li>
        <li className="py-1.5 px-5 text-center rounded-full bg-black text-white hover:underline">
          <Link to="/">Start writing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
