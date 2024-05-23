import WorkImg from "../assets/Work.png";
import WorkCharacter from "../assets/characterWork.png";

const WorkScene = () => {
   return (
      <>
         <img src={WorkImg} alt="office" loading="lazy" />
         <span className="font-bold text-4xl text-green-400 absolute top-60 right-[95px]">
            LVL 3
         </span>
         <img
            src={WorkCharacter}
            alt="chad"
            className="absolute bottom-36 left-[90px]"
            loading="lazy"
         />
      </>
   );
};

export default WorkScene;
