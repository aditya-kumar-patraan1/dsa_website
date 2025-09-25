import { useState, useEffect } from "react";
import "./App.css";
import { SiThealgorithms } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";
import ComplexityData from "./ComplexityData.jsx";
import { FaCircle } from "react-icons/fa";

const Page3Sort = () => {
  return (
    <>
      <div className="h-screen bg-green-500 p-3 flex flex-col gap-3">
        <div className="bg-purple-800 h-auto flex flex-row gap-3 p-1 overflow-auto">
          <div className="bg-red-100 p-4 font-bold text-4xl text-center flex flex-row gap-5 items-center">
            <span>
              <FaCircle />
            </span>
            Bubble Sort
          </div>
          <div className="bg-red-200 p-4 text-center w-80  font-bold text-4xl  flex flex-row gap-5 items-center">
            <span>
              <FaCircle />
            </span>
            Merge Sort
          </div>
          <div className="bg-red-300 p-4 text-center  font-bold text-4xl  flex flex-row gap-5 items-center">
            <span>
              <FaCircle />
            </span>
            Selection Sort
          </div>
          <div className="bg-red-300 p-4 text-center  font-bold text-4xl  flex flex-row gap-5 items-center">
            <span>
              <FaCircle />
            </span>
            Intersection Sort
          </div>
          <div className="bg-red-300 p-4 text-center  font-bold text-4xl  flex flex-row gap-5 items-center">
            <span>
              <FaCircle />
            </span>
            Heap Sort
          </div>
          <div className="bg-red-300 p-4 text-center  font-bold text-4xl  flex flex-row gap-5 items-center">
            <span>
              <FaCircle />
            </span>
            Quick Sort
          </div>
        </div>
        <div className="bg-yellow-200 grid grid-cols-3 gap-3">
          <div className="bg-red-300 w-96">
            <div className="bg-gray-200 h-full p-3 flex flex-col gap-3 items-center justify-center rounded-xl">
              <div className="p-2 bg-pink-500">
                <p className="text-center font-bold text-3xl bg-orange-500">
                  Bubble Sort
                </p>
              </div>
              <div className="h-auto bg-blue-300 m-10">
                <p className="font-light text-1xl text-center">
                  "Bubble Sort is a comparison-based sorting algorithm. It works
                  by repeatedly stepping through the list, comparing adjacent
                  elements, and swapping them if they are in the wrong order."
                </p>
              </div>
              <div className=" p-3 text-black flex flex-row items-center gap-1 hover:underline underline-offset-4">
                <div className="p-1">
                  <a href="#" className="">
                    Learn more
                  </a>
                </div>
                <HiOutlineExternalLink className="text-1xl" />
              </div>
              <div className="bg-yellow-200 px-2 text-center py-2 myhighlights rounded-lg text-amber-950 border border-yellow-600">
                <p>
                  Space Complexity:{" "}
                  <span>{ComplexityData["Bubble Sort"][0]}</span>
                </p>
              </div>
              <div className="bg-yellow-200 px-2 text-center py-2 myhighlights rounded-lg text-amber-950 border border-yellow-600">
                <p>
                  Space Complexity:{" "}
                  <span>{ComplexityData["Bubble Sort"][0]}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-red-300 w-96">
            <div className="bg-gray-200 h-full p-3 flex flex-col gap-3 items-center justify-center rounded-xl">
              <div className="p-2 bg-pink-500">
                <p className="text-center font-bold text-3xl bg-orange-500">
                  Merge Sort
                </p>
              </div>
              <div className="h-auto bg-blue-300 m-10">
                <p className="font-light text-1xl text-center">
                  "Merge Sort is a divide-and-conquer sorting algorithm that
                  divides the input array into smaller subarrays, sorts them,
                  and then merges them back together to form the sorted array."
                </p>
              </div>
              <div className=" p-3 text-black flex flex-row items-center gap-1 hover:underline underline-offset-4">
                <div className="p-1">
                  <a href="#" className="">
                    Learn more
                  </a>
                </div>
                <HiOutlineExternalLink className="text-1xl" />
              </div>
              <div className="bg-yellow-200 px-2 text-center py-2 myhighlights rounded-lg text-amber-950 border border-yellow-600">
                <p>
                  Space Complexity:{" "}
                  <span>{ComplexityData["Merge Sort"][0]}</span>
                </p>
              </div>
              <div className="bg-yellow-200 px-2 text-center py-2 myhighlights rounded-lg text-amber-950 border border-yellow-600">
                <p>
                  Space Complexity:{" "}
                  <span>{ComplexityData["Merge Sort"][0]}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="bg-red-300 w-96">
            <div className="bg-gray-200 h-full p-3 flex flex-col gap-3 items-center justify-center rounded-xl">
              <div className="p-2 bg-pink-500">
                <p className="text-center font-bold text-3xl bg-orange-500">
                  Selection Sort
                </p>
              </div>
              <div className="h-auto bg-blue-300 m-10">
                <p className="font-light text-1xl">
                  "Selection Sort works by repeatedly selecting the smallest
                  element from the unsorted portion of the array and placing it
                  in its correct position in the sorted portion."
                </p>
              </div>
              <div className=" p-3 text-black flex flex-row items-center gap-1 hover:underline underline-offset-4">
                <div className="p-1">
                  <a href="#" className="">
                    Learn more
                  </a>
                </div>
                <HiOutlineExternalLink className="text-1xl" />
              </div>
              <div className="bg-yellow-200 px-2 text-center py-2 myhighlights rounded-lg text-amber-950 border border-yellow-600">
                <p>
                  Space Complexity:{" "}
                  <span>{ComplexityData["Bubble Sort"][0]}</span>
                </p>
              </div>
              <div className="bg-yellow-200 px-2 text-center py-2 myhighlights rounded-lg text-amber-950 border border-yellow-600">
                <p>
                  Space Complexity:{" "}
                  <span>{ComplexityData["Bubble Sort"][0]}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page3Sort;
