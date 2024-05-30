import React from "react";

const EnergyBar = ({ currentLevel, maxLevel }) => {
   // Calculate the percentage of the bar to fill
   const percentage = currentLevel * 100;

   return (
      <div className="w-full max-w-xl mx-auto px-4">
         <div className="flex justify-between  text-white font-bold">
            <span className="text-sm text-slate-400">Energy</span>
            <span className="text-sm text-slate-400">
               {currentLevel.toFixed(1)}/1
            </span>
         </div>
         <div className="relative rounded-b-lg rounded-t-sm roundex w-full h-6 border-b-2 border-b-gray-800 bg-gray-600 border-1 border-gray-800 overflow-hidden">
            <div
               className="absolute h-full bg-yellow-300 border-b-2 border-b-orange-500"
               style={{
                  width: `${percentage}%`,
               }}
            ></div>
         </div>
      </div>
   );
};

export default EnergyBar;
