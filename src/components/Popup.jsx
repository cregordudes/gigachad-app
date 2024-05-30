import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";
import PopupBg from "../assets/popupBg.png";
import CoffeeIcon from "../assets/coffeeIcon.svg";
import SleepMaskIcon from "../assets/sleepMaskIcon.svg";
import ProteinIcon from "../assets/proteinIcon.svg";
//import boosters from "../utils/boosters";
import Booster from "./Booster";

const Popup = ({ onClose }) => {
   const boosters = [
      {
         id: 1,
         category: "Work",
         level: 1,
         name: "Coffee",
         type: "energy",
         bonus: "1",
         cooldown: "6",
         price: 300,
         icon: CoffeeIcon,
      },
      {
         id: 2,
         category: "Rest",
         level: 1,
         name: "Sleep Mask",
         type: "rest",
         bonus: "1",
         cooldown: "6",
         price: 300,
         icon: SleepMaskIcon,
      },

      {
         id: 3,
         category: "Gym",
         level: 1,
         name: "Protein",
         type: "Muscle",
         bonus: "1",
         cooldown: "6",
         price: 300,
         icon: ProteinIcon,
      },
   ];

   useEffect(() => {
      WebApp.BackButton.show();
      WebApp.BackButton.onClick(() => onClose());

      return () => {
         WebApp.BackButton.hide();
      };
   }, []);

   return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 h-full w-full">
         <img
            alt="background"
            src={PopupBg}
            className="absolute inset-0 w-screen h-screen object-cover shadow-lg z-0"
         />
         <div
            className="p-6 w-full h-full rounded shadow-lg relative "
            //style={{ backgroundImage: `url(${PopupBg})` }}
         >
            <h2 className="text-4xl font-semibold mb-4">Boosts</h2>
            <div className="flex justify-between flex-col ">
               <div className="flex justify-between flex-row mb-6">
                  <p className="font-bold text-xl">Balance</p>
                  <span className="font-bold text-xl text-green-500">
                     1800 $GIGA
                  </span>
               </div>
               {boosters.map((booster) => (
                  <Booster id={booster.id} key={booster.id} {...booster} />
               ))}
            </div>
         </div>
      </div>
   );
};

export default Popup;
