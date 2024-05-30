//import HomeImage from "../assets/Home.png";
//import HomeGif from "../assets/Home.gif";
//import HomeGif from "../assets/bedroom_bg.webp";
import HomeGif from "../assets/homeFHD.png";
import HomeCharacter from "../assets/characterHome.png";

import { Link } from "react-router-dom";

const HomeScene = () => {
   return (
      <div className="relative w-full h-screen grid grid-rows-12">
         <img
            src={HomeGif}
            alt="home"
            loading="lazy"
            className="row-span-full col-span-full w-screen h-screen object-cover"
         />
         <span className="row-start-6 col-start-1 row-span-1 col-span-full flex items-end justify-end pb-20 w-[80%] font-bold text-4xl text-green-400">
            LVL 3
         </span>
         <div className="row-start-7 col-start-3 row-span-5 col-span-full flex items-start justify-end pb-0">
            <img
               src={HomeCharacter}
               alt="chad"
               loading="lazy"
               className="w-auto h-[95%]"
            />
         </div>
         <div className="row-start-10 col-start-1 row-span-1 col-span-full flex items-center justify-start pr-10">
            <button
               className="arcade absolute top-[68%] w-[120px] flex justify-center rounded-none border-transparent text-lg py-2 cursor-pointer font-medium  bg-[#009AE0] border-b-4 border-b-[#005791] text-[#005791]
                   after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-6 after:absolute after:top-[10px] after:-right-2 
                     "
            >
               3H 24MIN
            </button>
         </div>
      </div>
   );
};

export default HomeScene;
