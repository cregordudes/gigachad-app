//import WorkImg from "../assets/Work.png";
import WorkImg from "../assets/office_bg.webp";
//import WorkCharacter from "../assets/characterWork.png";
import WorkCharacter from "../assets/char_lvl_1.webp";
import TasksIcon from "../assets/tasksIcon.svg";

const WorkScene = () => {
   return (
      <>
         <img src={WorkImg} alt="office" loading="lazy" />

         <span className="font-bold text-4xl text-green-400 absolute top-72 right-24">
            LVL 3
         </span>
         <img
            src={WorkCharacter}
            alt="chad"
            className="absolute bottom-20 left-24"
            loading="lazy"
         />
         <div>
            <img
               alt="boosts"
               src={TasksIcon}
               className="absolute top-[35%] left-4 w-16 h-auto cursor-pointer"
            />
            <span className="font-bold text-md text-green-400 absolute top-[45%] left-6">
               Tasks
            </span>
         </div>
      </>
   );
};

export default WorkScene;
