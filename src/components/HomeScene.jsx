import { useState, useRef, useEffect } from "react";
//import HomeGif from "../assets/homeFHD.png";
import HomeVideo from "../assets/bedroom-bg-v2.webm";
import HomeCharacter from "../assets/chad_character_1x.webp";
import LoadingPage from "../pages/LoadingPage";

import { Link } from "react-router-dom";

const HomeScene = () => {
   const [videoLoaded, setVideoLoaded] = useState(false);
   const videoRef = useRef(null);

   const handleVideoLoaded = () => {
      setVideoLoaded(true);
   };

   useEffect(() => {
      if (videoRef.current) {
         videoRef.current.addEventListener("loadeddata", handleVideoLoaded);
      }
      return () => {
         if (videoRef.current) {
            videoRef.current.removeEventListener(
               "loadeddata",
               handleVideoLoaded
            );
         }
      };
   }, []);
   return (
      <div className="page-wrapper">
         {!videoLoaded && <LoadingPage />}

         <div
            className={`relative w-full h-screen grid grid-rows-12  ${
               videoLoaded ? "" : "hidden"
            }`}
         >
            <div className="relative w-full h-screen grid grid-rows-12">
               <div className="row-span-full col-span-full w-screen h-screen">
                  <video
                     ref={videoRef}
                     autoPlay
                     muted
                     loop
                     controls={false}
                     className="w-screen h-screen object-cover sm:object-right"
                     src={HomeVideo}
                  />
               </div>

               <div className="row-start-6 sm:row-start-8 row-span-5 col-start-1 col-span-1 flex items-end justify-end pb-0">
                  <img
                     src={HomeCharacter}
                     alt="chad"
                     loading="lazy"
                     className="w-auto sm:w-[40%] h-[95%] sm:h-auto"
                  />
               </div>
               <div className="row-start-10 col-start-1 row-span-1 col-span-full flex items-center justify-start pr-10">
                  <button
                     className="arcade absolute top-[68%] w-[120px] flex justify-center rounded-none border-transparent text-lg py-2 cursor-pointer font-medium  bg-[#009AE0] border-b-4 border-b-[#005791] text-[#005791]
                   after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-6 after:absolute after:top-[10px] after:-right-2 
                     "
                  >
                     3H 24MIN
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeScene;
