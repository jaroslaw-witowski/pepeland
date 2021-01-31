import React from "react";
import "./navbar.css";

interface NavbarProps {
  linksCategories: string[],
}

const Navbar: React.FC <NavbarProps> = ({linksCategories}) => {

  return <nav id="navbar">
        <ul className="navbar-mmenu">
          {linksCategories.map((e: string) => {
            return (
              <li
                key={linksCategories.indexOf(e)}
                className="navbar-mmenu__item"
              >
                <a
                  href={`${e}`}
                  className={`navbar-mmenu__item-link link__${e}`}
                >
                  {e.toUpperCase()}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
};

export default Navbar;
