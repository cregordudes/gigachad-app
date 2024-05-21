import React from "react";
import LoadingImage from "../assets/Loading.png";
import Dumbell from "../assets/dumbell.png";

const LoadingPage = () => {
   return (
      <div className="relative">
         <img
            className="absolute top-1/4 left-1/4 w-52 rotate"
            src={Dumbell}
            alt="dumbell"
         />
         <img
            src={LoadingImage}
            alt="loading"
            className="w-full h-full object-cover"
         />
      </div>
   );
};

export default LoadingPage;
