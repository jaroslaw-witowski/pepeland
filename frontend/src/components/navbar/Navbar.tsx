import React, { CSSProperties } from "react";
import SVGLoader from "./SVGLoader";
import Searchbar from "./Searchbar";
import "./navbar.css";
import logo from "../../assets/images/logo.svg";
import UserMenu from "./UserMenu";

interface NavbarProps {}

const logoStyle: CSSProperties = {
  maxHeight: "39px",
};

const Navbar: React.FC<NavbarProps> = () => {
  const linksCategories: string[] = [
    "Mężczyźni",
    "Kobiety",
    "Dzieci",
    "Nowości",
    "Sale",
    "Odpowiedzialność",
  ];

  return (
    <>
        <UserMenu />
        <nav id="navbar">
        <SVGLoader imageAdress={logo} alt="Logo" style={logoStyle} />
        <ul className="navbar-mmenu">
          {linksCategories.map((e) => {
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
        <Searchbar />
      </nav>
    </>
  );
};

export default Navbar;
