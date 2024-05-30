import { Link } from "react-router-dom";
import GymImage from "../assets/gymFHD.png";
import GymCharacter from "../assets/char_lvl_1.webp";

const Gym = () => {
   return (
      <div className="relative w-full h-screen grid grid-rows-12">
         <img
            src={GymImage}
            alt="gym"
            loading="lazy"
            className="row-span-full col-span-full w-full h-full object-cover"
         />

         <span className="row-start-6 col-start-1 row-span-1 col-span-full flex items-center justify-center pt-10 font-bold text-4xl  text-green-400">
            LVL 3
         </span>

         <div className="row-start-7 col-start-1 row-span-5 col-span-full flex items-center justify-center pb-4">
            <img
               src={GymCharacter}
               alt="chad"
               className="w-auto h-[95%] -scale-x-100"
               loading="lazy"
            />
         </div>

         <div className="row-start-10 col-start-1 row-span-1 col-span-full flex items-center justify-start pr-10">
            <button className="arcade w-[80px] flex justify-center rounded-none border-transparent py-2 cursor-pointer font-medium text-lg bg-[#009AE0] border-b-4 border-b-[#005791] text-white relative">
               <Link to={"/tap"} className="">
                  Start
               </Link>
               <div className="absolute top-[10px] -right-2 w-2 h-6 bg-[#009AE0] shadow-lg"></div>
            </button>
         </div>
      </div>
   );
};

export default Gym;
