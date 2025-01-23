import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";
import { AnimationMixer } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
// import { div } from "three/examples/jsm/nodes/Nodes.js";

// const Computers = ({ isMobile }) => {
const Person = () => {
  const gltf = useLoader(GLTFLoader, "./computer2/scene.gltf");
  // const glft = useGLTF("./computer2/scene.gltf");
  // console.log("🚀 ~ Person ~ glft:", glft)
  const {scene, animations} = gltf
  // console.log("🚀 ~ Person ~ animations:", animations)

  // const {actions, names} = useAnimations(animations)

  const [walking, setWalking] = useState(false);

  const human = useRef();

  const [mixer, setMixer] = useState(null);




  useEffect(() => {
    if (gltf) {
      const newMixer = new THREE.AnimationMixer(gltf.scene);
      const action = newMixer.clipAction(
        walking ? gltf.animations[1] : gltf.animations[0]
      );
      action.play();
      setMixer(newMixer);
    }
  }, [gltf]);

  useFrame((state, delta) => {
    mixer?.update(delta);
  });






  // useFrame((state, delta) => {
  //   // if (mixer.current) mixer.current.update(delta);
  // });

  // useEffect(() => {
  //   // actions[names[0]].play();
  //   // return () => {
  //   //   actions[names[0]].fadeOut(0.5);
  //   // }
  //   mixer.current = new AnimationMixer(mixer.current);
  //   animations.forEach(clip => mixer.current.clipAction(clip).play());
  //   console.log("🚀 ~ useEffect ~ mixer:", mixer)
  // }, [animations]);

  
  

    return (
      <mesh>
        <ambientLight intensity={1} />
        <hemisphereLight intensity={-1.3} groundColor='purple' />
        {/* <spotLight
          position={[20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        /> */}
        <directionalLight intensity={1} position={[3, 2, 2]}  />
        {/* <pointLight intensity={8} /> */}
        <primitive
         ref={human}
          object={scene}
          // scale={isMobile ? 0.7 : 0.75}
          scale={2.4}
          position={[0.5, -2.6, 1.7]}
          // position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          // loop
          rotation={[0.1, 1, 0]}
        />
      </mesh>
    );

};

const PersonCanvas = () => {
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
      // frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [3, -4, 21], fov: 13 }}
      gl={{ preserveDrawingBuffer: true }}
    >
          {/* <pointLight position={[10, 10, 10]} /> */}
      <Suspense fallback={<CanvasLoader />}>
        {/* <OrbitControls
        // autoRotate
          enableZoom={false}
          // maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2}
        /> */}
        <Person />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default PersonCanvas;
