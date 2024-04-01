import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-6">
        <li className="hidden sm:block">Sign in</li>
        <li className="py-1.5 px-5 text-center rounded-full bg-black text-white">
          Start writing
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
