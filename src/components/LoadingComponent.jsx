import React from "react";
import Dumbell from "../assets/dumbell.png";

const LoadingComponent = () => {
   return (
      <div className="relative w-full h-screen grid grid-rows-6 bg-black opacity-50">
         <div className="row-start-3 col-start-1 row-span-1 col-span-full flex items-center justify-center">
            <img className="w-52 rotate" src={Dumbell} alt="dumbell" />
         </div>
      </div>
   );
};

export default LoadingComponent;
