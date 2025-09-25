import { useState } from "react";
import "./App.css";
import { SiThealgorithms } from "react-icons/si";
import SortingVideo from "./asset/SortVideo.mp4";

const SortingVideoPage = () => {
  return (
    <>
      <div className="h-screen p-8 flex flex-row">
        <div className="p-3 h-auto w-full overflow-hidden">
          <video
            className="h-full w-full rounded-xl"
            src={SortingVideo}
            controls
            autoPlay
          ></video>
        </div>
      </div>
    </>
  );
};

export default SortingVideoPage;
