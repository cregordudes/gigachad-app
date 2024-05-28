import { useState } from "react";
import Popup from "./Popup";
//import ProgressBar from "./ProgressBar.jsx";
import ProgressBar from "./ProgressBodyWealth.jsx";
import { useLocation } from "react-router-dom";
//import Boosts from "../assets/boostIcon.svg";
import Boosts from "../assets/boostSelect.svg";
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
         {pathname === "/" || pathname == "/tap" ? null : (
            <>
               <div className="w-full absolute top-0 left-0 flex justify-around items-center z-50  bg-gray-900 bg-opacity-75 py-2">
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
                  <div className="flex flex-col items-center justify-center">
                     <span className="font-bold text-xl text-green-500">
                        1800 $GIGA
                     </span>
                     <img
                        onClick={togglePopup}
                        alt="boosts"
                        src={Boosts}
                        className="w-3/4 h-auto cursor-pointer"
                     />
                  </div>
               </div>
               {isPopupOpen && <Popup onClose={togglePopup} />}
            </>
         )}
      </>
   );
};

export default UserInfo;
