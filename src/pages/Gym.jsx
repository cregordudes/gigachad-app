import { lazy } from "react";

const GymScene = lazy(() => import("../components/GymScene"));

const Gym = () => {
   return (
      <div className="relative">
         <GymScene />
      </div>
   );
};

export default Gym;
