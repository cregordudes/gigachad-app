import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import UserInfo from "./UserInfo.jsx";

const Layout = () => {
   return (
      <div id="layout" className="max-w-full relative">
         <UserInfo />
         <Outlet />
         <Navbar />
      </div>
   );
};

export default Layout;
