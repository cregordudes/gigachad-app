import WorkImg from "../assets/workFHD.png";
import WorkCharacter from "../assets/char_lvl_1.webp";
import TasksIcon from "../assets/tasksIcon.svg";

const WorkScene = () => {
   return (
      <div className="relative w-full h-screen grid grid-rows-12">
         <img
            src={WorkImg}
            alt="office"
            loading="lazy"
            className="row-span-full col-span-full w-screen h-screen object-cover"
         />

         <span className="row-start-6 col-start-1 row-span-1 col-span-full flex items-end justify-center pb-20 font-bold text-4xl text-green-400">
            LVL 3
         </span>

         <div className="row-start-6 col-start-3 row-span-5 col-span-full flex items-end justify-center pb-0">
            <img
               src={WorkCharacter}
               alt="chad"
               loading="lazy"
               className="w-auto h-[95%]"
            />
         </div>

         <div className="row-start-4 col-start-1 row-span-3 col-span-full flex items-start justify-start pl-4">
            <div className="flex items-around justify-center flex-col ">
               <img
                  alt="boosts"
                  src={TasksIcon}
                  className="w-16 h-auto cursor-pointer"
               />
               <span className="font-bold text-md text-green-400">Tasks</span>
            </div>
         </div>
      </div>
   );
};

export default WorkScene;
