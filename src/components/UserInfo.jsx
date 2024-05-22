import { useState } from "react";
import Popup from "./Popup";
import ProgressBar from "./ProgressBar.jsx";
import { useLocation } from "react-router-dom";
import Boosts from "../assets/boostIcon.svg";

const UserInfo = () => {
   const { pathname } = useLocation();

   const [isPopupOpen, setIsPopupOpen] = useState(false);
   const [currentLevel, setCurrentLevel] = useState(3);

   const maxLevel = 10;

   const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
   };
   return (
      <>
         {pathname === "/gigachad-app/" ||
         pathname == "/gigachad-app/tap" ? null : (
            <>
               <div className="w-full absolute top-0 left-0 flex justify-around items-center z-10 h-40 bg-gray-900 bg-opacity-50">
                  <div className="flex flex-col justify-evenly h-full w-2/3">
                     <button>energy</button>

                     <ProgressBar
                        currentLevel={currentLevel}
                        maxLevel={maxLevel}
                     />

                     <button>wealth lvl</button>
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
