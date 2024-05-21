import { lazy } from "react";

const HomeScene = lazy(() => import("../components/HomeScene"));

const Home = () => {
   return (
      <div className="relative">
         <HomeScene />
      </div>
   );
};

export default Home;
