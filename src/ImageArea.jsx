import { useState } from "react";
import "./App.css";

const ImageArea = () => {
  return (
    <>
      <div className="image-area h-screen p-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        {/* this is footer */}
        <div
          className="bg-cover bg-center bg-origin-padding p-4 border-4 border-dashed h-full mx-10 bg-lime-50 rounded-lg"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
      </div>
    </>
  );
};

export default ImageArea;
