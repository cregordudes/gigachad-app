import WebApp from "@twa-dev/sdk";
import { useEffect } from "react";
import PopupBg from "../assets/popupBg.svg";
import boosters from "../utils/boosters";
import Booster from "./Booster";

const Popup = ({ onClose }) => {
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
            className="absolute inset-0 w-full h-auto object-cover shadow-lg z-0"
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
