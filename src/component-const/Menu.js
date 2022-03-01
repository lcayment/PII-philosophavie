import * as React from "react";

interface IMenuProps {
  isMenuOpen: boolean;
}

export const Menu = ({ isMenuOpen }: IMenuProps) => {
  return (
    <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`}>
      <h2>Menu</h2>
    </div>
  );
};
