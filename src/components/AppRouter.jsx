import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Gym from "../pages/Gym.jsx";
import Work from "../pages/Work.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Layout from "./Layout.jsx";

const AppRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/gym" element={<Gym />} />
            <Route path="/work" element={<Work />} />
            <Route path="*" element={<ErrorPage />} />
         </Route>
      </Routes>
   );
};

export default AppRouter;
