import React, { CSSProperties } from "react";
import SVGLoader from "../SVGLoader";
import "./usermenu.css";
import flagOfPoland from "../../../assets/images/flag_of_poland.svg";

const languageMenuFlagStyle: CSSProperties = {
    height: '10px'
}

const UserMenu: React.FC = () => {
  return (
      <menu className="navbar-usermenu-menu">
        
        <a href="./" className="navbar-usermenu__item link__language">
          PL
          <SVGLoader imageAdress={flagOfPoland} alt="flag_of_Poland" style={languageMenuFlagStyle}/>
        </a>
        <a href="./" className="navbar-usermenu__item link__login">
          Zaloguj
        </a>
        <a href="./" className="navbar-usermenu__item link__favourites">
          Schowek
        </a>
        <a href="./" className="navbar-usermenu__item link__stores-map">
          Salony
        </a>
        <a href="./" className="navbar-usermenu__item link__shoppingCart">
          Koszyk
        </a>
      </menu>
    // </div>
  );
};

export default UserMenu;
