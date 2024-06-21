import React, { Suspense, useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import UserInfo from "./UserInfo.jsx";
import LoadingPage from "../pages/LoadingPage.jsx";
import { useUserStore } from "../stores/userStore.js";
import { useSendEvent } from "../api/axios";
import WebApp from "@twa-dev/sdk";
import errorHandler from "../services/errorHandler.js";
//import music from "../assets/giga.mp3";

const Layout = () => {
   const swipeElement = useRef(null);
   //const audioRef = useRef(new Audio(music));
   const location = useLocation();

   const { currentUser, setCurrentUser } = useUserStore();
   const sendEvent = useSendEvent();

   const [startY, setStartY] = useState(0);
   const [offsetY, setOffsetY] = useState(0);

   const [isPlaying, setIsPlaying] = useState(false);

   const handlePlay = () => {
      //audioRef.current.volume = 0.4;
      //audioRef.current.loop = true;
      //audioRef.current.play();
      setIsPlaying(true);
   };

   const handleVisibilityChange = () => {
      if (document.hidden) {
         //audioRef.current.pause();
      } else {
         //audioRef.current.play();
         if (!currentUser) return;
         sendEvent.mutate(
            {
               telegram_user_id:
                  currentUser?.user?.telegram.id ||
                  WebApp?.initDataUnsafe?.user?.id,
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
      }
   };

   useEffect(() => {
      const element = swipeElement.current;
      if (!isPlaying) {
         element.addEventListener("click", handlePlay);
      }

      return () => {
         //audioRef.current.pause();
         element.removeEventListener("click", handlePlay);
      };
   }, []);

   useEffect(() => {
      document.addEventListener("visibilitychange", handleVisibilityChange);

      return () => {
         document.removeEventListener(
            "visibilitychange",
            handleVisibilityChange
         );
      };
   }, []);

   useEffect(() => {
      if (location.pathname === "/frens") return;
      const element = swipeElement.current;

      const handleTouchStart = (e) => {
         const touch = e.touches[0];
         setStartY(touch.clientY);
      };

      const handleTouchMove = (e) => {
         e.preventDefault();
      };

      const handleTouchEnd = () => {
         setStartY(0);
         setOffsetY(0);
      };

      element.addEventListener("touchstart", handleTouchStart);
      element.addEventListener("touchmove", handleTouchMove, {
         passive: false,
      });
      element.addEventListener("touchend", handleTouchEnd);

      return () => {
         element.removeEventListener("touchstart", handleTouchStart);
         element.removeEventListener("touchmove", handleTouchMove);
         element.removeEventListener("touchend", handleTouchEnd);
      };
   }, [startY, location.pathname]);

   useEffect(() => {
      if (!currentUser) return;
      sendEvent.mutate(
         {
            telegram_user_id:
               currentUser?.user?.telegram.id ||
               WebApp?.initDataUnsafe?.user?.id,
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
   }, [location.pathname]);

   return (
      <section
         id="layout"
         className="w-full h-screen relative overflow-hidden"
         ref={swipeElement}
      >
         <Suspense
            fallback={
               <div className="w-full h-full flex justify-center items-center">
                  <LoadingPage />
               </div>
            }
         >
            <UserInfo />
            <div id="outlet" className="minecraft relative z-0">
               <Outlet />
            </div>
            <Navbar />
         </Suspense>
      </section>
   );
};

export default Layout;
