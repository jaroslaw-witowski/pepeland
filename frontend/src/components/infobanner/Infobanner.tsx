import React, { useState } from "react";
import "./infobanner.css";

const Infobanner: React.FC = () => {
  const [InfoBannerVisibility, setInfoBannerVisibility] = useState(true);

  let bannerText: string = "sale - najwyższe rabaty";
  const bannerQuantity: number = 4;

  let bannerInput: string[] = [];

  for (let i = 0; i < bannerQuantity; i++) {
    bannerInput.push(bannerText.toUpperCase()+ '\u00A0\u00A0\u00A0\u00A0\u00A0');
  }

  const closeInfoBannerHandler = () => {
    setInfoBannerVisibility(false);
  };


  return (
    <>
      {InfoBannerVisibility && (
        <div id="infobanner">
          <div className="infobanner-textSection">
            <a href="./sale">{bannerInput}</a>
          </div>
          <div className="infobanner-linkSection">
            <button className="infobanner-button-link">ZOBACZ</button>
          </div>
          <div className="infobanner-hideSection">
            <button
              onClick={closeInfoBannerHandler}
              className="infobanner-button-close"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Infobanner;
