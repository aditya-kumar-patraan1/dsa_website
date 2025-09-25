// src/myThree.js

import * as THREE from 'three';  // Import Three.js

export const myInitializeThree = () => {
  // Create a scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();

  // Set up the renderer size
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement); // Add renderer to the body

  // Example: Create a cube
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube); // Add the cube to the scene

  // Set camera position
  camera.position.z = 5;

  // Animation function
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01; // Rotate the cube
    cube.rotation.y += 0.01;
    renderer.render(scene, camera); // Render the scene
  }

  // Start animation
  animate();
};
