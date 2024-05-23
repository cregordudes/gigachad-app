import HomeImage from "../assets/Home.png";
import HomeGif from "../assets/Home.gif";
import HomeCharacter from "../assets/characterHome.png";
import { memo } from "react";
import { Link } from "react-router-dom";

const HomeScene = memo(() => {
   return (
      <div className="relative">
         <img src={HomeGif} alt="home" loading="lazy" />
         <div>
            <span className="font-bold text-4xl text-green-500 absolute top-[350px] left-[190px]">
               LVL 3
            </span>
            <img
               src={HomeCharacter}
               alt="chad"
               className="w-[220px] absolute top-[380px] left-[120px]"
               loading="lazy"
            />
            <button
               className="absolute top-[68%] w-[120px] flex justify-center rounded-none border-transparent py-2 cursor-pointer font-medium text-base bg-[#009AE0] border-b-4 border-b-[#005791] text-gray-600
                   after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-6 after:absolute after:top-[10px] after:-right-2 
                     "
               //before:bg-[#009AE0] before:border-b-4 before:border-b-[#005791]  before:shadow-lg before:w-2 before:h-6 before:absolute before:top-2 before:left-0.5
            >
               3H 24MIN
            </button>
         </div>
      </div>
   );
});

export default HomeScene;
