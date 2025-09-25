import { useState, useEffect } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import "./App.css";
import colorData from "./ColorData.jsx";
import ComplexityData from "./ComplexityData.jsx";

const SortingVisualizer = () => {
  const [SortingName, setSortingName] = useState("Bubble Sort");
  const [currTC, setcurrTC] = useState(ComplexityData["Bubble Sort"][0]);
  const [currSC, setcurrSC] = useState(ComplexityData["Bubble Sort"][1]);
  const [myValues, setmyValues] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [colorBar, setcolorBar] = useState("bg-slate-300");
  const [barWidth, setbarWidth] = useState("15");

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function handleColorChanging(color) {
    setcolorBar(color.hex);
  }

  function acceptValues(data) {
    let lst = data.trim().split(" ").map(Number);
    if (lst.some(isNaN))
      return alert("Please enter valid space-separated numbers.");
    setmyValues(lst);
    startSort(lst);
  }

  async function startSort(lst) {
    if (!Array.isArray(lst)) {
      alert("Values are not passed!");
      return;
    }
    const sortedValues = [...lst];
    let size = sortedValues.length;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size - i - 1; j++) {
        if (sortedValues[j] > sortedValues[j + 1]) {
          [sortedValues[j], sortedValues[j + 1]] = [
            sortedValues[j + 1],
            sortedValues[j],
          ];
          setmyValues([...sortedValues]);
          await delay(500);
        }
      }
    }
  }

  function doAllChangeInInfo(name) {
    setSortingName(name);
    setcurrTC(ComplexityData[name][0]);
    setcurrSC(ComplexityData[name][1]);
  }

  return (
    <div className="min-h-screen bg-black p-4">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        {/* Sidebar */}
        <div className="w-full h-screen text-center flex items-center lg:w-64 bg-gray-100 rounded-xl shadow-md p-5 space-y-5">
          <div className="flex gap-10 flex-col bg-gray-600">
            <div className="flex gap-4 flex-col">
              <h2 className="text-2xl font-semibold text-gray-700">
                Sorting Visualizer
              </h2>

              <select
                className="w-full p-2 border border-gray-300 rounded-lg"
                value={SortingName}
                onChange={(e) => doAllChangeInInfo(e.target.value)}
              >
                {Object.keys(ComplexityData).map((name) => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-center text-lg font-medium text-teal-700">
              {SortingName}
            </div>

            <div className="bg-yellow-100 border border-yellow-400 p-3 rounded-lg text-center text-yellow-800 flex flex-col gap-2">
              <p>
                Time Complexity: <strong>{currTC}</strong>
              </p>
            </div>

            <div className="bg-yellow-100 border border-yellow-400 p-3 rounded-lg text-center text-yellow-800">
              <p>
                Space Complexity: <strong>{currSC}</strong>
              </p>
            </div>

            <div className="text-center items-center flex justify-center">
              <div className="flex justify-center items-center">
                <p className="text-blue-600 hover:underline cursor-pointer">
                  Documentation
                </p>{" "}
                <HiOutlineExternalLink className="ml-1 text-blue-600" />
              </div>
            </div>
          </div>

          {/* <a href="#" className="flex items-center text-center text-blue-600 hover:underline">
          </a> */}
        </div>

        {/* Main Area */}
        <div className="flex-1 flex flex-col h-screen space-y-4 bg-pink-950">
          {/* Bars */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 h-5/6 overflow-x-auto flex items-end justify-center gap-1">
            {myValues.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-200 ${colorBar}`}
                style={{ height: `${item}px`, width: `${barWidth}px` }}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="bg-white border h-fit border-gray-200 rounded-lg shadow-md p-5 space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Color Picker */}
              <div>
                <p className="text-gray-700 font-medium mb-2">
                  Change Bar Color
                </p>
                <div className="flex gap-2 flex-wrap">
                  {Object.entries(colorData).map(([key, value]) => (
                    <button
                      key={key}
                      onClick={() => setcolorBar(value)}
                      className={`${value} w-6 h-6 rounded-full border border-gray-300`}
                    />
                  ))}
                </div>
              </div>

              {/* Bar Width */}
              <div className="flex flex-col items-center">
                <p className="text-gray-700 font-medium mb-2">
                  Change Bar Width
                </p>
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={barWidth}
                  onChange={(e) => setbarWidth(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Input Field */}
              <div className="space-y-2">
                <p className="text-yellow-800 text-sm bg-yellow-100 border border-yellow-500 px-3 py-2 rounded">
                  Note: Enter numbers separated by spaces only.
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded p-2"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <button
                    onClick={() => acceptValues(inputValue)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Sort
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortingVisualizer;
