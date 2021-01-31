import React from "react";
import Navbar from "./navbar/Navbar";
import SVGLoader from "./SVGLoader";
import "./header.css";
import {
  linksCategories,
  navbarLogoParams,
  navbarSearchBarParams,
} from "./settings";
import Searchbar from "./searchbar/Searchbar";

const HeaderMain: React.FC = () => {
  const {
    searchbarPlaceholder,
    searchbarImageAddress,
    searchbarImageStyle,
    searchbarImageAlt
  } = navbarSearchBarParams;

  const { logoImageStyle, logoImageAlt, logoImage } = navbarLogoParams;

  return (
    <header id="header">
      <SVGLoader
        style={logoImageStyle}
        imageAdress={logoImage}
        alt={logoImageAlt}
      />
      <Navbar linksCategories={linksCategories} />
      <Searchbar
        searchbarPlaceholder={searchbarPlaceholder}
        searchbarImageAddress={searchbarImageAddress}
        searchbarImageStyle={searchbarImageStyle}
        searchbarImageAlt={searchbarImageAlt}
      />
    </header>
  );
};

export default HeaderMain;
