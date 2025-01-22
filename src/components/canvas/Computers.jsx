import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
// import { div } from "three/examples/jsm/nodes/Nodes.js";

// const Computers = ({ isMobile }) => {
const Computers = ({scene, isMobile}) => {
  // const {scene} = useGLTF("./computer/scene.glb");

  const ref = useRef();
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left
  const [rotationAngle, setRotationAngle] = useState(0);

  useFrame(() => {
    // Update rotation angle
    setRotationAngle(prevAngle => {
      const newAngle = prevAngle + direction * 0.002; // Adjust speed here
      
      // Reverse direction if bounds are reached
      if (newAngle >= Math.PI / 12 || newAngle <= -Math.PI / 12) {
        setDirection(-direction);
      }

      return newAngle;
    });
  });
  
  

    return (
      <mesh>
        <ambientLight intensity={0.5} />
        <hemisphereLight intensity={0.5} groundColor='blue' />
        <spotLight
        color="red"
          position={[20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <directionalLight color="lightgray" intensity={7} position={[3, 2, 2]}  />
        <pointLight color="lightgray" intensity={8} />
        <primitive
          object={scene}
          ref={ref}
          // scale={isMobile ? 0.7 : 0.75}
          scale={!isMobile ? 2.5 : 1.8}
          position={[-5, -2.8, -1.5]}
          // position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          rotation={!isMobile ? [0,( -4.2 + rotationAngle), 0] : [0.03, 2.3, 0.02]  }
        />
      </mesh>
    );

};

const ComputersCanvas = ({scene}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);


  return (
    <Canvas
    // style={{ background: 'gold' }}
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [9, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
          {/* <pointLight position={[10, 10, 10]} /> */}
      <Suspense fallback={<CanvasLoader />}>
        {/* <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> */}
        <Computers scene={scene} isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
