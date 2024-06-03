import React from "react";

const EnergyBar = ({ currentLevel, maxLevel }) => {
   // Calculate the percentage of the bar to fill
   const percentage = currentLevel * 100;
   const percentageLeft = 100 - percentage;

   return (
      <div className="w-full max-w-xl mx-auto px-4 pb-2">
         <div className="flex justify-between  text-white font-bold">
            <span className="text-sm text-slate-400">Energy</span>
            <span className="text-sm text-slate-400">
               {currentLevel.toFixed(1)}/1
            </span>
         </div>
         <div className="relative rounded-sm w-full h-6  overflow-hidden">
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

export default EnergyBar;
