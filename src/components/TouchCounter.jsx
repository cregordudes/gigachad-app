import React, { useState } from "react";

const TouchCounter = ({ children }) => {
   const [touchPoints, setTouchPoints] = useState([]);
   const [bodyCounter, setBodyCounter] = useState(0);

   const handleTouchStart = (e) => {
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

   console.log(bodyCounter);

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
                  color: "#fff4c0",
                  fontSize: "24px",
               }}
            >
               +1
            </span>
         ))}
         <style>{`
        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
         {children}
      </div>
   );
};

export default TouchCounter;
