import { CSSProperties } from "react";
import searchbarImage from "../../assets/images/searchicons.svg";
import logoImage from "../../assets/images/logo.svg";



export const linksCategories: string[] = [
  "Mężczyźni",
  "Kobiety",
  "Dzieci",
  "Nowości",
  "Sale",
  "Odpowiedzialność",
];


interface NavbarSearchBar {
  searchbarPlaceholder: string;
  searchbarImageAddress: string;
  searchbarImageStyle: CSSProperties;
  searchbarImageAlt: string;
}

export const navbarSearchBarParams: NavbarSearchBar = {
  searchbarImageStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
    backgroundColor: "iherit",
    border: "none",
  },
  searchbarPlaceholder: "Szukaj",
  searchbarImageAddress: searchbarImage,
  searchbarImageAlt: "searchbar-icon",
};

interface NavbarLogoImage {
  logoImageStyle: CSSProperties;
  logoImageAlt: string;
  logoImage: string;
}

export const navbarLogoParams = {
  logoImageStyle: {
    maxHeight: "39px",
  },
  logoImageAlt: "logo",
  logoImage: logoImage,
};
