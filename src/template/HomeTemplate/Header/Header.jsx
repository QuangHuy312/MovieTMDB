import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LOGO } from "../../../assets/logo";
import useStyle from "./style";

const Header = () => {
  const { navContent, scrollNav } = useStyle();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = (e) => {
      setScrolled(window.scrollY > 250);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={scrolled ? navContent : scrollNav}>
      <div className="container flex justify-between h-16 mx-auto">
        <div className="flex">
          <NavLink to="/" className="flex items-center p-2">
            <img
              src={LOGO}
              alt="logo"
              className="w-full bg-transparent h-full"
            />
          </NavLink>
        </div>

        <div className="flex">
          <ul className="items-stretch hidden space-x-3 lg:flex text-white mt-5">
            <li>
              <NavLink
                to="/home"
                className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movie"
                className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent text-violet-600 border-violet-600"
              >
                MOVIE
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tvshow"
                className="flex items-center -mb-0.5 border-b-2 px-4 border-transparent"
              >
                TV SHOW
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <NavLink to="/login">
            <Button variant="contained" color="primary">
              Login
            </Button>
          </NavLink>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
