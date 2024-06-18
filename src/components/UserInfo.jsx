import { useEffect, useState } from "react";
import Popup from "./Popup";
import ProgressBar from "./ProgressBar.jsx";
import { useLocation } from "react-router-dom";
import ProfileIcon from "../assets/profileIcon.svg";
import NoBoostIcon from "../assets/noBoostIcon.svg";
import EnergyBar from "./EnergyBar.jsx";
import { useUserStore } from "../stores/userStore.js";
import { useGetConfig } from "../api/axios.js";

const UserInfo = () => {
   const { pathname } = useLocation();
   const { currentUser, setUserLimits } = useUserStore();

   const { data: configData, isConfigLoading } = useGetConfig(
      currentUser?.user?.stats?.level ?? 0
   );

   useEffect(() => {
      if (!isConfigLoading) {
         setUserLimits(configData);
      }
   }, [configData, isConfigLoading, currentUser?.user?.stats?.level]);

   const [isPopupOpen, setIsPopupOpen] = useState(false);
   //const [currentBody, setCurrentBody] = useState(1000);
   //const [currentWealth, setCurrentWealth] = useState(1000);
   //const [currentEnergy, setCurrentEnergy] = useState(200);

   const maxEnergy = 200;
   const maxLevel = 1000;

   const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
   };
   return (
      <>
         {pathname === "/" ||
         pathname == "/tap" ||
         pathname == "/frens" ? null : (
            <>
               <div className="w-full absolute top-0 left-0 flex justify-evenly items-center z-50  bg-gray-900 bg-opacity-75 py-1 max-h-[160px]">
                  <div className="flex flex-col justify-start h-full w-1/2">
                     <EnergyBar
                        currentLevel={currentUser?.user?.stats.energy.toFixed(
                           0
                        )}
                        maxLevel={
                           configData?.limits.energy.toFixed(0) || maxEnergy
                        }
                     />

                     <ProgressBar
                        currentLevel={currentUser?.user?.stats.body.toFixed(0)}
                        maxLevel={
                           configData?.limits.body.toFixed(0) || maxLevel
                        }
                        title={"Body"}
                     />

                     <ProgressBar
                        currentLevel={currentUser?.user?.stats.wealth.toFixed(
                           0
                        )}
                        maxLevel={
                           configData?.limits.wealth.toFixed(0) || maxLevel
                        }
                        title={"Wealth"}
                     />

                     <div className="font-bold text-xl text-green-500 flex items-start justify-evenly w-[60%] px-4">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           fill="white"
                           className="size-6"
                        >
                           <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
                        </svg>

                        <span>0</span>
                     </div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-1/3 gap-2 relative">
                     <div className="absolute top-1/4 left-0 flex flex-col items-center justify-end pl-4 w-1/3">
                        <p className="text-green-400 text-md">LVL</p>
                        <p className="text-green-400 text-md">
                           {configData?.level || 0}
                        </p>
                     </div>
                     <img
                        //onClick={togglePopup}
                        alt="profile"
                        src={ProfileIcon}
                        className="w-[100px] h-auto max-w-[120px] cursor-pointer"
                     />

                     <div className="bg-[#932828] border-b-2 border-b-[#4C0B0B] w-[100px] flex items-center justify-evenly p-1">
                        <img
                           alt="no boost"
                           src={NoBoostIcon}
                           className="w-auto h-auto max-w-[162px] cursor-pointer"
                        />
                        <span className="font-bold text-xs">NO BOOST</span>
                     </div>
                  </div>
               </div>
               {isPopupOpen && <Popup onClose={togglePopup} />}
            </>
         )}
      </>
   );
};

export default UserInfo;
