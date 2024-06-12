import WebApp from "@twa-dev/sdk";
import GymImage from "../assets/GymTap.png";
import GymCharacter from "../assets/training.gif";
import TouchCounter from "../components/TouchCounter";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSendEvent } from "../api/axios";
import { useUserStore } from "../stores/userStore";
import errorHandler from "../services/errorHandler";

const GymTapScene = () => {
   const navigate = useNavigate();
   const sendEvent = useSendEvent();
   const { currentUser, setCurrentUser } = useUserStore();

   useEffect(() => {
      if (currentUser?.user?.state !== "GYM") {
         console.log("useEFfect");
         navigate("/gym");
      }
   }, [currentUser?.user?.state]);

   const handleExit = () => {
      sendEvent.mutate(
         {
            telegram_user_id: currentUser?.user.telegram.id,
            event: "GYM_STOP",
         },
         {
            onSuccess: (data) => {
               console.log(data);
               setCurrentUser(data.data);
               navigate("/gym");
            },
            onError: (error) => {
               console.log(error);
               navigate("/gym");
               errorHandler(error);
            },
         }
      );
   };

   useEffect(() => {
      WebApp.BackButton.show();
      WebApp.BackButton.onClick(handleExit);

      return () => {
         WebApp.BackButton.hide();
      };
   }, []);

   return (
      <div className="relative w-full h-screen grid grid-rows-12">
         <TouchCounter>
            <div className="row-start-5 col-start-1 row-span-4 col-span-full w-full h-full flex justify-center z-20 ">
               <img
                  src={GymCharacter}
                  alt="chad"
                  className=" w-auto h-full pb-4 -scale-x-100 "
                  loading="lazy"
               />
            </div>

            <div className="row-start-11 col-start-1 row-span-1 col-span-full  h-24 w-full bg-transparent flex justify-center text-green-400 items-center text-3xl z-20">
               Tap&nbsp;&nbsp;to&nbsp;&nbsp;run
            </div>

            <img
               src={GymImage}
               alt="gym"
               loading="lazy"
               className="row-span-full col-span-full w-full h-full object-cover"
            />
         </TouchCounter>
      </div>
   );
};

export default GymTapScene;
