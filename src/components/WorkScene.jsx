import WorkImg from "../assets/Work.png";
import WorkCharacter from "../assets/characterWork.png";

const WorkScene = () => {
   return (
      <>
         <img src={WorkImg} alt="office" loading="lazy" />
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
