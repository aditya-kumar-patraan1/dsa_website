import React, { useEffect, useRef } from "react";
import "./App.css";
import { SiThealgorithms } from "react-icons/si";
import { MdOutlineStart } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import * as THREE from "three";

const SortingHomePage = () => {
  const cubeContainerRef = useRef(null);

  useEffect(() => {
    const container = cubeContainerRef.current;

    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );

    // Create a renderer with transparency enabled
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);

    // Set the scene's background to null for transparency
    scene.background = null;

    // Append the renderer to the container
    container.appendChild(renderer.domElement);

    // Add a cube to the scene
    const geometry = new THREE.BoxGeometry(0.5, 5);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Position the camera
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <>
      <div className="bg-orange-500 p-2 flex flex-col gap-2 h-screen">
        {/* Header */}
        <div className="bg-red-400 w-full h-auto flex flex-row gap-3">
          <div className="bg-purple-300 w-1/2 p-3 flex flex-row gap-3 justify-start">
            <div className="bg-green-400 p-1 h-auto w-auto flex flex-row gap-1 ">
              <SiThealgorithms className="text-4xl" />
              <div className="h-auto w-auto bg-orange-200 items-center justify-center flex">
                <p className="font-bold text-white text-1xl text-center w-fit h-fit">
                  Algorithm DSA
                </p>
              </div>
            </div>
            <div className="bg-green-400 p-1 h-auto w-auto">
              <input type="text" className="h-9 w-80 px-2" />
            </div>
          </div>
          <div className="bg-yellow-100 h-auto w-1/2 p-3 flex flex-row gap-32 justify-end">
            <div className="bg-green-400 p-1 h-auto w-auto text-1xl flex items-center">
              Documentation
            </div>
            <div className="bg-green-400 p-1 h-auto w-auto text-1xl flex items-center">
              Contact
            </div>
            <div className="bg-green-400 p-1 h-auto w-auto text-1xl flex items-center">
              Theme
            </div>
          </div>
        </div>

        {/* Sort Visualizer Section */}
        <div className="bg-red-500 w-full h-auto p-3 py-7 text-6xl text-center text-white font-bold">
          Sort Visualizer
        </div>

        {/* Main Content */}
        <div className="bg-blue-300 w-full p-3 h-full flex flex-row gap-3">
          <div className="bg-violet-900 h-full w-1/2 p-1 text-center items-center flex flex-col gap-2">
            <div className="bg-yellow-600 h-full w-auto p-1 text-center">
              <p className="text-1xl font-light text-white p-1 leading-loose">
                "Step into the fascinating world of sorting algorithms with our
                interactive Sort Visualizer! Dive deep into the logic and beauty
                of how data is organized, brought to life visually in real-time.
                Perfect for students, enthusiasts, or anyone curious about
                algorithms. Click on the 'Get Started' button below and see the
                magic unfold!"
              </p>
            </div>
          </div>

          {/* Cube and Button */}
          <div className="bg-violet-900 h-full p-3 w-1/2 items-center text-center flex flex-col gap-2">
            <div className="h-full w-full flex flex-row gap-3 justify-center">
              <div
                className="w-14 h-full bg-red-800 p-1 overflow-hidden"
                ref={cubeContainerRef}
              ></div>
              <div
                className="w-14 h-full bg-red-800 p-1 overflow-hidden"
                ref={cubeContainerRef}
              ></div>
              <div
                className="w-14 h-full bg-red-800 p-1 overflow-hidden"
                ref={cubeContainerRef}
              ></div>
              <div
                className="w-14 h-full bg-red-800 p-1 overflow-hidden"
                ref={cubeContainerRef}
              ></div>
            </div>
            <div className="flex flex-row w-auto justify-center p-1 bg-slate-600 h-fit">
              <div className="bg-blue-700 py-2 rounded-tl-lg rounded-bl-lg">
                <MdOutlineStart className="bg-red text-3xl pl-3 text-white" />
              </div>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-tr-lg rounded-br-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortingHomePage;
