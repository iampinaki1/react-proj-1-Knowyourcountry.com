import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex font-semibold text-white/30 hover:text-white/80 text-3xl items-center justify-between px-2 bg-white/8 backdrop-blur-md sticky top-0 z-50   ">
      <div className="Logo cursor-pointer text-3xl p-1.5 ">
        <h1>Logo</h1>
      </div>
      <div>
        <ul className="flex items-center gap-2 p-2">
          <NavLink
            className={({ isActive }) => `
   ${isActive ? "hidden" : ""}`}
            to="/"
          >
            {" "}
            <li className="bg-white/8 text-white/30 select-none hover:text-white text-lg backdrop-blur-md rounded-3xl cursor-pointer p-1.5 ">
              Home
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => `
   ${isActive ? "hidden" : ""}`}
            to="/Country"
          >
            <li className="bg-white/8 text-white/30 select-none hover:text-white text-lg backdrop-blur-md rounded-3xl cursor-pointer p-1.5">
              Country
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => `
   ${isActive ? "hidden" : ""}`}
            to="/Contact"
          >
            <li className="bg-white/8 text-white/30 select-none hover:text-white text-lg backdrop-blur-md rounded-3xl cursor-pointer p-1.5">
              Contact
            </li>
          </NavLink>
          <NavLink to="">
            <li className="bg-white/8 text-white/30 select-none hover:text-white text-lg backdrop-blur-md rounded-3xl cursor-pointer p-1.5 ">
              About
            </li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}

export default Header;
