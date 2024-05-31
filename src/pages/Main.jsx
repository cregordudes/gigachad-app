import React from "react";
import MainImage from "../assets/Main.png";

const Main = () => {
   return (
      <div className="relative">
         <img
            src={MainImage}
            alt="main"
            className="w-screen h-screen object-cover"
         />
      </div>
   );
};

export default Main;
