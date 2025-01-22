// import React, { Suspense } from "react";
import React, { Suspense, useEffect, useState } from "react";
import { About, Works, MobileAbout } from "../../components";
import { Header } from "../../container";
import {Footer} from "../../container";

import "../../App.css";
import {MobileWorks} from "../../components";
// import Contact from './container/Contact';

const MyExperience = React.lazy(() => import("../../components/Experience"));
const MyContact = React.lazy(() => import("../../container/Contact"));

const MyTech = React.lazy(() => import("../../components/Tech"));

const Home = () => {
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
    <div className="overflow-hidden z-0 bg-primary ">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Header />
      </div>
      {!isMobile ? <About /> : <MobileAbout />}

      <Suspense fallback={<div>Loading...</div>}>
        <MyExperience />
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
      <MyTech />
      </Suspense>

      {!isMobile ? <Works /> : <MobileWorks />}

      {/* <Feedbacks /> */}

      <div className="relative z-0 py-[96px]" id="contact">
      <MyContact />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;


// {!isMobile ? (
//   <>
//     <MyContact />
//     {/* <PersonCanvas /> */}
//   </>
// ) : (
//   <MobileContact />
//)//}