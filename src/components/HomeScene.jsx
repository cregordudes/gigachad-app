import { useState, useRef, useEffect } from "react";
import HomeImage from "../assets/bedroom-bg.gif";
import HomeCharacter from "../assets/chad_character_1x.webp";
import LoadingPage from "../pages/LoadingPage";

import { useUserStore } from "../stores/userStore";
import { useSendEvent } from "../api/axios";
import moment from "moment";

const HomeScene = () => {
   const { currentUser, setCurrentUser } = useUserStore();
   const sendEvent = useSendEvent();
   const imageRef = useRef(null);
   const [timeLeft, setTimeLeft] = useState("0H 0MIN");
   const [imageLoaded, setImageLoaded] = useState(false);

   const handleImageLoaded = () => {
      setImageLoaded(true);
   };
   useEffect(() => {
      if (!currentUser?.estimation?.seconds_left) {
         return;
      }
      const minutes = moment(currentUser?.estimation.seconds_left.rest).format(
         "m"
      );
      const hours = moment(currentUser?.estimation.seconds_left.rest).format(
         "H"
      );

      setTimeLeft(`${hours}H ${minutes}MIN`);
   }, [currentUser?.estimation?.seconds_left]);

   useEffect(() => {
      const imgElement = imageRef.current;
      if (imgElement) {
         if (imgElement.complete) {
            handleImageLoaded();
         } else {
            imgElement.addEventListener("load", handleImageLoaded);
         }
      }

      return () => {
         if (imgElement) {
            imgElement.removeEventListener("load", handleImageLoaded);
         }
      };
   }, []);

   useEffect(() => {
      setTimeout(() => {
         setImageLoaded(true);
      }, 1000);
   }, []);

   const handleSendEvent = (event) => {
      sendEvent.mutate(
         {
            telegram_user_id: currentUser?.user.telegram.id,
            event: event === "start" ? "REST_START" : "REST_STOP",
         },
         {
            onSuccess: (data) => {
               console.log(data);
               setCurrentUser(data.data);
            },
            onError: (error) => {
               console.log(error);
            },
         }
      );
   };

   return (
      <div className="page-wrapper">
         {(!imageLoaded || !currentUser.user || !currentUser.estimation) && (
            <LoadingPage />
         )}

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
               <div className="row-start-9 col-start-1 row-span-1 col-span-full flex items-center justify-start pr-10 z-20">
                  {currentUser?.user?.state === "REST" &&
                  currentUser?.estimation?.seconds_left?.rest === 0 ? (
                     <button
                        className="arcade absolute top-[68%] w-[120px] flex justify-center rounded-none border-transparent text-lg py-2 cursor-pointer font-medium  bg-[#009AE0] border-b-4 border-b-[#005791] text-[#005791]
                   after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-6 after:absolute after:top-[10px] after:-right-2 
                     "
                        onClick={() => handleSendEvent("stop")}
                     >
                        Claim
                     </button>
                  ) : currentUser?.user?.state === "REST" &&
                    currentUser?.estimation?.seconds_left?.rest > 0 ? (
                     <button
                        className="arcade absolute top-[68%] w-[120px] flex justify-center rounded-none border-transparent text-lg py-2 cursor-pointer font-medium  bg-[#009AE0] border-b-4 border-b-[#005791] text-[#005791]
                   after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-6 after:absolute after:top-[10px] after:-right-2 
                     "
                     >
                        {timeLeft}
                     </button>
                  ) : (
                     <button
                        className="arcade absolute top-[68%] w-[120px] flex justify-center rounded-none border-transparent text-lg py-2 cursor-pointer font-medium  bg-[#009AE0] border-b-4 border-b-[#005791] text-white
                   after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-6 after:absolute after:top-[10px] after:-right-2
                     "
                        onClick={() => handleSendEvent("start")}
                     >
                        Rest
                     </button>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomeScene;
