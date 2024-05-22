import WebApp from "@twa-dev/sdk";
import GymImage from "../assets/GymTap.png";
import GymCharacter from "../assets/training.gif";
import TouchCounter from "../components/TouchCounter";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const GymTapScene = () => {
   const navigate = useNavigate();

   useEffect(() => {
      WebApp.BackButton.show();
      WebApp.BackButton.onClick(() => navigate("/gigachad-app/gym"));

      return () => {
         WebApp.BackButton.hide();
      };
   }, []);

   return (
      <div className="relative">
         <TouchCounter>
            <img
               src={GymCharacter}
               alt="chad"
               className="absolute bottom-72 left-8 -scale-x-100"
               loading="lazy"
            />

            <div className="absolute bottom-24 left-0 h-24 w-full bg-red-500 flex justify-center items-center text-3xl">
               Tap&nbsp;&nbsp;to&nbsp;&nbsp;run
            </div>
            <img src={GymImage} alt="gym" loading="lazy" />
         </TouchCounter>
      </div>
   );
};

export default GymTapScene;
