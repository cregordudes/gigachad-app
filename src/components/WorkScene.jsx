import { useState, useRef, useEffect } from "react";
import WorkImage from "../assets/work-bg.gif";
import WorkCharacter from "../assets/chad_character_1x.webp";
import TasksIcon from "../assets/tasksIcon.svg";
import LoadingPage from "../pages/LoadingPage";
import { useUserStore } from "../stores/userStore";
import { useSendEvent } from "../api/axios";
import moment from "moment";
import errorHandler from "../services/errorHandler";

const WorkScene = () => {
   const { currentUser, setCurrentUser } = useUserStore();
   const sendEvent = useSendEvent();
   //const [timeLeft, setTimeLeft] = useState("0H 0MIN");
   const [timeLeft, setTimeLeft] = useState("0MIN 0S");
   const [imageLoaded, setImageLoaded] = useState(false);
   const [isLoading, setIsloading] = useState(false);

   const handleImageLoaded = () => {
      setImageLoaded(true);
   };

   useEffect(() => {
      if (!currentUser?.estimation?.seconds_left?.work) {
         return;
      }

      const temp_time = moment.duration(
         currentUser?.estimation?.seconds_left?.work,
         "seconds"
      );

      const minutes = temp_time.minutes();
      //const hours = temp_time.hours();

      //setTimeLeft(`${hours}H ${minutes}MIN`);
      setTimeLeft(`${minutes}MIN ${temp_time.seconds()}S`);
   }, [currentUser?.estimation?.seconds_left?.work]);

   useEffect(() => {
      if (!currentUser?.estimation?.seconds_left?.work) {
         return;
      }
      const timer = setInterval(() => {
         setTimeLeft((prevTime) => {
            // Parse previous timeLeft
            const [minutesPart, secondsPart] = prevTime.split(" ");
            const minutes = parseInt(minutesPart.replace("MIN", ""));
            const seconds = parseInt(secondsPart.replace("S", ""));

            // Create a moment duration from parsed values
            const duration = moment.duration({
               minutes,
               seconds,
            });

            if (duration.minutes() === 0 && duration.seconds() === 0) {
               clearInterval(timer);
               sendEvent.mutate(
                  {
                     telegram_user_id: currentUser?.user?.telegram.id,
                     event: "CHECK",
                  },
                  {
                     onSuccess: (data) => {
                        console.log(data);
                        setCurrentUser(data.data);
                     },
                     onError: (error) => {
                        console.log(error);
                        errorHandler(error);
                     },
                  }
               );
               return "0MIN 0S";
            }

            // Subtract one second
            duration.subtract(1, "second");

            // Extract new hours, minutes, and seconds
            const newMinutes = duration.minutes();
            const newSeconds = duration.seconds();

            // Format and set the new timeLeft
            return `${newMinutes}MIN ${newSeconds}S`;
         });
      }, 1000);

      // Cleanup interval on component unmount
      return () => clearInterval(timer);
   }, [currentUser?.estimation?.seconds_left?.work]);

   useEffect(() => {
      setTimeout(() => {
         setImageLoaded(true);
      }, 1500);
   }, []);

   const handleSendEvent = (event) => {
      setIsloading(true);

      sendEvent.mutate(
         {
            telegram_user_id: currentUser?.user?.telegram.id,
            event: event === "start" ? "WORK_START" : "WORK_STOP",
         },
         {
            onSuccess: (data) => {
               console.log(data);
               setCurrentUser(data.data);
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
               {isLoading ? (
                  <button
                     className="arcade absolute top-[68%] w-[120px] flex justify-center rounded-none border-transparent text-lg py-2 cursor-pointer font-medium  bg-[#009AE0] border-b-4 border-b-[#005791] text-white
                   after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-6 after:absolute after:top-[10px] after:-right-2 
                     "
                  >
                     <ClipLoader size={28} color="#FFFFFF" className="z-30" />
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
               ) : currentUser?.user?.state === "WORK" &&
                 currentUser?.estimation?.seconds_left?.work === 0 ? (
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
