import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
   const navigate = useNavigate();

   useEffect(() => {
      setTimeout(() => navigate("/"), 1500);
   }, []);

   return (
      <h1 className="text-3xl font-bold underline">Oooops, an error occured</h1>
   );
};

export default ErrorPage;
