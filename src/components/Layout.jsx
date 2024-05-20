import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import UserInfo from "./UserInfo.jsx";
import BeatLoader from "react-spinners/BeatLoader";

const Layout = () => {
   return (
      <section id="layout" className="w-full max-w-xl h-screen relative">
         <Suspense
            fallback={
               <div className="w-full h-full flex justify-center items-center">
                  <BeatLoader color="black" />
               </div>
            }
         >
            <UserInfo />
            <Outlet />
            <Navbar />
         </Suspense>
      </section>
   );
};

export default Layout;
