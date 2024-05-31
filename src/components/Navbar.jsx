import { Link, useLocation } from "react-router-dom";
import GymIcon from "../assets/gymIcon.svg";
import HomeIcon from "../assets/restIcon.svg";
import WorkIcon from "../assets/workIcon.svg";
import FrensIcon from "../assets/frensIcon.svg";

const Navbar = () => {
   const { pathname } = useLocation();

   const navItems = [
      { id: 1, link: "gym", name: "Gym", icon: GymIcon },
      { id: 2, link: "home", name: "Rest", icon: HomeIcon },
      { id: 3, link: "work", name: "Work", icon: WorkIcon },
      { id: 4, link: "frens", name: "Frens", icon: FrensIcon },
   ];

   return (
      <>
         {pathname == "/" ? (
            <nav className="arcade w-full h-8 absolute top-3/4 left-0 flex justify-end items-center z-10">
               <div className="w-[215px] h-10 flex justify-end relative">
                  <button
                     className="w-[205px] flex justify-center rounded-none border-transparent py-2 cursor-pointer font-medium text-base bg-[#009AE0] border-b-4 border-b-[#005791] text-white
                     before:bg-[#009AE0] before:border-b-4 before:border-b-[#005791]  before:shadow-lg before:w-2 before:h-6 before:absolute before:top-2 before:left-0.5"
                  >
                     <Link to={"/home"} className="capitalize">
                        Become GigaChad
                     </Link>
                  </button>
               </div>
            </nav>
         ) : pathname == "/tap" ? null : (
            <nav className="arcade text-capitalize w-full  absolute bottom-0 left-0 flex justify-center items-end z-10">
               <ul className="w-full min-h-[85px] h-[calc(100vh-800px)] max-h-[130px] flex justify-around items-center  bg-black bg-opacity-85 pt-2">
                  {navItems.map((item) => (
                     <div className="flex justify-center items-center w-[72px] h-[65px]">
                        <div className="w-1 h-5 bg-[#424C4D]  border-b-4 border-b-[#27383A]" />
                        <li
                           key={item.id}
                           className="w-16 h-auto max-h-[65px] flex border-transparent px-2 py-2 cursor-pointer font-medium text-sm bg-[#424C4D] border-b-4 border-b-[#27383A] shadow-lg"
                           //before:bg-[#009AE0] before:border-b-4 before:border-b-[#005791]  before:shadow-lg before:w-2 before:h-6 before:
                           //after:bg-[#009AE0]  after:shadow-lg after:w-2 after:h-4 after:absolute after:top-3 after:right-8
                        >
                           <Link to={`/${item.link}`} className="">
                              <img
                                 src={item.icon}
                                 alt="icon"
                                 className="w-full h-auto object-cover"
                                 loading="lazy"
                              />
                              <span className="text-gray-400">{item.name}</span>
                           </Link>
                        </li>
                        <div className="w-1 h-5 bg-[#424C4D]" />
                     </div>
                  ))}
               </ul>
            </nav>
         )}
      </>
   );
};

export default Navbar;
