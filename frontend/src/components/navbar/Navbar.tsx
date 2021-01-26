import React from "react";
import './navbar.css';

interface NavbarProps {

}

const Navbar: React.FC <NavbarProps> = () => {

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
                {e.toUpperCase()}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
