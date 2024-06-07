import React, { Suspense, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import UserInfo from "./UserInfo.jsx";
import LoadingPage from "../pages/LoadingPage.jsx";
import { useUserStore } from "../stores/userStore.js";
import { useSendEvent } from "../api/axios";
import WebApp from "@twa-dev/sdk";

const Layout = () => {
   const swipeElement = useRef(null);

   const { currentUser, setCurrentUser } = useUserStore();
   const sendEvent = useSendEvent();

   const [startY, setStartY] = useState(0);
   const [offsetY, setOffsetY] = useState(0);

   useEffect(() => {
      const element = swipeElement.current;

      const handleTouchStart = (e) => {
         const touch = e.touches[0];
         setStartY(touch.clientY);
      };

      const handleTouchMove = (e) => {
         //const touch = e.touches[0];
         //const currentY = touch.clientY;
         //const yOffset = currentY - startY;
         //setOffsetY(yOffset);
         e.preventDefault();

         //// Prevent default behavior if swiping down
         //if (yOffset > 0) {
         //   e.preventDefault();
         //}
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
   }, [startY]);

   useEffect(() => {
      console.log("currentUser:", currentUser);
   }, [currentUser]);

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
            },
         }
      );
   }, []);

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
