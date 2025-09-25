import { useState } from "react";
import "./App.css";
import { SiThealgorithms } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { GoInfinity } from "react-icons/go";
import JohnImage from "./asset/JohnImage.png";
import VikasBhai from "./asset/VikasBhai.png";
import Boy3 from "./asset/Boy3.png";

const MoreFeedbacks = () => {
  return (
    <>
      <div className="h-screen p-10">
        <div className=" h-auto w-auto m-4 grid grid-cols-3 gap-5">
          <div className="bg-slate-100 w-90 h-auto rounded-lg p-7 border-2 border-gray-200  hover:-translate-y-3 hover:bg-gray-200  duration-150">
            <div className=" h-auto p-3 ">
              <div className="text-2xl px-1 hover:bg-slate-100 py-2 rounded-full align-middle  h-10 w-10">
                <FaCode className="m-auto  text-blue-700" />
              </div>
            </div>
            <div>
              <p className="p-5 font-bold text-2xl text-black">
                Error free Template
              </p>
              <hr />

              <p className="text-1xl font-light text-black py-7 px-5 leading-loose">
                "The templates provided are incredibly reliable and error-free.
                They saved me hours of debugging during contests. I appreciate
                the attention to detail and the clear documentation that comes
                with each template!"
              </p>
              <div className="flex flex-row h-auto p-3 w-full  items-center gap-3">
                <div className="flex flex-row items-center ">
                  <div
                    className="h-14 w-14 bg-center m-3 bg-contain rounded-full bg-no-repeat border-1 border-black"
                    style={{ backgroundImage: `url(${JohnImage})` }}
                  ></div>
                </div>
                <div className="items-center justify-center flex flex-col h-14 p-2">
                  <p className="font-semibold text-1xl text-black ">
                    John Kim
                  </p>
                  <p className="font-light text-1xl text-gray-400 hover:underline underline-offset-4">
                    AI researcher
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 w-90 h-auto rounded-lg p-7 border-2 border-gray-200   hover:-translate-y-3 hover:bg-gray-200  duration-150">
            <div className=" h-auto p-3 ">
              <div className="text-2xl px-1 py-2 rounded-full align-middle hover:bg-slate-100 h-10 w-10">
                <DiCodeigniter className="m-auto text-blue-700 " />
              </div>
            </div>
            <div>
              <p className=" p-5 font-bold text-2xl text-black">
                Versatility for DSA
              </p>
              <hr />

              <p className="text-1xl font-light text-black  py-7 px-5 leading-loose">
                "The templates are versatile and cover a wide range of DSA
                topics, from basic data structures to advanced algorithms.
                They’ve boosted my preparation for coding interviews and
                contests significantly."
              </p>
              <div className="flex flex-row h-auto p-3 w-full items-center gap-3">
                <div className="flex flex-row items-center ">
                  <div
                    className="h-14 w-14 bg-center m-3 bg-contain rounded-full bg-no-repeat bg-gray-100 border-1 border-black"
                    style={{ backgroundImage: `url(${VikasBhai})` }}
                  ></div>
                </div>
                <div className="items-center justify-center flex flex-col h-14 p-2">
                  <p className="font-semibold text-1xl text-black ">
                    Vikas Gulia
                  </p>
                  <p className="font-light text-1xl text-gray-400  hover:underline underline-offset-4">
                    Intermediate DSA learner
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-100 w-90 h-auto rounded-lg p-7 border-2 border-gray-200   hover:-translate-y-3 hover:bg-gray-200  duration-150">
            <div className="h-auto p-3 ">
              <div className="text-2xl px-1 py-2 rounded-full hover:bg-slate-100 align-middle  h-10 w-10">
                <GoInfinity className="m-auto text-blue-700" />
              </div>
            </div>
            <div>
              <p className=" p-5 font-bold text-2xl text-black">
                Time-Saving Solutions
              </p>
              <hr />

              <p className="text-1xl font-light text-black  py-7 px-5 leading-loose">
                "These templates are a lifesaver! They help me focus on solving the logic of problems instead of spending time writing boilerplate code. Perfect for competitive programming efficiency and speed!"
              </p>
              <div className="flex flex-row h-auto p-3 w-full items-center gap-3">
                <div className="flex flex-row items-center ">
                  <div
                    className="h-14 w-14 bg-center m-3 bg-contain  rounded-full bg-no-repeat border-1 border-black"
                    style={{ backgroundImage: `url(${Boy3})` }}
                  ></div>
                </div>
                <div className="items-center justify-center flex flex-col h-14 p-2">
                  <p className="font-semibold text-1xl text-black ">
                    Tourist
                  </p>
                  <p className="font-light text-1xl text-gray-400  hover:underline underline-offset-4">
                    Competitive Programmer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreFeedbacks;
