import React from "react";
import { useGlobalContext } from "./context";
import "./menu-toggle.css";

const MenuToggleButton = () => {
  const { isMenuOpen, setIsMenuOpen } = useGlobalContext();

  return (
    <div
      className={`menu-toggle ${isMenuOpen ? "close" : "open"}`}
      onClick={() => {
        setIsMenuOpen(!isMenuOpen);
      }}
    >
      <div className="button-bar top"></div>
      <div className="button-bar bottom"></div>
    </div>
  );
};

export default MenuToggleButton;
