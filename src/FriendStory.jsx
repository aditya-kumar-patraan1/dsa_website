import { useState } from "react";
import "./App.css";
import { SiThealgorithms } from "react-icons/si";
import React from "react";
import { TiTick } from "react-icons/ti";
import InstagramLogo from "./asset/Instagram.png";
import UserProfile from "./asset/UserProfile.png";
import InstagramPost from "./asset/InstagramPost.png";

const FriendStory = () => {
  return (
    <>
      <div className="bg-red-300 h-screen w-auto flex flex-col gap-3">
        <div className="w-full h-full">
          <p className="bg-red-500 text-center p-2 font-semibold text-5xl mx-10 h-1/6">
            Friend Stories !
          </p>

          <div className="bg-blue-400 w-full flex flex-row gap-4 h-5/6">
            <div className="bg-pink-400 w-1/2 h-full mx-10 my-0 p-3">
              {/* content */}

              <div className="bg-black w-full h-auto flex flex-row items-center">
                <div
                  className="bg-no-repeat bg-contain h-10 w-10 border border-s-slate-100"
                  style={{ backgroundImage: `url(${InstagramLogo})` }}
                >
                  {/* insta logo */}
                </div>
                <div>
                  <p className="bg-orange-300 font-light -2xl">Instagram</p>
                </div>
              </div>

              <div className="bg-white w-full h-auto flex flex-col items-center p-2">
                <div className="bg-blue-300 w-full h-auto">
                  <p className="p-1 font-light">Thanks to your Website !</p>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-2 py-3">
                  <div className="">
                    <p className="myhighlights  font-light p-2 w-auto border rounded-lg  bg-yellow-100  border-s-yellow-200">
                      Achieved ⭐⭐⭐⭐ in Codechef
                    </p>
                  </div>
                  <div className="">
                    <p className="myhighlights font-light  p-2 w-auto border rounded-lg bg-yellow-100  border-s-yellow-200">
                      Rank 2 on GFG
                    </p>
                  </div>
                  <div className="">
                    <p className="myhighlights font-light  p-2  border rounded-lg  border-s-yellow-200  bg-yellow-100">
                      Reached Knight on leetcode
                    </p>
                  </div>
                  <div className="">
                    <p className="myhighlights   bg-yellow-100 font-light  p-2  border rounded-lg  border-s-yellow-200">
                      Reached Master level on Codeforces
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-400 w-full h-auto gap-3 flex flex-col p-3">
                <div>
                  <p className="font-light text-gray-600 text-1xl">
                    "Algorithm Templates has been a game-changer for my
                    competitive programming journey! The pre-defined templates
                    saved me countless hours, allowing me to focus on solving
                    problems and improving my logic instead of rewriting
                    boilerplate code. Thanks to this, I’ve achieved a{" "}
                    <span className="text-black font-normal">
                      {" "}
                      Knight Badge{" "}
                    </span>
                    on LeetCode, a{" "}
                    <span className="text-black font-normal">
                      {" "}
                      3 star rating
                    </span>{" "}
                    on CodeChef, and maintained a
                    <span className="text-black font-normal">
                      {" "}
                      POTD streak of 365+ days
                    </span>{" "}
                    This platform truly helped me level up my skills—thank you!"
                  </p>
                </div>

                <div className="flex flex-row  bg-red-200 gap-4">
                  <div
                    className="bg-contain bg-center bg-no-repeat h-10 w-10 rounded-full bg-white"
                    style={{ backgroundImage: `url(${UserProfile})` }}
                  ></div>
                  <div className="bg-purple-500 flex flex-col items-center justify-center">
                    <div>
                      <p className="font-semibold text-black">
                        Divyansh Sharma
                      </p>
                    </div>
                    <div>
                      <p className="font-light text-gray-200">
                        Fullstack Developer (MERN)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white  w-1/2 h-full mx-10 my-0 p-3">
              <div
                className="bg-cover bg-no-repeat h-full rounded-lg w-full"
                style={{
                  backgroundImage: `url(${InstagramPost})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendStory;
