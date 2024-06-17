import { useEffect, useRef, useState } from "react";
import GymImage from "../assets/gym-bg.gif";
import GymCharacter from "../assets/chad_character_1x.webp";
import { Link } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage";
import { useSendEvent } from "../api/axios";
import { useUserStore } from "../stores/userStore";
import errorHandler from "../services/errorHandler";
import { ClipLoader } from "react-spinners";

const Gym = () => {
   const { currentUser, setCurrentUser } = useUserStore();
   const sendEvent = useSendEvent();
   const [imageLoaded, setImageLoaded] = useState(false);
   const [isLoading, setIsloading] = useState(false);

   const handleImageLoaded = () => {
      setImageLoaded(true);
   };

   useEffect(() => {
      setTimeout(() => {
         setImageLoaded(true);
      }, 2000);
   }, []);

   const handleSendEvent = (event) => {
      setIsloading(true);
      sendEvent.mutate(
         {
            telegram_user_id: currentUser?.user?.telegram.id,
            event: event === "start" ? "GYM_START" : "GYM_STOP",
         },
         {
            onSuccess: (data) => {
               console.log(data);
               setCurrentUser(data.data);
               if (event === "start") navigate("/tap");
               setIsloading(false);
            },
            onError: (error) => {
               console.log(error);
               setIsloading(false);
               errorHandler(error);
            },
         }
      );
   };

   return (
      <div className="page-wrapper">
         {(!imageLoaded || !currentUser.user) && <LoadingPage />}

         <div
            className={`relative w-full h-screen grid grid-rows-12  ${
               imageLoaded ? "" : "hidden"
            }`}
         >
            <div className="relative w-full h-screen grid grid-rows-12">
               <div className="row-span-full col-span-full w-screen h-screen">
                  <img
                     src={GymImage}
                     alt="gym"
                     loading="lazy"
                     onLoad={handleImageLoaded}
                     className="w-screen h-screen object-cover"
                  />
               </div>

               <div className="row-start-6 col-start-1 row-span-5 col-span-full flex items-end justify-center pb-4 z-10">
                  <img
                     src={GymCharacter}
                     alt="chad"
                     className="w-auto h-[80%]"
                     loading="lazy"
                  />
               </div>

               <div className="row-start-9 col-start-1 row-span-1 col-span-full flex items-center justify-start pr-10 z-20">
                  {isLoading ? (
                     <button
                        className="arcade absolute top-[68%] w-[120px] flex justify-center rounded-none border-transparent text-lg py-2 cursor-pointer font-medium  bg-[#009AE0] border-b-4 border-b-[#005791] text-white
                   after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-6 after:absolute after:top-[10px] after:-right-2 
                     "
                     >
                        <ClipLoader
                           size={28}
                           color="#FFFFFF"
                           className="z-30"
                        />
                     </button>
                  ) : currentUser?.user?.state === "Gym" ? (
                     <button
                        className="arcade absolute top-[68%] w-[120px] flex justify-center rounded-none border-transparent text-lg py-2 cursor-pointer font-medium  bg-[#009AE0] border-b-4 border-b-[#005791] text-white
                   after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-6 after:absolute after:top-[10px] after:-right-2 
                     "
                        onClick={() => handleSendEvent("stop")}
                     >
                        Claim
                     </button>
                  ) : currentUser?.user?.state === "REST" ||
                    currentUser?.user?.state === "WORK" ? (
                     <button
                        className="arcade absolute top-[68%] w-[120px] flex justify-center rounded-none border-transparent text-lg py-2 cursor-pointer font-medium  bg-[#009AE0] border-b-4 border-b-[#005791] text-[#005791]
                   after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-6 after:absolute after:top-[10px] after:-right-2 
                     "
                     >
                        Busy
                     </button>
                  ) : (
                     <button
                        className="arcade absolute top-[68%] w-[120px] flex justify-center rounded-none border-transparent text-lg py-2 cursor-pointer font-medium  bg-[#009AE0] border-b-4 border-b-[#005791] text-white
                   after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-6 after:absolute after:top-[10px] after:-right-2
                     "
                        onClick={() => handleSendEvent("start")}
                     >
                        Start
                     </button>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Gym;
