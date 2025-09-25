import { useState } from "react";
import "./App.css";
import { SiThealgorithms } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoLogoAngular } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="h-auto w-full px-16 py-5">
        <div className="bg-blue-400 p-2 rounded-2xl bg-gray-100 shadow-md shadow-gray-200">
          <div className="flex flex-row  p-2 px-5">
            <div className="h-auto flex flex-row items-center w-1/2">
              <div className="flex flex-row gap-1">
                <div className="w-auto h-auto"><SiThealgorithms className="text-5xl m-2 "/></div>
                <div className="flex w-auto items-center justify-center">
                  Codetemplate Runner
                </div>
              </div>
            </div>
            <div className="flex flex-row p-2 px-5 justify-end w-1/2">
              <div className=" p-3 flex flex-row gap-2">
                <div className=" p-2  flex items-center text-1xl text-black">
                <span className="text-black hover:underline underline-offset-4 hover:text-blue-400">Documentation</span>
                </div>
                <div className="p-2 flex items-center text-1xl text-black ">
                  <FaGithub className="hover:text-blue-600"/>
                </div>
                <div className=" p-2 flex items-center text-1xl text-black ">
                  <FaLinkedin className="hover:text-blue-600"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-row gap-4 items-center justify-center">
            <IoLogoAngular className="text-orange-600"/>
            <p className="myhighlights text-gray-700"> A K Combinator company.</p>
        </div>
        <div className="p-2 myhighlights text-gray-500 text-1xl text-center">© 2025 Codetemplate Runner, Inc. All rights reserved.</div>
      </div>
    </>
  );
};

export default Footer;
