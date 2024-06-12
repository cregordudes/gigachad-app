import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../stores/userStore";

const PrivateRoute = ({ allowedStates }) => {
   const currentUser = useUserStore((state) => state.currentUser);
   let redirectTo = "";

   if (
      currentUser?.user.state === "START" ||
      currentUser?.user.state === "REST"
   ) {
      redirectTo = "/home";
   } else if (currentUser?.user.state === "GYM") {
      redirectTo = "/tap";
   } else if (currentUser?.user.state === "WORK") {
      redirectTo = "/work";
   }

   // If the current user's state is not in the allowed states, redirect to the correct page
   if (!allowedStates.includes(currentUser?.user.state)) {
      return <Navigate to={redirectTo} />;
   }

   // If the current user's state is in the allowed states, render the requested component
   return <Outlet />;
};

export default PrivateRoute;
