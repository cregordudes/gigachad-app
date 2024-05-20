import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Gym from "../pages/Gym.jsx";
import Work from "../pages/Work.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Layout from "./Layout.jsx";

const AppRouter = () => {
   return (
      <Routes>
         <Route path="/gigachad-app/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="gym" element={<Gym />} />
            <Route path="work" element={<Work />} />
         </Route>
         <Route path="*" element={<ErrorPage />} />
      </Routes>
   );
};

export default AppRouter;
