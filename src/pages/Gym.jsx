import GymImage from "../assets/Gym.png";
import GymCharacter from "../assets/characterGym.png";

const Gym = () => {
   return (
      <div className="relative">
         <img src={GymImage} alt="gym" />
         <img
            src={GymCharacter}
            alt="chad"
            className="absolute bottom-56 left-36"
         />
      </div>
   );
};

export default Gym;
