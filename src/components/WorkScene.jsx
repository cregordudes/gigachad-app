import { useState, useRef, useEffect } from "react";
import WorkImage from "../assets/work-bg.gif";
import WorkCharacter from "../assets/chad_character_1x.webp";
import TasksIcon from "../assets/tasksIcon.svg";
import LoadingPage from "../pages/LoadingPage";

const WorkScene = () => {
   const [imageLoaded, setImageLoaded] = useState(false);
   const imageRef = useRef(null);

   const handleImageLoaded = () => {
      setImageLoaded(true);
   };

   useEffect(() => {
      if (imageRef.current) {
         imageRef.current.addEventListener("load", handleImageLoaded);
      }

      return () => {
         if (imageRef.current) {
            imageRef.current.removeEventListener("load", handleImageLoaded);
         }
      };
   }, [imageRef.current]);

   return (
      <div className="page-wrapper">
         {!imageLoaded && <LoadingPage />}

         <div
            className={`relative w-full h-screen grid grid-rows-12 ${
               imageLoaded ? "" : "hidden"
            }`}
         >
            <img
               ref={imageRef}
               src={WorkImage}
               alt="work"
               loading="lazy"
               className="row-span-full col-span-full w-screen h-screen object-cover"
            />

            <div className="row-start-7 sm:row-start-6 row-span-5 col-start-1 col-span-1 flex items-start justify-end sm:justify-center pb-0 z-10">
               <img
                  src={WorkCharacter}
                  alt="chad"
                  loading="lazy"
                  className="w-auto sm:w-[40%] h-[95%] sm:h-auto"
               />
            </div>

            <div className="row-start-5 col-start-1 row-span-3 col-span-full flex items-start justify-start pl-4 z-10">
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
