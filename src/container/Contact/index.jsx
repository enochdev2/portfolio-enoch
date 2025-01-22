import { useEffect, useState } from 'react';
import Contact from '../../components/Contact'
import Test2 from '../Test2/Test2'

const index = () => {

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
    <div className=' min-h-screen ' id="contact">
        <div
     className="flex flex-col md:flex-row justify-center items-center  lg:px-20 md:pl-5  md:w-[100%] lg:w-[100%]"
     >
      {
        !isMobile? (
          <div className="flex flex-col space-y-5">
            <Contact />
            <Test2 />
          </div>
        ) : (
          <div className="flex flex-row space-x-5">
            <Contact />
            {/* <Test2 /> */}
          </div>
        )
      }
    </div>
    </div>
  )
}

export default index