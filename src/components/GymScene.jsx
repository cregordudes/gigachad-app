import { Link } from "react-router-dom";
//import GymImage from "../assets/Gym1.gif";
//import GymImage from "../assets/gym_bg.webp";
import GymImage from "../assets/gymFHD.png";
//import GymCharacter from "../assets/characterGym.png";
import HomeCharacter from "../assets/characterHome.png";

import BgImage from "../assets/page_bg.png";

const Gym = () => {
   return (
      //<div className="relative" style={{ backgroundImage: `${BgImage}` }}>
      <>
         <img
            src={GymImage}
            alt="gym"
            loading="lazy"
            className="w-screen h-screen object-cover"
         />
         {/*<span className="font-bold text-4xl text-green-400 absolute top-56 right-10">
            LVL 3
         </span>
         <img
            src={GymCharacter}
            alt="chad"
            className="absolute bottom-56 left-44"
            loading="lazy"
         />*/}
         <span className="font-bold text-4xl text-green-400 absolute top-[310px] left-[230px]">
            LVL 3
         </span>
         <img
            src={HomeCharacter}
            alt="chad"
            className="w-[220px] absolute top-[340px] left-[165px]"
            loading="lazy"
         />

         <button
            className="absolute top-1/2 w-[80px] flex justify-center rounded-none border-transparent py-2 cursor-pointer font-medium text-base bg-[#009AE0] border-b-4 border-b-[#005791] text-white
                   after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-6 after:absolute after:top-[10px] after:-right-2 
                     "
            //before:bg-[#009AE0] before:border-b-4 before:border-b-[#005791]  before:shadow-lg before:w-2 before:h-6 before:absolute before:top-2 before:left-0.5
         >
            <Link to={"/tap"} className="">
               Start
            </Link>
         </button>
         <img src={GymImage} alt="gym" loading="lazy" />
         {/*</div>*/}
      </>
   );
};

export default Gym;
