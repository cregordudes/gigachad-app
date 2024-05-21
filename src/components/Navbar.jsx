import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
   const { pathname } = useLocation();

   return (
      <nav className="w-full h-32 absolute bottom-0 left-0 flex justify-center items-center z-10">
         {pathname === "/gigachad-app/" ? (
            <>
               <div className="w-60 h-10 flex justify-around relative">
                  <button
                     className="flex rounded-none border-transparent py-2 cursor-pointer font-medium text-base bg-[#009AE0] border-b-4 border-b-[#005791] text-white
                     before:bg-[#009AE0] before:border-b-4 before:border-b-[#005791]  before:shadow-lg before:w-2 before:h-4 before:absolute before:top-3 before:left-8
                  after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-4 after:absolute after:top-3 after:right-8
                  "
                  >
                     <Link to={"/gigachad-app/home"} className="">
                        Become GigaChad
                     </Link>
                  </button>
               </div>
            </>
         ) : pathname === "/gigachad-app/home" ? (
            <>
               <ul className="w-2/3 flex justify-around">
                  <li className="flex rounded border-transparent px-4 py-2 cursor-pointer font-medium text-base">
                     <Link to={"/gigachad-app/gym"} className="">
                        Gym
                     </Link>
                  </li>
                  <li className="flex rounded border-transparent px-4 py-2 cursor-pointer font-medium text-base">
                     Rest
                  </li>
                  <li className="flex rounded border-transparent px-4 py-2 cursor-pointer font-medium text-base">
                     <Link to={"/gigachad-app/work"} className="">
                        Work
                     </Link>
                  </li>
               </ul>
            </>
         ) : (
            <ul className="w-2/3 flex justify-around">
               <li className="flex  rounded border-transparent px-4 py-2 cursor-pointer font-medium text-base">
                  <Link to={"/gigachad-app/home"} className="">
                     Back
                  </Link>
               </li>
               <li className="flex  rounded border-transparent px-4 py-2 cursor-pointer font-medium text-base">
                  Start
               </li>
            </ul>
         )}
      </nav>
   );
};

export default Navbar;
