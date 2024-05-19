import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
   const { pathname } = useLocation();

   return (
      <nav className="w-full h-32 absolute bottom-0 left-0 flex justify-center items-center z-10">
         {pathname === "/" ? (
            <ul className="w-2/3 flex justify-around">
               <li className="flex bg-slate-300 rounded border-transparent px-4 py-2 cursor-pointer font-medium text-base">
                  <Link to={"/gym"} className="text-black">
                     Gym
                  </Link>
               </li>
               <li className="flex bg-slate-300 rounded border-transparent px-4 py-2 cursor-pointer font-medium text-base">
                  Rest
               </li>
               <li className="flex bg-slate-300 rounded border-transparent px-4 py-2 cursor-pointer font-medium text-base">
                  <Link to={"/work"} className="text-black">
                     Work
                  </Link>
               </li>
            </ul>
         ) : (
            <ul className="w-2/3 flex justify-around">
               <li className="flex bg-slate-300 rounded border-transparent px-4 py-2 cursor-pointer font-medium text-base">
                  <Link to={"/"} className="text-black">
                     Back
                  </Link>
               </li>
               <li className="flex bg-slate-300 rounded border-transparent px-4 py-2 cursor-pointer font-medium text-base">
                  Start
               </li>
            </ul>
         )}
      </nav>
   );
};

export default Navbar;
