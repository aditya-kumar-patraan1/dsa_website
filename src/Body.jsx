import { useState } from "react";
import "./App.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaHandPeace } from "react-icons/fa";

const Body = () => {
  return (
    <>
      <div className="h-screen w-full p-6">
        <div className="mx-auto h-full w-4/6  flex flex-col">
          {/* body main */}

          <div className="p-9 mx-auto">
            <div>
              <div className="mx-auto">
                <button className="rounded-lg bg-indigo-500 text-white p-1 flex items-center gap-4">
                  <span className="p-1 rounded-md">Contact us</span>
                  <span className="p-2">
                    <FaArrowAltCircleRight />
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="text-center p-4">
            <div className="flex items-center justify-center gap-2">
              <span className="flex items-center gap-2">
                <FaHandPeace className="text-2xl text-indigo-600" />
                Hii, I am Aditya. I made this website for revision purposes
                where I accumulated all my algorithms and DSA codes. It is also
                for practicing things, and I will keep updating this website in
                the future.
              </span>
            </div>
          </div>

          <div className="p-6 text-center text-black font-medium tracking-wide">
            <p className="text-7xl py-5">
              All Algorithms and Data Structures !
            </p>
            <p className="font-light text-gray-500">
              Effortless DSA Algorithm Storage and Revision Template –
              Simplifying Learning, One Step at a Time!
            </p>
          </div>

          <div className="flex flex-row items-center justify-center">
            <div className="w-auto flex flex-row gap-9">
              <button className="py-3 px-7 rounded-lg outline outline-2 outline-offset-2 text-pink-400 bg-pink-200">
                About
              </button>
              <button className="py-3 px-7 rounded-lg outline outline-2 outline-offset-2 text-green-500">
                Refer Docs
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Body;
