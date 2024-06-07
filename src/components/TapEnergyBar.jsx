import React from "react";
import RunIcon from "../assets/runIcon.svg";

const TapEnergyBar = ({ currentLevel, maxLevel }) => {
   const percentage = (currentLevel * 100) / maxLevel;
   const percentageLeft = 100 - percentage;

   return (
      <div className="w-full max-w-xl mx-auto px-4 pb-2">
         <div className="flex justify-between  text-white font-bold p-2 items-baseline">
            <img src={RunIcon} alt="runFlag" className="" />
            <div className="text-lg text-slate-400">
               <span className="text-red-500">{currentLevel} </span> /
               <span className="text-green-500"> {maxLevel}</span>
            </div>
         </div>
         <div className="relative rounded-sm w-full h-4  overflow-hidden">
            <div
               className="absolute h-full bg-yellow-300 border-b-2 border-b-yellow-500"
               style={{
                  width: `${percentage}%`,
               }}
            />
            <div
               className="absolute right-0 h-full bg-gray-500 border-b-2 border-b-gray-700"
               style={{
                  width: `${percentageLeft}%`,
               }}
            />
         </div>
      </div>
   );
};

export default TapEnergyBar;
