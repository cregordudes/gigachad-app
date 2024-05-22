import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
   const { pathname } = useLocation();

   return (
      <>
         {pathname == "/gigachad-app/" ? (
            <nav className="w-full h-8 absolute top-3/4 left-0 flex justify-end items-center z-10">
               <div className="w-[215px] h-10 flex justify-end relative">
                  <button
                     className="w-[205px] flex justify-center rounded-none border-transparent py-2 cursor-pointer font-medium text-base bg-[#009AE0] border-b-4 border-b-[#005791] text-white
                     before:bg-[#009AE0] before:border-b-4 before:border-b-[#005791]  before:shadow-lg before:w-2 before:h-6 before:absolute before:top-2 before:left-0.5"
                     //after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-4 after:absolute after:top-3 after:right-8
                  >
                     <Link to={"/gigachad-app/home"} className="">
                        Become GigaChad
                     </Link>
                  </button>
               </div>
            </nav>
         ) : pathname == "/gigachad-app/tap" ? null : (
            <nav className="w-full h-32 absolute bottom-0 left-0 flex justify-center items-center z-10">
               <ul className="w-2/3 flex justify-around">
                  <li className="flex rounded border-transparent px-4 py-2 cursor-pointer font-medium text-base">
                     <Link to={"/gigachad-app/gym"} className="">
                        Gym
                     </Link>
                  </li>
                  <li className="flex rounded border-transparent px-4 py-2 cursor-pointer font-medium text-base">
                     <Link to={"/gigachad-app/home"} className="">
                        Rest
                     </Link>
                  </li>
                  <li className="flex rounded border-transparent px-4 py-2 cursor-pointer font-medium text-base">
                     <Link to={"/gigachad-app/work"} className="">
                        Work
                     </Link>
                  </li>
                  <li className="flex rounded border-transparent px-4 py-2 cursor-pointer font-medium text-base">
                     <Link to={"#"} className="">
                        Frens
                     </Link>
                  </li>
               </ul>
            </nav>
         )}
      </>
   );
};

export default Navbar;
