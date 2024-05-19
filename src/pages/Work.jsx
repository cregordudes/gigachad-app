import WorkImage from "../assets/Work.png";
import WorkCharacter from "../assets/characterWork.png";

const Work = () => {
   return (
      <div className="relative">
         <img src={WorkImage} />
         <img src={WorkCharacter} className="absolute bottom-36 left-[90px]" />
      </div>
   );
};

export default Work;
