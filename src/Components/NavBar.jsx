import React from "react";
import { Link } from "react-router-dom";
import {
  BsSearch,
  BsFillCaretDownFill,
  BsFillCaretRightFill,
} from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

function NavLg() {
  return (
    <>
      <div>
        <div className="flex  h-20 bg-darkBackground-700   ">
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
              className="w-full focus:outline-none h-1/2 "
              type="search"
              placeholder="Search for Movies,Events,Plays,Sports and Activies"
            />
          </div>
          <div className="flex  ml-60 mt-5">
            <div className="flex cursor-pointer text-white">
              <h2>Kolkata</h2>
              <BsFillCaretDownFill className="ml-2 mt-1" />
            </div>
            <Link
              to="/plays"
              className="bg-blue-400 hover:bg-blue-500 h-8 ml-3 p-1 text-center w-20 text-white rounded"
            >
              Plays
            </Link>
            <div className="flex  ml-5 mr-8 ">
              <button className="bg-red-500 hover:bg-red-600 h-8  w-20 text-white rounded">
                Sign in
              </button>
              <BiMenu className="text-white cursor-pointer ml-2  text-3xl" />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-between bg-darkBackground-800 h-10">
        <div className="flex gap-6 ml-5 mt-2 cursor-pointer text-slate-300 ">
          <p className="hover:text-white">Movies</p>
          <p className="hover:text-white">Stream</p>
          <p className="hover:text-white">Events</p>
          <p className="hover:text-white">Plays</p>
          <p className="hover:text-white">Sports</p>
          <p className="hover:text-white">Activities</p>
          <p className="hover:text-white">Buzz</p>
        </div>

        <div className="flex gap-6 gap-6 mr-5 mt-2 cursor-pointer text-slate-300">
          <p className="hover:text-white">ListYourShow</p>
          <p className="hover:text-white">Corporates</p>
          <p className="hover:text-white">Offers</p>
          <p className="hover:text-white">Gift Cards</p>
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <div>
      <div className="flex  h-20 bg-darkBackground-700   ">
        <div className="flex text-white ml-5 mt-5 font-semibold cursor-pointer text-xl">
          <h2>book</h2>
          <img
            className="object-fill h-8 w-8"
            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
            alt="logo"
          />
          <h2>show</h2>
        </div>
        <div className=" h-1/2 w-1/2 mr-5 bg-white mt-4 rounded flex items-center gap-3 ml-5 ">
          <BsSearch className="text-slate-600 ml-3" />
          <input
            className="w-full focus:outline-none h-1/2 "
            type="search"
            placeholder="Search for Movies,Events,Plays,Sports and Activies"
          />
        </div>
        <div className="flex   mt-5">
          <div className="flex cursor-pointer text-white">
            <h2>Kolkata</h2>
            <BsFillCaretDownFill className="ml-2 mt-1" />
          </div>
          <div className="flex  ml-5 mr-8 ">
            <button className="bg-red-500 hover:bg-red-600 h-8  w-20 text-white rounded">
              Sign in
            </button>
            <BiMenu className="text-white cursor-pointer ml-2  text-3xl" />
          </div>
        </div>
      </div>
      <div></div>
      <div className=" flex gap-x-2 justify-between bg-darkBackground-800 text-sm h-10">
        <div className="flex gap-6 ml-5 mt-2 cursor-pointer text-slate-300 ">
          <p className="hover:text-white">Movies</p>
          <p className="hover:text-white">Stream</p>
          <p className="hover:text-white">Events</p>
          <p className="hover:text-white">Plays</p>
          <p className="hover:text-white">Sports</p>
          <p className="hover:text-white">Activities</p>
          <p className="hover:text-white">Buzz</p>
        </div>

        <div className="flex gap-5 mr-4 mt-2 cursor-pointer text-slate-300">
          <p className="hover:text-white">ListYourShow</p>
          <p className="hover:text-white">Corporates</p>
          <p className="hover:text-white">Offers</p>
          <p className="hover:text-white">Gift Cards</p>
        </div>
      </div>
    </div>
  );
}

function NavSm() {
  return (
    <div className="flex justify-between  h-20 bg-darkBackground-700  ">
      <div className=" text-white w-40 ml-4 mt-4 cursor-pointer ">
        <h2 className="font-semibold text-xl">It all Starts here</h2>
        <div className="flex">
          <p>Kolkata</p>
          <BsFillCaretRightFill className="mt-1 ml-1" />
        </div>
      </div>

      <div className="flex   mt-5">
        <div className="flex  ml-5 mr-8 ">
          <button className="bg-red-500 hover:bg-red-600 h-8  w-20 text-white rounded-md">
            Use App
          </button>
          <BsSearch className="text-white cursor-pointer ml-4 mt-1  text-xl" />
        </div>
      </div>
    </div>
  );
}

const NavBar = () => {
  return (
    <>
      <nav className="hidden md:hidden lg:block">
        <NavLg />
      </nav>

      <nav className="hidden lg:hidden md:block">
        <NavMd />
      </nav>

      <nav className="md:hidden lg:hidden">
        <NavSm />
      </nav>
    </>
  );
};

export default NavBar;
