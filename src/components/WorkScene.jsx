import { useState, useRef, useEffect } from "react";
import WorkImage from "../assets/work-bg.gif";
import WorkCharacter from "../assets/chad_character_1x.webp";
import TasksIcon from "../assets/tasksIcon.svg";
import LoadingPage from "../pages/LoadingPage";
import { useUserStore } from "../stores/userStore";
import { useSendEvent } from "../api/axios";
import moment from "moment";

const WorkScene = () => {
   const { currentUser, setCurrentUser } = useUserStore();
   const sendEvent = useSendEvent();
   const [timeLeft, setTimeLeft] = useState("0H 0MIN");
   const [imageLoaded, setImageLoaded] = useState(false);

   const handleImageLoaded = () => {
      setImageLoaded(true);
   };

   useEffect(() => {
      if (!currentUser?.estimation?.seconds_left) {
         return;
      }

      const minutes = moment(currentUser?.estimation?.seconds_left.rest).format(
         "m"
      );
      const hours = moment(currentUser?.estimation?.seconds_left.rest).format(
         "H"
      );

      setTimeLeft(`${hours}H ${minutes}MIN`);
   }, [currentUser?.estimation?.seconds_left]);

   useEffect(() => {
      setTimeout(() => {
         setImageLoaded(true);
      }, 1500);
   }, []);

   const handleSendEvent = (event) => {
      sendEvent.mutateAsync(
         {
            telegram_user_id: currentUser?.user?.telegram.id,
            event: event === "start" ? "WORK_START" : "WORK_STOP",
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

         <div
            className={`relative w-full h-screen grid grid-rows-12 ${
               imageLoaded ? "" : "hidden"
            }`}
         >
            <img
               src={WorkImage}
               alt="work"
               loading="lazy"
               onLoad={handleImageLoaded}
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

            <div className="row-start-7 col-start-1 row-span-3 col-span-full flex items-start justify-start pl-4 z-10">
               <div className="flex items-around justify-center flex-col ">
                  <img
                     alt="boosts"
                     src={TasksIcon}
                     className="w-16 h-auto cursor-pointer"
                  />
                  <span className="font-bold text-md text-green-400">
                     TASKS
                  </span>
               </div>
            </div>

            <div className="row-start-9 col-start-1 row-span-1 col-span-full flex items-center justify-start pr-10 z-20">
               {currentUser?.user?.state === "WORK" ? (
                  <button
                     className="relative arcade w-[120px] flex justify-center rounded-none border-transparent text-lg py-2 cursor-pointer font-medium  bg-[#009AE0] border-b-4 border-b-[#005791]
                   after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-6 after:absolute after:top-[10px] after:-right-2 text-white
                     "
                     onClick={() => {
                        handleSendEvent("stop");
                     }}
                  >
                     Claim
                     <div className="absolute top-[10px] -right-2 w-2 h-6 bg-[#009AE0] shadow-lg"></div>
                  </button>
               ) : currentUser?.user?.state === "WORK" &&
                 currentUser?.estimation?.seconds_left?.work > 0 ? (
                  <button
                     className="arcade absolute top-[68%] w-[120px] flex justify-center rounded-none border-transparent text-lg py-2 cursor-pointer font-medium  bg-[#009AE0] border-b-4 border-b-[#005791] text-[#005791]
                   after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-6 after:absolute after:top-[10px] after:-right-2 
                     "
                  >
                     {timeLeft}
                  </button>
               ) : currentUser?.user?.state === "REST" ||
                 currentUser?.user?.state === "GYM" ? (
                  <button
                     className="arcade absolute top-[68%] w-[120px] flex justify-center rounded-none border-transparent text-lg py-2 cursor-pointer font-medium  bg-[#009AE0] border-b-4 border-b-[#005791] text-[#005791]
                   after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-6 after:absolute after:top-[10px] after:-right-2 
                     "
                  >
                     Busy
                  </button>
               ) : (
                  <button
                     className="relative arcade w-[120px] flex justify-center rounded-none border-transparent text-lg py-2 cursor-pointer font-medium  bg-[#009AE0] border-b-4 border-b-[#005791]
                   after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-6 after:absolute after:top-[10px] after:-right-2 text-white
                     "
                     onClick={() => {
                        handleSendEvent("start");
                     }}
                  >
                     Start
                     <div className="absolute top-[10px] -right-2 w-2 h-6 bg-[#009AE0] shadow-lg"></div>
                  </button>
               )}
            </div>
         </div>
      </div>
   );
};

export default WorkScene;
