import React, { useEffect, useState } from "react";
import EnergyIcon from "../assets/energyIcon.svg";
import MoneyIcon from "../assets/moneyIcon.svg";

const AnimatedCounter = ({ number, type }) => {
   const [touchPoints, setTouchPoints] = useState([]);

   useEffect(() => {
      if (number > 0) {
         const newTouchPoints = Array.from({ length: number }, (_, index) => ({
            id: Date.now() + index,
            x: 0 + Math.random() * 400, // Random offset around the center
            y: window.innerHeight / 2 + Math.random() * 100, // Random offset around the center
         }));
         setTouchPoints(newTouchPoints);

         const timeout = setTimeout(() => {
            setTouchPoints([]);
         }, 1000); // Adjust duration as needed

         return () => clearTimeout(timeout);
      }
   }, [number]);

   return (
      <>
         {touchPoints.map((point) => (
            <img
               src={type === "money" ? MoneyIcon : EnergyIcon}
               key={point.id}
               className="animated-touch-point"
               style={{
                  top: point.y,
                  left: point.x,
                  position: "absolute",
                  width: "16px",
                  height: "16px",
               }}
            />
         ))}
      </>
   );
};

export default AnimatedCounter;
