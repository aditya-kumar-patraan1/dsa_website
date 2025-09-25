import { useState } from "react";
import "./App.css";
import { GiBrain } from "react-icons/gi";
import { SiThealgorithms } from "react-icons/si";
import { IoAccessibility } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { FaStaylinked } from "react-icons/fa6";

const GridArea = () => {
  return (
    <>
      <div className="flex flex-col  h-screen">
        <div className="h-1/6 w-full py-4 px-5">
          <p className="font-bold text-black text-5xl">DSA Code Templates</p>
        </div>

        <div className="h-5/6 grid grid-rows-5 grid-cols-3 gap-5 p-3">
          <div className="bg-slate-100 border border-gray-200  row-span-2 rounded-lg  flex flex-col items-center justify-center  transition ease-in-out delay-150 hover:-translate-y-2 hover: hover:bg-gray-200 duration-150">
            {/* middle container */}
            <div className="flex flex-col w-5/6 text-center mx-auto align-middle ">
              <div className="w-auto  p-1">
                <p className="font-bold text-black p-1">
                  Speed Up Problem Solving
                </p>
              </div>
              <div className=" h-auto px-1 align-middle">
                <p className="font-light text-1xl text-left">
                  Pre-written templates for common Data Structures and
                  Algorithms like Trees, Graphs, Dynamic Programming, and more.
                </p>

                <GiBrain className=" text-7xl text-blue-700" />
              </div>
            </div>
          </div>

          <div className="bg-slate-100 border  border-gray-200 row-span-3  flex flex-col items-center justify-center rounded-lg  transition ease-in-out delay-150 hover:-translate-y-2 hover: hover:bg-gray-200 duration-150">
            {/* middle container */}
            <div className="flex flex-col w-5/6 text-center mx-auto align-middle ">
              <div className="w-auto  p-1">
                <p className="font-bold text-black text-2xl p-1">
                  Write Less, Solve More
                </p>
              </div>
              <div className=" h-auto  px-1 flex flex-col justify-center items-center">
                <p className="font-light text-1xl text-left">
                  Highly efficient and tested implementations to tackle
                  competitive programming and coding challenges.
                </p>
                <div><TfiWrite className="text-7xl text-blue-700" /></div>
              </div>
            </div>
          </div>

          <div className="bg-slate-100 border border-gray-200 row-span-2  rounded-lg  flex flex-col items-center justify-center  transition ease-in-out delay-150 hover:-translate-y-2 hover: hover:bg-gray-200 duration-150">
            {/* middle container */}
            <div className="flex flex-col w-5/6 text-center mx-auto align-middle ">
              <div className="w-auto  p-1">
                <p className="font-bold text-black text-2xl p-1">
                  Customizable Algorithms
                </p>
              </div>
              <div className=" h-auto  px-1 flex flex-col justify-center items-center">
                <p className="font-light text-1xl text-left">
                  Easily adapt templates for specific problems without starting
                  from scratch.
                </p>

                <div><SiThealgorithms className=" text-7xl text-blue-700" /></div>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 border border-gray-200 row-span-3  rounded-lg flex flex-col items-center justify-center transition ease-in-out delay-150 hover:-translate-y-2 hover: hover:bg-gray-200 duration-150">
            {/* middle container */}
            <div className="flex flex-col w-5/6 text-center mx-auto align-middle ">
              <div className="w-auto  p-1">
                <p className="font-bold text-black text-2xl p-1">
                Stay Ahead
                </p>
              </div>
              <div className=" h-auto  px-1 flex flex-col justify-center items-center">
                <p className="font-light text-1xl text-left">
                Regular updates ensure your templates match the latest competitive programming trends and techniques.
                </p>

                <FaStaylinked className=" text-7xl text-blue-700" />
              </div>
            </div>
          </div>
          
          <div className="bg-slate-100 row-span-3 border  border-gray-200  rounded-lg  flex flex-col items-center justify-center  transition ease-in-out delay-150 hover:-translate-y-2 hover: hover:bg-gray-200 duration-150">
            {/* middle container */}
            <div className="flex flex-col w-5/6 text-center mx-auto align-middle ">
              <div className="w-auto  p-1">
                <p className="font-bold text-black text-2xl p-1">
                Focus on Logic
                </p>
              </div>
              <div className=" h-auto  px-1 flex flex-col justify-center items-center">
                <p className="font-light text-1xl text-left">
                Spend less time on repetitive coding and more on developing winning strategies.
                </p>

                <GiBrain className=" text-7xl text-blue-700" />
              </div>
            </div>
          </div>

          <div className="bg-slate-100 border border-gray-200 row-span-3  rounded-lg  flex flex-col items-center justify-center  transition ease-in-out delay-150 hover:-translate-y-2 hover: hover:bg-gray-200 duration-150">
            {/* middle container */}
            <div className="flex flex-col w-5/6 text-center mx-auto align-middle">
              <div className="w-auto  p-1">
                <p className="font-bold text-black text-2xl p-1">
                Instant Access
                </p>
              </div>
              <div className=" h-auto  px-1 flex flex-col justify-center items-center">
                <p className="font-light text-1xl text-left">
                  Easily adapt templates for specific problems without starting
                  from scratch.
                </p>

                <IoAccessibility className=" text-7xl text-blue-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridArea;
