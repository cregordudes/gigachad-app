import React from "react";

const ProgressBar = ({ currentLevel, maxLevel }) => {
   const levels = Array.from({ length: maxLevel }, (_, i) => i + 1);

   return (
      <div className="relative flex items-center w-full rounded-2xl ">
         <div className="flex w-full rounded-xl bg-gray-300">
            {levels.map((level) => (
               <div
                  key={level}
                  className={`relative flex-1 h-8 flex items-center justify-center p-[2px] ${
                     level <= currentLevel
                        ? "bg-green-500"
                        : "bg-gray-300 rounded-xl"
                  } ${level === currentLevel && "rounded-xl no-left-radius"}`}
               >
                  <span className="text-white">{level}</span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default ProgressBar;
