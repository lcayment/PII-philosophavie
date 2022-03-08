import * as React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

interface IMenuProps {
  isMenuOpen: boolean;
}

export const Menu = ({ isMenuOpen }: IMenuProps) => {
  return (
    <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="Menu">
        <h2>
          <Link to="/presentation">Présentation</Link>
        </h2>
        <h2>
          <Link to="/projets">Mes projets</Link>
        </h2>
        <h2>
          <Link to="/actualites">Actualités</Link>
        </h2>
        <h2>
          <Link to="/boutique">Boutique</Link>
        </h2>
        <h2>
          <Link to="/contact">Contact</Link>
        </h2>
      </div>
    </div>
  );
};
