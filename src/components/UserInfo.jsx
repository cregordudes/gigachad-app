import { useState } from "react";
import Popup from "./Popup";
//import ProgressBar from "./ProgressBar.jsx";
import ProgressBar from "./ProgressBodyWealth.jsx";
import { useLocation } from "react-router-dom";
import Boosts from "../assets/boostIcon.svg";
import EnergyBar from "./EnergyBar.jsx";

const UserInfo = () => {
   const { pathname } = useLocation();

   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const [currentBody, setCurrentBody] = useState(3.5);
   const [currentEnergy, setCurrentEnergy] = useState(0.5);
   const [currentWealth, setCurrentWealth] = useState(5);

   const maxEnergy = 1;
   const maxLevel = 10;

   const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
   };
   return (
      <>
         {pathname === "/gigachad-app/" ||
         pathname == "/gigachad-app/tap" ? null : (
            <>
               <div className="w-full absolute top-0 left-0 flex justify-around items-center z-10  bg-gray-900 bg-opacity-50 pb-2">
                  <div className="flex flex-col justify-start h-full w-2/3">
                     <EnergyBar
                        currentLevel={currentEnergy}
                        maxLevel={maxEnergy}
                     />

                     <ProgressBar
                        currentLevel={currentBody}
                        maxLevel={maxLevel}
                        title={"Body"}
                     />

                     <ProgressBar
                        currentLevel={currentWealth}
                        maxLevel={maxLevel}
                        title={"Wealth"}
                     />
                  </div>
                  <div className="flex justify-center">
                     <img
                        onClick={togglePopup}
                        alt="boosts"
                        src={Boosts}
                        className="w-full h-auto cursor-pointer"
                     />
                  </div>
               </div>
               {isPopupOpen && (
                  <Popup
                     title={"Boosts"}
                     text={
                        "Buy our boosts it's crucial for your gigachad token farm "
                     }
                     onClose={togglePopup}
                  />
               )}
            </>
         )}
      </>
   );
};

export default UserInfo;
