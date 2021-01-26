import React from "react";
import './navbar.css';

const Navbar: React.FC = () => {

  const linksCategories: string[] = [
    "Mężczyźni",
    "Kobiety",
    "Dzieci",
    "Nowości",
    "Sale",
    "Odpowiedzialność",
  ];

  return (
    <nav id="navbar">
      <ul className="navbar-mmenu">
        {linksCategories.map((e) => {
          return (
            <li key={linksCategories.indexOf(e)} className="navbar-mmenu__item">
              <a href={`${e}`} className={`navbar-mmenu__item-link link__${e}`}>
                {e}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
