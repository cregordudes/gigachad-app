import { lazy } from "react";

const WorkScene = lazy(() => import("../components/WorkScene"));

const Work = () => {
   return (
      <div className="relative">
         <WorkScene />
      </div>
   );
};

export default Work;
