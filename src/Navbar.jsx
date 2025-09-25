import { useState } from 'react'
import './App.css'
import { SiThealgorithms } from "react-icons/si";

const Navbar = () => {
  return (
    <>
      <div className="navbar h-12 bg-black p-2 font-normal tracking-normal">
        {/* this is navbar */}

        <div className="flex flex-row gap-7">
          <div className="my-logo flex flex-row gap-4">
            <div className=" flex flex-row w-auto">
              <div className="w-9 text-white">
                <SiThealgorithms />
              </div>
              <div className="w-20 text-white">
                <p className="text-center">Algorithms</p>
              </div>
            </div>

            <div className="">
              <div className="relative">
                <div className="absolute pointer-events-none">
                  <svg
                    className="absolute text-slate-400 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-13 caret-blue-900 rounded"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-row w-5/6">
            <div className="basis-1/4">
              <a
                href=""
                className="text-white
               hover:text-blue-600"
              >
                <p className="text-center">Home</p>
              </a>
            </div>
            <div className="basis-1/4">
              <a href="" className="">
                <p className="text-white hover:text-blue-600 text-center ">
                  About
                </p>
              </a>
            </div>
            <div className="basis-1/4">
              <a href="" className="">
                <p className="text-white hover:text-blue-600 text-center ">
                  Algorithms
                </p>
              </a>
            </div>
            <div className="basis-1/4">
              <a href="" className="">
                <p className="text-white hover:text-blue-600 text-center ">
                  Complexity
                </p>
              </a>
            </div>
          </div>

          <div className="w-24 w-1/6">
            <a href="">
              <p className="text-center text-white hover:text-blue-600 text-center">
                Mode
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
