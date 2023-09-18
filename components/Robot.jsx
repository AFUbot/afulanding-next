"use client";

import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh, Color } from "three";

import CanvasLoader from "./Loader";
import { Box, Typography } from "@mui/material";

const Earth = () => {
  // const robot = useGLTF("./robot/untitled.gltf");
  const robot = useGLTF("./lowres3/untitled.gltf");

  return (
    <primitive
      style={{ background: "grey", minHeight: "100vh" }}
      object={robot.scene}
      scale={3}
      position-y={0}
      rotation-y={0}
    />
  );
};

const RobotCanvas = () => {
  return (
    <Box sx={{ height: "100vh", cursor: "grab" }}>
      <Typography textAlign="center" variant="h5" mt={5}>
        Introducing
      </Typography>
      <Typography
        color="#05ACEA"
        textAlign="center"
        variant="h3"
        fontWeight="bold"
      >
        The AJ20 Model
      </Typography>
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
            maxPolarAngle={Math.PI}
            enablePan={false}
            minPolarAngle={0}
          />
          {/* Ambient Light */}
          <ambientLight intensity={0.5} />

          {/* Three directional lights */}
          <directionalLight
            position={[10, 10, 10]}
            intensity={1}
            castShadow={true}
          />
          <directionalLight position={[-10, -10, -10]} intensity={0.5} />
          <directionalLight position={[0, 0, 10]} intensity={0.5} />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </Box>
  );
};

export default RobotCanvas;
