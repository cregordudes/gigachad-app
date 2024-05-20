import HomeImage from "../assets/Home.png";
import HomeCharacter from "../assets/characterHome.png";

const Home = () => {
   return (
      <div className="relative">
         <img src={HomeImage} alt="home" />
         <img
            src={HomeCharacter}
            alt="chad"
            className="absolute top-[350px] left-11"
         />
      </div>
   );
};

export default Home;
