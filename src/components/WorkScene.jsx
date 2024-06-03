import { useState, useRef, useEffect } from "react";
//import WorkImg from "../assets/workFHD.png";
import WorkVideo from "../assets/work-bg.webm";
import WorkCharacter from "../assets/chad_character_1x.webp";
import TasksIcon from "../assets/tasksIcon.svg";
import LoadingPage from "../pages/LoadingPage";

const WorkScene = () => {
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
            <div className="row-span-full col-span-full w-screen h-screen">
               <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  controls={false}
                  className={`w-screen h-screen object-cover object-right`}
                  src={WorkVideo}
               />
            </div>

            <div className="row-start-7 sm:row-start-6 row-span-5 col-start-1 col-span-1 flex items-start justify-end sm:justify-center pb-0">
               <img
                  src={WorkCharacter}
                  alt="chad"
                  loading="lazy"
                  className="w-auto sm:w-[40%] h-[95%] sm:h-auto"
               />
            </div>

            <div className="row-start-5 col-start-1 row-span-3 col-span-full flex items-start justify-start pl-4">
               <div className="flex items-around justify-center flex-col ">
                  <img
                     alt="boosts"
                     src={TasksIcon}
                     className="w-16 h-auto cursor-pointer"
                  />
                  <span className="font-bold text-md text-green-400">
                     Tasks
                  </span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default WorkScene;
