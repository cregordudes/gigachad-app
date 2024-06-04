import { useState } from "react";
import Popup from "./Popup";
import ProgressBar from "./ProgressBar.jsx";
//import ProgressBar from "./ProgressBodyWealth.jsx";
import { useLocation } from "react-router-dom";
//import Boosts from "../assets/boostIcon.svg";
import Boosts from "../assets/boostSelect.svg";
import EnergyBar from "./EnergyBar.jsx";

const UserInfo = () => {
   const { pathname } = useLocation();

   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const [currentBody, setCurrentBody] = useState(3);
   const [currentWealth, setCurrentWealth] = useState(5);
   const [currentEnergy, setCurrentEnergy] = useState(0.5);

   const maxEnergy = 1;
   const maxLevel = 10;

   const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
   };
   return (
      <>
         {pathname === "/" || pathname == "/tap" ? null : (
            <>
               <div className="w-full absolute top-0 left-0 flex justify-evenly items-center z-50  bg-gray-900 bg-opacity-75 py-2 max-h-[25%]">
                  <div className="flex flex-col justify-start h-full w-1/2">
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
                  <div className="flex flex-col items-center justify-center w-1/3">
                     <p className="font-bold text-xl text-green-500 w-1/2 flex justify-between">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           fill="white"
                           className="size-6"
                        >
                           <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
                        </svg>

                        <span>1800</span>
                     </p>
                     <img
                        //onClick={togglePopup}
                        alt="boosts"
                        src={Boosts}
                        className="w-3/4 max-w-[162px]  cursor-pointer"
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
