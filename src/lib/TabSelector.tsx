import * as React from "react";
import "../Presentation/Presentation.css";

export const TabSelector = ({
  isActive,
  children,
  onClick,
}: {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    className={`tabs ${isActive ? "tabs-active" : "tabs-not-active"}`}
    onClick={onClick}
  >
    {children}
  </button>
);
