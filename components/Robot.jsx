"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh, Color } from "three";

import CanvasLoader from "./Loader";
import { Box, Typography } from "@mui/material";

const Earth = () => {
  // const robot = useGLTF("./planet/scene.gltf");
  // const robot = useGLTF("./whale/scene.gltf");
  const robot = useGLTF("./robot2/untitled.gltf");

  return (
    <primitive
      style={{ background: "grey", minHeight: "100vh" }}
      object={robot.scene}
      scale={0.35}
      position-y={0}
      rotation-y={0}
    />
  );
};

const RobotCanvas = () => {
  return (
    <Box sx={{ height: "100vh", cursor: "grab" }}>
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 4]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            enablePan={false}
            minPolarAngle={Math.PI / 2}
          />
          <directionalLight
            position={[5, 15, 1]} // You can adjust the position of the light
            intensity={5} // Adjust the intensity as needed
            castShadow={true} // Enable shadows
          />
          <directionalLight
            position={[5, 15, 20]} // You can adjust the position of the light
            intensity={5} // Adjust the intensity as needed
            castShadow={true} // Enable shadows
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default RobotCanvas;
