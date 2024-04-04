import React, { useContext } from "react";
import { FooterContext } from "../../context/FooterState";
import { Link } from "react-router-dom";
const Footer = () => {
  const { data, logo } = useContext(FooterContext);
  return (
    <footer className="w-full px-10 py-4 sm:h-20 flex justify-center items-center">
      <article className="w-full flex justify-center md:justify-between items-start sm:items-center gap-4 flex-col sm:flex-row">
        <Link to="/">
          <img src={logo} className="w-24 sm:w-32" alt="" />
        </Link>
        <main>
          <p>Every idea needs a Medium</p>
        </main>
        <main>
          <ul className="flex justify-center items-center gap-4 flex-wrap">
            {data.map((value, index) => (
              <li
                key={index}
                className="text-gray-500 text-xs underline hover:text-gray-800"
              >
                <Link to={value.url}>{value.title}</Link>
              </li>
            ))}
          </ul>
        </main>
      </article>
    </footer>
  );
};

export default Footer;
