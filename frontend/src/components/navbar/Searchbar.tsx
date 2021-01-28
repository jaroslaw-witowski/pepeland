import React from "react";
import "./searchbar.css";
import SVGLoader from "./SVGLoader";
import searchIcon from "../../assets/images/searchicons.svg";

const searchIconStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "60%",
  backgroundColor: "iherit",
  border: "none",
};

const Searchbar: React.FC = () => {
  return (
      <form id="navbar-searchbar">
        <input
          className="navbar-searchbar-input"
          type="text"
          placeholder="Szukaj"
        ></input>
        <button className="navbar-searchbar-button" type="submit">
          <SVGLoader
            imageAdress={searchIcon}
            alt="searchbar-icon"
            style={searchIconStyle}
          />
        </button>
      </form>
  );
};

export default Searchbar;
