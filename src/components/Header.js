import React from "react";
import logo from "../assets/logo.svg";
import dots from "../assets/dots.svg";
import { Link } from "react-router-dom";

export default function Header({ showSidebar, sidebar }) {
  return (
    <nav className={sidebar ? "header blur" : "header"}>
      <div className="header-container">
        <Link to="/">
          <div>
            <img src={logo} className="logo" alt="logo" />
          </div>
        </Link>
        <div className="nav-right">
          <div
            className={
              sidebar
                ? "main-btn snd-gutter-right disabled"
                : "main-btn snd-gutter-right"
            }
            onClick={() => alert("I do nothing sorry m8 🥲")}
          >
            Connect Wallet
          </div>
          <div className="menu-btn" onClick={showSidebar}>
            <img src={dots} alt="menu-btn" className="menu-dots"></img>
          </div>
        </div>
      </div>
    </nav>
  );
}
