import { useState } from "react";
import "./App.css";
import { SiThealgorithms } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";
import ComplexityData from "./ComplexityData.jsx";

const Page4Sort = () => {
  return (
    <>
      <div className="h-screen bg-yellow-500 p-3 flex flex-col gap-3">
        <div className="bg-yellow-200 grid grid-cols-3 gap-3">
          <div className="bg-red-300 w-96">
            <div className="bg-gray-200 h-full p-3 flex flex-col gap-3 items-center justify-center rounded-xl">
              <div className="p-2 bg-pink-500">
                <p className="text-center font-bold text-3xl bg-orange-500">
                  Insertion Sort
                </p>
              </div>
              <div className="h-auto bg-blue-300 m-10">
                <p className="font-light text-1xl text-center">
                  "Insertion Sort is a simple and intuitive sorting algorithm that builds the sorted array one element at a time by repeatedly taking an unsorted element and inserting it into its correct position in the sorted portion."
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
                  Heap Sort
                </p>
              </div>
              <div className="h-auto bg-blue-300 m-10">
                <p className="font-light text-1xl text-center">
                "Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure to organize data, ensuring efficient sorting with 𝑂(𝑛 log⁡ 𝑛) complexity. It is an in-place algorithm and is not stable."
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
                  Quick Sort
                </p>
              </div>
              <div className="h-auto bg-blue-300 m-10">
                <p className="font-light text-1xl">
                  "Quick Sort is a highly efficient and widely used divide-and-conquer sorting algorithm. It works by selecting a "pivot" element, partitioning the array into two subarrays based on the pivot, and recursively sorting the subarrays."
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

export default Page4Sort;
