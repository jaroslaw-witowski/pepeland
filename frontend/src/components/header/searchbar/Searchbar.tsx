import React, { CSSProperties } from "react";
import "./searchbar.css";
import SVGLoader from "../SVGLoader";


interface SearchbarProps {
  searchbarPlaceholder: string;
  searchbarImageAddress: string;
  searchbarImageStyle?: CSSProperties;
  searchbarImageAlt: string
}

const Searchbar: React.FC<SearchbarProps> = ({
  searchbarPlaceholder,
  searchbarImageAddress,
  searchbarImageStyle,
  searchbarImageAlt
}) => {
  return (
    <>
    <form id="navbar-searchbar">
      <input
        className="navbar-searchbar-input"
        type="text"
        placeholder={searchbarPlaceholder}
      ></input>
      <button className="navbar-searchbar-button" type="submit">
        <SVGLoader
          imageAdress={searchbarImageAddress}
          alt={searchbarImageAlt}
          style={searchbarImageStyle}
        />
      </button>
    </form>
    </>
  );
};

export default Searchbar;
