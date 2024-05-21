import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import UserInfo from "./UserInfo.jsx";
import LoadingPage from "../pages/LoadingPage.jsx";

const Layout = () => {
   return (
      <section
         id="layout"
         className="w-full max-w-xl h-screen relative overflow-hidden"
      >
         <Suspense
            fallback={
               <div className="w-full h-full flex justify-center items-center">
                  <LoadingPage />
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
