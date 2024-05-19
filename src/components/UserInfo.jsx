import { useState } from "react";
import Popup from "./Popup";

const UserInfo = () => {
   const [isPopupOpen, setIsPopupOpen] = useState(false);

   const togglePopup = () => {
      setIsPopupOpen(!isPopupOpen);
   };
   return (
      <>
         <div className="w-full absolute top-0 left-0 flex justify-around items-center z-10 h-40">
            <div className="flex flex-col justify-evenly h-full">
               <button>energy</button>
               <button>body lvl</button>
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
   );
};

export default UserInfo;
