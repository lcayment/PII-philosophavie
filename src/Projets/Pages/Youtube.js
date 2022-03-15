import React from "react";
import "../Projets.css";
import qrcodeyt from "../../img/qrcode-youtube.svg";
import imgvideo from "../../img/imgvideo.png";

import { Link } from "react-router-dom";

function Projets() {
  return (
    <div className="Projets">
      <h1 className="title">Youtube</h1>
      <div className="article">
        <div className="flashcode">
          <img src={qrcodeyt} className="logo-qrcode" alt="qrcode-yt"></img>
          <p>Flash moi pour te rendre sur la chaîne !</p>
        </div>
        <div>
          <img
            src={imgvideo}
            className="imgvideotmp"
            alt="image-video-tmp"
          ></img>
        </div>
        <div>
          Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
          cillum dolor. Voluptate exercitation incididunt aliquip deserunt
          reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure.
          Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation
          incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem
          mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
          Voluptate exercitation incididunt aliquip deserunt reprehenderit elit
          laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
          ullamco cillum dolor. Voluptate exercitation incididunt aliquip
          deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat
          irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate
          exercitation incididunt aliquip deserunt reprehenderit elit laborum.
        </div>
      </div>
    </div>
  );
}

export default Projets;
