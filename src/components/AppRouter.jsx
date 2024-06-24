import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./Layout.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import LoadingPage from "../pages/LoadingPage.jsx";
import Frens from "../pages/Frens.jsx";
import PrivateRoute from "../components/PrivateRoute";

const Home = lazy(() => import("../pages/Home.jsx"));
const Gym = lazy(() => import("../pages/Gym.jsx"));
const Work = lazy(() => import("../pages/Work.jsx"));
const Main = lazy(() => import("../pages/Main.jsx"));
const GymTapPage = lazy(() => import("../pages/GymTapPage.jsx"));

const AppRouter = () => {
   return (
      <Suspense fallback={<LoadingPage />}>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Main />} />

               <Route
                  path="frens"
                  element={
                     <PrivateRoute
                        allowedStates={["START", "REST", "GYM", "WORK"]}
                     />
                  }
               >
                  <Route index element={<Frens />} />
               </Route>

               <Route
                  path="home"
                  element={<PrivateRoute allowedStates={["START", "REST"]} />}
               >
                  <Route index element={<Home />} />
               </Route>

               <Route
                  path="gym"
                  element={<PrivateRoute allowedStates={["START"]} />}
               >
                  <Route index element={<Gym />} />
               </Route>

               <Route
                  path="tap"
                  element={<PrivateRoute allowedStates={["START", "GYM"]} />}
               >
                  <Route index element={<GymTapPage />} />
               </Route>

               <Route
                  path="work"
                  element={<PrivateRoute allowedStates={["START", "WORK"]} />}
               >
                  <Route index element={<Work />} />
               </Route>

               <Route path="*" element={<ErrorPage />} />
            </Route>
         </Routes>
      </Suspense>
   );
};

export default AppRouter;
