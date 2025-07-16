import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo-desktop.png";
import {
  BellIcon,
  MagnifyingGlassIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";

const getNavLinkClass = ({ isActive }) =>
  `px-4 py-1 mt-2 mb-2 ml-2 mr-2 rounded-md transition-colors ${
    isActive ? "bg-[#1A1A1A] text-white" : "hover:bg-gray-800"
  }`;
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full fixed bg-[#1F1F1F]/30 text-white">
      <div className="flex justify-between items-center py-2 pr-2 pl-2 md:pr-20 md:pl-20">
        <div>
          <img src={logo} alt="" className="w-[120px] md:w-[160px]" />
        </div>
        <div className="hidden md:flex bg-[#0F0F0F] border-2 border-[#1A1A1A] rounded-lg text-[#BFBFBF]">
          <NavLink className={getNavLinkClass} to="/">
            Home
          </NavLink>
          <NavLink className={getNavLinkClass} to="/movies-and-shows">
            Movies & Shows
          </NavLink>
          <NavLink className={getNavLinkClass} to="/support">
            Support
          </NavLink>
          <NavLink className={getNavLinkClass} to="/subscription">
            Subscriptions
          </NavLink>
        </div>
        <div className="hidden md:flex gap-5 items-center">
          <MagnifyingGlassIcon style={{ width: "24px", height: "24px" }} />
          <BellIcon style={{ width: "24px", height: "24px" }} />
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <Cross1Icon className="w-6 h-6" />
          ) : (
            <HamburgerMenuIcon className="w-6 h-6" />
          )}
        </button>
      </div>
      {isOpen && (
        <div className="flex flex-col md:hidden bg-[#0F0F0F] border-t border-[#1A1A1A] px-4 pb-4 text-[#BFBFBF]">
          <NavLink
            className={getNavLinkClass}
            to="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={getNavLinkClass}
            to="/movies-and-shows"
            onClick={() => setIsOpen(false)}
          >
            Movies & Shows
          </NavLink>
          <NavLink
            className={getNavLinkClass}
            to="/support"
            onClick={() => setIsOpen(false)}
          >
            Support
          </NavLink>
          <NavLink
            className={getNavLinkClass}
            to="/subscription"
            onClick={() => setIsOpen(false)}
          >
            Subscriptions
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Header;
