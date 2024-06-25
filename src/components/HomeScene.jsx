import { useState, useRef, useEffect } from "react";
//import HomeImage from "../assets/bedroom-bg.gif";
import HomeImage from "../assets/newHomeStaticBg.png";
import HomeCharacter from "../assets/chad_character_1x.webp";
import LoadingPage from "../pages/LoadingPage";
import errorHandler from "../services/errorHandler";
import { useUserStore } from "../stores/userStore";
import { useSendEvent } from "../api/axios";
import moment from "moment";
import { ClipLoader } from "react-spinners";
import WebApp from "@twa-dev/sdk";
import { warningOccured } from "../utils/feedbackOccured";
import AnimatedCounter from "./ClaimAnimation";

const HomeScene = () => {
   const { currentUser, setCurrentUser } = useUserStore();
   const sendEvent = useSendEvent();
   const imageRef = useRef(null);
   //const [timeLeft, setTimeLeft] = useState("0H 0MIN");
   const [timeLeft, setTimeLeft] = useState("0MIN 0S");
   const [imageLoaded, setImageLoaded] = useState(false);
   const [isLoading, setIsloading] = useState(false);

   const [showAnimation, setShowAnimation] = useState(false);

   const handleImageLoaded = () => {
      setImageLoaded(true);
   };

   useEffect(() => {
      if (!currentUser?.estimation?.seconds_left?.rest) {
         return;
      }

      const temp_time = moment.duration(
         currentUser?.estimation?.seconds_left?.rest,
         "seconds"
      );

      const minutes = temp_time.minutes();
      const hours = temp_time.hours();

      //setTimeLeft(`${hours}H ${minutes}MIN`);
      setTimeLeft(`${minutes}MIN ${temp_time.seconds()}S`);
   }, [currentUser?.estimation?.seconds_left?.rest]);

   useEffect(() => {
      if (!currentUser?.estimation?.seconds_left?.rest) {
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
   }, [currentUser?.estimation?.seconds_left?.rest]);

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
      }, 200);
   }, []);

   const handleSendEvent = (event) => {
      setIsloading(true);
      sendEvent.mutate(
         {
            telegram_user_id: currentUser?.user.telegram.id,
            event: event === "start" ? "REST_START" : "REST_STOP",
         },
         {
            onSuccess: (data) => {
               console.log(data);
               setCurrentUser(data.data);
               WebApp.HapticFeedback.notificationOccurred("success");
               if (event !== "start") {
                  setShowAnimation(true);
                  setTimeout(() => setShowAnimation(false), 3000);
               }
               setIsloading(false);
            },
            onError: (error) => {
               console.log(error);
               setIsloading(false);
               WebApp.HapticFeedback.notificationOccurred("error");
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

         <div className={`relative w-full h-screen grid grid-rows-12  `}>
            <div className="relative w-full h-screen grid grid-rows-12">
               <img
                  ref={imageRef}
                  src={HomeImage}
                  alt="home"
                  loading="lazy"
                  className="row-span-full col-span-full w-screen h-screen object-cover"
               />

               {showAnimation && <AnimatedCounter number={150} type="energy" />}

               <div className="row-start-4 sm:row-start-6 row-span-7 col-start-1 col-span-1 flex items-end justify-end pb-0">
                  <img
                     src={HomeCharacter}
                     alt="chad"
                     loading="lazy"
                     className="w-auto sm:w-[40%] h-[95%] sm:h-auto"
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
                  ) : currentUser?.user?.state === "REST" &&
                    currentUser?.estimation?.seconds_left?.rest === 0 ? (
                     <>
                        <button
                           className="arcade absolute top-[68%] w-[120px] flex justify-center rounded-none border-transparent text-lg py-2 cursor-pointer font-medium  bg-[#009AE0] border-b-4 border-b-[#005791] text-white
                   after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-6 after:absolute after:top-[10px] after:-right-2 
                     "
                           onClick={() => handleSendEvent("stop")}
                        >
                           Claim
                        </button>
                     </>
                  ) : currentUser?.user?.state === "REST" &&
                    currentUser?.estimation?.seconds_left?.rest > 0 ? (
                     <button
                        className="arcade absolute top-[68%] w-[120px] flex justify-center rounded-none border-transparent text-lg py-2 cursor-pointer font-medium  bg-[#009AE0] border-b-4 border-b-[#005791] text-[#005791]
                   after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-6 after:absolute after:top-[10px] after:-right-2 
                     "
                        onClick={warningOccured}
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
