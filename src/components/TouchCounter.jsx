import React, { useState } from "react";
import WebApp from "@twa-dev/sdk";

const TouchCounter = ({ children }) => {
   const [touchPoints, setTouchPoints] = useState([]);
   const [bodyCounter, setBodyCounter] = useState(0);

   const handleTouchStart = (e) => {
      if (navigator.vibrate) {
         navigator.vibrate(10);
      }

      //vibration for ios
      WebApp.HapticFeedback.impactOccurred("light");

      const touch = e.touches[0];
      const newTouchPoint = {
         id: Date.now(),
         x: touch.clientX,
         y: touch.clientY,
      };

      setTouchPoints((prev) => [...prev, newTouchPoint]);

      setBodyCounter((prev) => prev + 1);

      // Remove the touch point after a brief moment (e.g., 1 second)
      setTimeout(() => {
         setTouchPoints((prev) =>
            prev.filter((point) => point.id !== newTouchPoint.id)
         );
      }, 1000);
   };

   //console.log(bodyCounter);

   return (
      <div
         onTouchStart={handleTouchStart}
         //style={{ width: "100vw", height: "100vh", position: "absolute" }}
      >
         {touchPoints.map((point) => (
            <span
               key={point.id}
               style={{
                  position: "absolute",
                  top: point.y,
                  left: point.x,
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                  animation: "fadeOut 1s forwards",
                  color: "#00FF72",
                  fontSize: "24px",
                  zIndex: 10,
               }}
            >
               +1
            </span>
         ))}
         <div className="relative flex justify-center items-center">
            <span className="absolute top-20  text-green-400 text-8xl">
               {bodyCounter}
            </span>
         </div>
         {children}
      </div>
   );
};

export default TouchCounter;
