import { useState } from "react";
import Popup from "./Popup";
import ProgressBar from "./ProgressBar.jsx";
import { useLocation } from "react-router-dom";

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
         {pathname === "/gigachad-app/" ? null : (
            <>
               <div className="w-full absolute top-0 left-0 flex justify-around items-center z-10 h-40">
                  <div className="flex flex-col justify-evenly h-full w-2/3">
                     <button>energy</button>

                     <ProgressBar
                        currentLevel={currentLevel}
                        maxLevel={maxLevel}
                     />

                     <button>wealth lvl</button>
                  </div>
                  <div className="flex justify-center">
                     <button onClick={togglePopup}>Boosts</button>
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
