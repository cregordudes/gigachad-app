import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Gym from "../pages/Gym.jsx";
import Work from "../pages/Work.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Layout from "./Layout.jsx";
import Main from "../pages/Main.jsx";
import GymTapPage from "../pages/GymTapPage.jsx";

const AppRouter = () => {
   return (
      <Routes>
         <Route path="/gigachad-app/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="home" element={<Home />} />
            <Route path="gym" element={<Gym />} />
            <Route path="work" element={<Work />} />
            <Route path="tap" element={<GymTapPage />} />
         </Route>
         <Route path="*" element={<ErrorPage />} />
      </Routes>
   );
};

export default AppRouter;
