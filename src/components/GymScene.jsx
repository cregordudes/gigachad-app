import GymImage from "../assets/Gym.png";
import GymCharacter from "../assets/characterGym.png";
import TouchCounter from "../components/TouchCounter";

const Gym = () => {
   return (
      <div className="relative">
         <TouchCounter>
            <img src={GymImage} alt="gym" />
            <img
               src={GymCharacter}
               alt="chad"
               className="absolute bottom-56 left-36"
            />
         </TouchCounter>
      </div>
   );
};

export default Gym;
