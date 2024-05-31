import React from "react";
import LoadingImage from "../assets/Loading.png";
import Dumbell from "../assets/dumbell.png";

const LoadingPage = () => {
   return (
      <div className="relative w-full h-screen grid grid-rows-6">
         <img
            src={LoadingImage}
            alt="loading"
            className="row-span-full col-span-full w-full h-full object-cover"
         />

         <div className="row-start-3 col-start-1 row-span-1 col-span-full flex items-center justify-center">
            <img className="w-52 rotate" src={Dumbell} alt="dumbell" />
         </div>
      </div>
   );
};

export default LoadingPage;
