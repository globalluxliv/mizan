import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-gray-50 dark:bg-gray-800">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col mx-auto">
        <div className="w-full text-4xl font-bold text-center">
          <h1 className="w-full md:w-2/3 mx-auto text-gray-800 dark:text-white">
            Together We Can Change The World
          </h1>
        </div>
        <div className="flex flex-col mt-8">
          <div className="flex flex-row justify-between items-center">
            <div className="">{/* SVG or logo can go here */}</div>
            <NavLink
              to="/about"
              className="hidden md:block cursor-pointer text-gray-400 hover:text-gray-800 dark:hover:text-white uppercase text-sm"
            >
              About
            </NavLink>
            <NavLink
              to="/donate"
              className="hidden md:block cursor-pointer text-gray-400 hover:text-gray-800 dark:hover:text-white uppercase text-sm"
            >
              Donate
            </NavLink>

            <NavLink
              to="/contact"
              className="hidden md:block cursor-pointer text-gray-400 hover:text-gray-800 dark:hover:text-white uppercase text-sm"
            >
              Contact
            </NavLink>
            <div className="flex flex-row space-x-4 items-center justify-between">
              <a href="https://www.facebook.com">{/* Facebook SVG */}</a>
              <a href="https://www.instagram.com">{/* Instagram SVG */}</a>
              <a href="https://www.youtube.com/channel/UCjtCbnkIaiCJgj13sEZ9iqw">
                {/* YouTube SVG */}
              </a>
            </div>
          </div>
          <hr className="border-gray-600 mt-6" />
          <p className="w-full text-center mt-4 text-gray-600 text-xs">
            Copyright © 2024 Mizan Humanity Inc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
