import { useState, useRef, useEffect } from "react";
import HomeImage from "../assets/bedroom-bg.gif";
import HomeCharacter from "../assets/chad_character_1x.webp";
import LoadingPage from "../pages/LoadingPage";

import { Link } from "react-router-dom";
import { useUserStore } from "../stores/userStore";
import { useSendEvent } from "../api/axios";

const HomeScene = () => {
   const { currentUser, userStatistic, setUserStatistic } = useUserStore();
   const sendEvent = useSendEvent();

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

   const handleSendEvent = () => {
      sendEvent.mutateAsync(
         {
            telegram_user_id: currentUser.telegram.id,
            event: "GYM_START",
         },
         {
            onSuccess: (data) => {
               console.log(data);
               setUserStatistic(data.data);
            },
            onError: (error) => {
               console.log(error);
            },
         }
      );
   };
   return (
      <div className="page-wrapper">
         {!imageLoaded && <LoadingPage />}

         <div className={`relative w-full h-screen grid grid-rows-12  `}>
            <div className="relative w-full h-screen grid grid-rows-12">
               <img
                  ref={imageRef}
                  src={HomeImage}
                  alt="home"
                  loading="lazy"
                  className="row-span-full col-span-full w-screen h-screen object-cover"
               />

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
                     onClick={handleSendEvent}
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
