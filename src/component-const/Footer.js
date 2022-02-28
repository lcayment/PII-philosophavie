import React from "react";
import "./Footer.css";
import logotw from "../img/icon-twitter.svg";
import logofb from "../img/icon-fb.svg";
import logolinkedin from "../img/icon-linkedin.svg";
import logoyt from "../img/icon-yt.svg";

function Header() {
  return (
    <div className="Footer">
      <div className="Footer-Links">Admin</div>
      <div className="Footer-Links">Crédits</div>
      <div className="Footer-Links">Contact</div>
      <div className="Links">
        <img src={logotw} className="Footer-logo" alt="logo-tw"></img>
        <img src={logofb} className="Footer-logo" alt="logo-fb"></img>
        <img
          src={logolinkedin}
          className="Footer-logo"
          alt="logo-linkedin"
        ></img>
        <img src={logoyt} className="Footer-logo" alt="logo-yt"></img>
      </div>
    </div>
  );
}

export default Header;
