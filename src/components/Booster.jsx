import WebApp from "@twa-dev/sdk";
import BuyIcon from "../assets/upButtonIcon.svg";
import { useState } from "react";

const Booster = ({
   id,
   category,
   level,
   name,
   type,
   bonus,
   cooldown,
   price,
   icon: Icon,
}) => {
   const [isClicked, setIsClicked] = useState(false);
   const hanldeBuy = (id) => {
      WebApp.HapticFeedback.impactOccurred("rigid");
      console.log(id);
      setIsClicked(true);
      setTimeout(() => {
         setIsClicked(false);
      }, 100); // duration of the animation
   };
   return (
      <div className="mb-4">
         <div className="flex justify-between mb-2">
            <p className="font-bold text-md text-[#005791]">{category}</p>
            <span className="font-bold text-md text-[#005791]">
               lvl {level}/10
            </span>
         </div>

         <div className="flex justify-between">
            <img className="w-24 h-24" src={Icon} alt={name} />

            <div className="flex justify-between flex-col w-2/3">
               <div className="flex justify-between">
                  <p className="font-light text-md text-gray-300">{name}</p>
                  <p className="font-light text-md text-gray-300">
                     lvl {level}
                  </p>
               </div>

               <div className="flex justify-between">
                  <p className="font-bold text-sm text-gray-500">
                     {type} bonus
                  </p>
                  <p className="font-bold text-sm text-gray-500">+{bonus}</p>
               </div>

               <div className="flex justify-between pb-4">
                  <p className="font-bold text-sm text-gray-500">cooldown</p>
                  <p className="font-bold text-sm text-gray-500">{cooldown}h</p>
               </div>

               <div className="flex justify-between">
                  <p className="font-bold text-xl text-green-500">{price}$</p>
                  <img
                     onClick={() => {
                        hanldeBuy(id);
                     }}
                     alt="buy"
                     src={BuyIcon}
                     className={`w-24 h-auto transform transition-transform duration-300 ${
                        isClicked ? "scale-110" : ""
                     }`}
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Booster;
