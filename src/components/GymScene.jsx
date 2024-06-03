import { useEffect, useRef, useState } from "react";
//import GymImage from "../assets/gymFHD.png";
import GymVideo from "../assets/gym-bg_1.webm";
import GymCharacter from "../assets/chad_character_1x.webp";
import { Link } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";

const Gym = () => {
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
                     src={GymVideo}
                  />
               </div>

               <div className="row-start-6 col-start-1 row-span-5 col-span-full flex items-end justify-center pb-4">
                  <img
                     src={GymCharacter}
                     alt="chad"
                     className="w-auto h-[80%]"
                     loading="lazy"
                  />
               </div>

               <div className="row-start-10 col-start-1 row-span-1 col-span-full flex items-center justify-start pr-10">
                  <button className="arcade w-[80px] flex justify-center rounded-none border-transparent py-2 cursor-pointer font-medium text-lg bg-[#009AE0] border-b-4 border-b-[#005791] text-white relative">
                     <Link to={"/tap"} className="">
                        Start
                     </Link>
                     <div className="absolute top-[10px] -right-2 w-2 h-6 bg-[#009AE0] shadow-lg"></div>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Gym;
