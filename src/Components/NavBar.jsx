import React from "react";
import { BsSearch, BsFillCaretDownFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

const NavBar = () => {
  return (
    <>
      <div className="flex  h-20 bg-premeire-700   ">
        <div className="flex text-white ml-8 mt-5 font-semibold cursor-pointer text-xl">
          <h2>book</h2>
          <img
            className="object-fill h-8 w-8"
            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
            alt="logo"
          />
          <h2>show</h2>
        </div>
        <div className=" h-1/2 w-5/12 bg-white mt-4 rounded flex items-center gap-3 ml-8">
          <BsSearch className="text-slate-600 ml-3" />
          <input
            className="w-4/5 h-1/2 "
            type="search"
            placeholder="Search for Movies,Events,Plays,Sports and Activies"
          />
        </div>
        <div className="flex">
          <div className="flex text-white">
            <h2>Kolkata</h2>
            <BsFillCaretDownFill />
          </div>
          <button>Sign in</button>
          <BiMenu />
        </div>
      </div>
    </>
  );
};

export default NavBar;
