import React from "react";
import FilledImage from "../assets/lvl-full.svg";
import HalfFilledImage from "../assets/lvl-half.svg";
import EmptyImage from "../assets/lvl-empty.svg";

const ProgressBar = ({ title, currentLevel, maxLevel }) => {
   // Calculate the number of segments
   const totalSegments = 10; // For simplicity, we're using 10 segments to represent 100%
   const segments = Array.from({ length: totalSegments }, (_, i) => i + 1);

   // Calculate the percentage filled for each segment
   const segmentPercentage = 100 / totalSegments;
   const filledSegments = Math.floor((currentLevel / maxLevel) * totalSegments);
   const remainingPercentage =
      ((currentLevel / maxLevel) * 100) % segmentPercentage;

   return (
      <div className="w-full max-w-xl mx-auto px-4">
         <div
            className="flex justify-between  text-sm text-slate-400 font-bold"
            style={{ fontFamily: "Press Start 2P, sans-serif" }}
         >
            <span>{title}</span>
            <span>
               {currentLevel}/{maxLevel}
            </span>
         </div>
         <div className="flex items-center space-x-1">
            {segments.map((segment) => {
               let segmentImage = EmptyImage;
               if (segment <= filledSegments) {
                  segmentImage = FilledImage;
               } else if (
                  segment === filledSegments + 1 &&
                  remainingPercentage > 0
               ) {
                  segmentImage = HalfFilledImage;
               }
               return (
                  <div key={segment} className="w-8 h-[20px]">
                     <img
                        src={segmentImage}
                        alt={`Segment ${segment}`}
                        className="w-full h-full object-cover"
                     />
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default ProgressBar;
