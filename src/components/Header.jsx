import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex font-semibold text-white/30 hover:text-white/80 text-3xl items-center justify-between px-2 bg-white/8 backdrop-blur-md sticky top-0 z-50   ">
      <div className="Logo cursor-pointer text-3xl p-1.5 ">
        <h1>
          KnowYourAnime<span className="text-pink-400">.Com</span>
        </h1>
      </div>
      <div>
        <ul className="flex items-center gap-2 p-2">
          <NavLink
            className={({ isActive }) => `
   ${isActive ? "text-white font-bold" : "text-white/30 hover:text-white"}`}
            to="/"
          >
            <li className="bg-white/8  select-none  text-lg backdrop-blur-md rounded-3xl cursor-pointer p-1.5 ">
              Home
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => `
   ${isActive ? "text-white font-bold" : "text-white/30 hover:text-white"}`}
            to="/Ratings"
          >
            <li className="bg-white/8  select-none  text-lg backdrop-blur-md rounded-3xl cursor-pointer p-1.5">
              Rating
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => `
   ${isActive ? "text-white font-bold" : "text-white/30 hover:text-white"}`}
            to="/Contact"
          >
            <li className="bg-white/8  select-none  text-lg backdrop-blur-md rounded-3xl cursor-pointer p-1.5">
              Rate
            </li>
          </NavLink>
          <NavLink
            className={({ isActive }) => `
   ${isActive ? "text-white font-bold" : "text-white/30 hover:text-white"}`}
            to="/Quizz"
          >
            <li className="bg-white/8 text-white/30 select-none hover:text-white text-lg backdrop-blur-md rounded-3xl cursor-pointer p-1.5 ">
              Quizz
            </li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}

export default Header;
