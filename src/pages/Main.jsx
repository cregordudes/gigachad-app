import React from "react";
import MainImage from "../assets/Main.png";

const Main = () => {
   return (
      <div className="relative">
         <img
            src={MainImage}
            alt="main"
            className="w-full h-full object-cover"
         />
      </div>
   );
};

export default Main;
