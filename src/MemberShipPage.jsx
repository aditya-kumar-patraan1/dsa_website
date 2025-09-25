import { useState } from "react";
import "./App.css";
import { SiThealgorithms } from "react-icons/si";
import { TiTick } from "react-icons/ti";

const MemberShipPage = () => {
  const [direction, setDirection] = useState("0");
  const [Card1Title,setCard1Title] = useState("Sorting Visualizer");
  const [Card2Title,setCard2Title] = useState("Dora AI");
  const [Card3Title,setCard3Title] = useState("Binary Search Visualizer");

  const sideChange = () => {
    if (direction === "0" || direction === "-10") {
      setDirection("10");
    } else if (direction === "10") {
      setDirection("-10");
    }
    if(Card2Title === "Dora AI"){
      setCard2Title("GFG ⭐⭐⭐ star Coder");
    }
    if(Card1Title === "Sorting Visualizer"){
      setCard1Title("1700+ rating Leetcoder");
    }
    if(Card3Title === "Binary Search Visualizer"){
      setCard3Title("Codechef ⭐⭐ Coder");
    }
    if(Card2Title === "GFG ⭐⭐⭐ star Coder"){
      setCard2Title("Dora AI");
    }
    if(Card1Title === "1700+ rating Leetcoder"){
      setCard1Title("Sorting Visualizer");
    }
    if(Card3Title === "Codechef ⭐⭐ Coder"){
      setCard3Title("Binary Search Visualizer");
    }

    console.log(`Updated direction: ${direction}`);
  };

  return (
    <>
      <div className="h-auto w-full  p-7 flex flex-col">
        <div className="h-auto w-auto">
          <div className=" bg-red-500 flex flex-row gap-0 p-5 justify-end ">
            <div className=" p-3 bg-green-300">
              <p className="text-4xl text-black font-bold">Unqiue features !</p>
            </div>
            <div className="flex flex-row h-auto w-auto bg-purple-300 items-center">
              <div
                className={`h-12 w-40 p-1 flex flex-row absolute items-center justify-center bg-transparent rounded-xl opacity-75 ease-in-out duration-300 shadow-md shadow-gray-500  ${
                  direction === "10" ? "translate-x-40" : "translate-x-[40]"
                }`}
              ></div>

              <div className="text-center h-12 w-40 p-2 flex flex-row items-center justify-center  rounded-l-xl">
                <button onClick={sideChange} className="p-3 ">
                  About Website
                </button>
              </div>
              <div
                className={` h-12 w-40 p-2 flex flex-row items-center justify-center bg-black-100 rounded-r-xl`}
              >
                <button onClick={sideChange} className="text-black">
                  About me
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center bg-red h-auto w-auto p-2 mx-auto ">
            <div className="grid grid-rows-1 grid-cols-3 gap-8  ">
              <div className="bg-white rounded-lg w-80 shadow-md shadow-gray-200 flex flex-col p-2">
                <div className=" p-1 gap-2">
                  <div className="h-auto w-auto">
                    <p className="font-bold text-2xl text-black  py-3  text-center">
                      {Card1Title}
                    </p>
                    <p className="myhighlights text-gray-400 p-4 text-center">
                      "A visual representation of popular sorting algorithms
                      like Bubble Sort, Quick Sort, Merge Sort, and more.Watch how different sorting methods work."
                    </p>
                  </div>
                </div>
                <div className="text-1xl text-black  p-3">
                  <p className="text-gray-400 font-semibold px-4 py-3">
                    KEY FEATURES
                  </p>
                  <ul className=" p-2">
                    <li className="myhighlights my-1 p-1  flex flex-row items-center gap-2">
                      <TiTick className="text-2xl" />
                      Algorithm Visualization
                    </li>
                    <li className="myhighlights my-1 p-1  flex flex-row items-center gap-2">
                      <TiTick className="text-2xl" />
                      Step-by-Step
                    </li>
                    <li className="myhighlights my-1 p-1 flex flex-row items-center gap-2">
                      <TiTick className="text-2xl" />
                      Performance Comparison
                    </li>
                    <li className="myhighlights my-1 p-1 flex flex-row items-center gap-2">
                      <TiTick className="text-2xl" />
                      Sorting Techniques
                    </li>
                  </ul>
                </div>
                <div className="px-4">
                  <button className="text-blue-900 font-semibold myhighlights w-full py-3 rounded-lg border border-blue-300 my-3">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg  w-80 shadow-md shadow-gray-200 flex flex-col p-2">
                <div className=" p-1 gap-2">
                  <div className="h-auto w-auto">
                    <p className="font-bold text-2xl text-black  py-3 text-center">
                      {Card2Title}
                    </p>
                    <p className="myhighlights  text-gray-400 p-4 text-center">
                      "Dora AI is here to assist you 24/7 with intelligent, fast, and reliable responses. Ask questions, get support, or simply chat with Dora to enhance your experience."
                    </p>
                  </div>
                </div>
                <div className="text-1xl text-black  p-3">
                  <p className="text-gray-400  px-4 py-3 ">
                    KEY FEATURES
                  </p>
                  <ul className=" p-2">
                    <li className="myhighlights my-1 p-1 flex flex-row items-center gap-2">
                      <TiTick className="text-2xl" />
                      24/7 DSA Assistance
                    </li>
                    <li className="myhighlights my-1 p-1 flex flex-row items-center gap-2">
                      <TiTick className="text-2xl" />
                      Instant DSA Support
                    </li>
                    <li className="myhighlights my-1 p-1 flex flex-row items-center gap-2">
                      <TiTick className="text-2xl" />
                      Chat Anytime, DSA Support Always
                    </li>
                    <li className="myhighlights my-1 p-1 flex flex-row items-center gap-2">
                      <TiTick className="text-2xl" />
                      DSA Chat Assistance
                    </li>
                  </ul>
                </div>
                <div className=" px-4">
                  <button className="text-blue-900 font-semibold myhighlights w-full py-3 rounded-lg bg-white border border-blue-300 my-3">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-lg  w-80 shadow-md shadow-gray-200 flex flex-col p-2">
                <div className=" p-1 gap-2">
                  <div className="h-auto w-auto">
                    <p className="font-bold text-2xl text-black  py-3 text-center">
                      {Card3Title}
                    </p>
                    <p className="myhighlights  text-gray-400 p-4 text-center">
                    "Explore the power of binary search with a real-time, interactive visualizer. Watch how the algorithm efficiently narrows down the search space step by step."
                    </p>
                  </div>
                </div>
                <div className="text-1xl text-black  p-3">
                  <p className="text-gray-400 px-4 py-3 ">
                    KEY FEATURES
                  </p>
                  <ul className="p-2">
                    <li className="myhighlights my-1 p-1  flex flex-row items-center gap-2">
                      <TiTick className="text-2xl" />
                      Efficient Search
                    </li>
                    <li className="myhighlights my-1 p-1 flex flex-row items-center gap-2">
                      <TiTick className="text-2xl" />
                      Interactive Steps
                    </li>
                    <li className="myhighlights my-1 p-1 flex flex-row items-center gap-2">
                      <TiTick className="text-2xl" />
                      Real-Time Visualization
                    </li>
                    <li className="myhighlights my-1 p-1 flex flex-row items-center gap-2">
                      <TiTick className="text-2xl" />
                      Algorithm Understanding
                    </li>
                  </ul>
                </div>
                <div className="px-4">
                  <button className="text-white font-semibold myhighlights w-full py-3 rounded-lg bg-blue-700 my-3">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberShipPage;
