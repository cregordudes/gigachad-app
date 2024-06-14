import React, { useEffect, useRef, useState } from "react";
import WebApp from "@twa-dev/sdk";
import { useUserStore } from "../stores/userStore";
import TapEnergyBar from "./TapEnergyBar";
import SocketService from "../services/socket";
import { useSendEvent } from "../api/axios";
import { useNavigate } from "react-router-dom";
import errorHandler from "../services/errorHandler";

const TouchCounter = ({ children }) => {
   const { currentUser, userLimits, setCurrentUser } = useUserStore();

   const sendEvent = useSendEvent();

   const navigate = useNavigate();

   const [tempEnergy, setTempEnergy] = useState(
      currentUser?.user?.stats?.energy.toFixed(0) || 0
   );
   const [touchPoints, setTouchPoints] = useState([]);
   const [bodyCounter, setBodyCounter] = useState(0);
   const [intervalCounter, setIntervalCounter] = useState(0);
   const intervalRef = useRef(null);
   const timeoutRef = useRef(null);
   const intervalCounterRef = useRef(intervalCounter);

   const [isTired, setIsTired] = useState(false);

   const handleTouchStart = (e) => {
      if (
         isTired ||
         tempEnergy === 0 ||
         tempEnergy === userLimits?.limits.energy / 2
      ) {
         WebApp.showAlert("Great job! You spent all your energy today!", () => {
            sendEvent.mutate(
               {
                  telegram_user_id: currentUser?.user.telegram.id,
                  event: "GYM_STOP",
               },
               {
                  onSuccess: (data) => {
                     setCurrentUser(data.data);
                     navigate("/gym");
                  },
                  onError: (error) => {
                     errorHandler(error);
                     navigate("/gym");
                  },
                  onSettled: () => {
                     navigate("/gym");
                  },
               }
            );
         });
         return;
      }

      if (navigator.vibrate) {
         navigator.vibrate(10);
      }

      // Vibration for iOS
      WebApp.HapticFeedback.impactOccurred("light");

      const touch = e.touches[0];
      const newTouchPoint = {
         id: Date.now(),
         x: touch.clientX,
         y: touch.clientY,
      };

      setTouchPoints((prev) => [...prev, newTouchPoint]);

      setBodyCounter((prev) => prev + 1);
      setIntervalCounter((prev) => prev + 1);
      //setTempEnergy((prev) => prev - 1);

      // Clear any existing timeouts and intervals
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);

      // Start a timeout to detect long press
      timeoutRef.current = setTimeout(() => {
         intervalRef.current = setInterval(() => {
            const newTouchPointDuringHold = {
               id: Date.now(),
               x: touch.clientX,
               y: touch.clientY,
            };
            setTouchPoints((prev) => [...prev, newTouchPointDuringHold]);

            setBodyCounter((prev) => prev + 1);
            setIntervalCounter((prev) => prev + 1);
            //setTempEnergy((prev) => prev - 1);
         }, 300);
      }, 300); // 300ms delay to differentiate between tap and hold

      // Remove the touch point after a brief moment (e.g., 1 second)
      setTimeout(() => {
         setTouchPoints((prev) =>
            prev.filter((point) => point.id !== newTouchPoint.id)
         );
      }, 1000);

      if (
         tempEnergy === 0 ||
         tempEnergy === userLimits?.limits.energy / 2 + 1
      ) {
         setIsTired(true);
      }
   };

   const handleTouchEnd = () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
   };

   useEffect(() => {
      intervalCounterRef.current = intervalCounter;
   }, [intervalCounter]);

   useEffect(() => {
      // Connect to the WebSocket server
      SocketService.connect(currentUser?.user?.telegram.id);

      // Listen for messages
      SocketService.onStatsUpdated((msg) => {
         setTempEnergy(Number(msg.energy.toFixed(0)));
      });

      // Send message
      const messageInterval = setInterval(() => {
         const message = { taps_count: intervalCounterRef.current };
         if (tempEnergy > 0) {
            SocketService.sendMessage(message);
         }
         setIntervalCounter(0);
      }, 1000);

      return () => {
         SocketService.disconnect();
         clearInterval(messageInterval);
      };
   }, []);

   return (
      <div
         onTouchStart={handleTouchStart}
         onTouchEnd={handleTouchEnd}
         onTouchCancel={handleTouchEnd}
         className="w-screen h-screen grid grid-rows-12 "
      >
         {touchPoints.map((point) => (
            <span
               key={point.id}
               style={{ top: point.y, left: point.x }}
               className="touchNumber"
            >
               +1
            </span>
         ))}
         <div className="relative flex justify-center items-center row-start-1 col-start-1 row-span-2 col-span-full z-20">
            <TapEnergyBar
               currentLevel={tempEnergy}
               maxLevel={currentUser?.user?.stats.energy.toFixed(0)}
            />
         </div>

         <div className="relative flex justify-center items-center row-start-2 col-start-1 row-span-5 col-span-full z-20">
            <span className="absolute top-20  text-green-400 text-8xl">
               {bodyCounter}
            </span>
         </div>
         {children}
      </div>
   );
};

export default TouchCounter;
