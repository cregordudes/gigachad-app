import { lazy } from "react";

const GymTapScene = lazy(() => import("../components/GymTapScene"));

const GymTapPage = () => {
   return (
      <div className="relative">
         <GymTapScene />
      </div>
   );
};

export default GymTapPage;
