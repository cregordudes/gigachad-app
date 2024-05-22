import { Link } from "react-router-dom";
import GymImage from "../assets/Gym.png";
import GymCharacter from "../assets/characterGym.png";
import { memo } from "react";

const Gym = memo(() => {
   return (
      <div className="relative">
         <img
            src={GymCharacter}
            alt="chad"
            className="absolute bottom-56 left-36"
            loading="lazy"
         />

         <button
            className="absolute top-1/2 w-[80px] flex justify-center rounded-none border-transparent py-2 cursor-pointer font-medium text-base bg-[#009AE0] border-b-4 border-b-[#005791] text-white
                   after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-6 after:absolute after:top-[10px] after:-right-2 
                     "
            //before:bg-[#009AE0] before:border-b-4 before:border-b-[#005791]  before:shadow-lg before:w-2 before:h-6 before:absolute before:top-2 before:left-0.5
         >
            <Link to={"/gigachad-app/tap"} className="">
               Start
            </Link>
         </button>
         <img src={GymImage} alt="gym" loading="lazy" />
      </div>
   );
});

export default Gym;
