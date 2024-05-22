import HomeImage from "../assets/Home.png";
import HomeGif from "../assets/Home.gif";
import HomeCharacter from "../assets/characterHome.png";
import { memo } from "react";

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
         </div>
      </div>
   );
});

export default HomeScene;
