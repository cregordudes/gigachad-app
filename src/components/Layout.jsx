import { Suspense, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import UserInfo from "./UserInfo.jsx";
import LoadingPage from "../pages/LoadingPage.jsx";

const Layout = () => {
   const swipeElement = useRef(null);

   const [startY, setStartY] = useState(0);
   const [offsetY, setOffsetY] = useState(0);

   useEffect(() => {
      console.log("useEffect");

      const element = swipeElement.current;

      const handleTouchStart = (e) => {
         const touch = e.touches[0];
         setStartY(touch.clientY);
      };

      const handleTouchMove = (e) => {
         //const touch = e.touches[0];
         //const currentY = touch.clientY;
         //const yOffset = currentY - startY;
         //setOffsetY(yOffset);
         e.preventDefault();

         //// Prevent default behavior if swiping down
         //if (yOffset > 0) {
         //   e.preventDefault();
         //}
      };

      const handleTouchEnd = () => {
         setStartY(0);
         setOffsetY(0);
      };

      element.addEventListener("touchstart", handleTouchStart);
      element.addEventListener("touchmove", handleTouchMove, {
         passive: false,
      });
      element.addEventListener("touchend", handleTouchEnd);

      return () => {
         element.removeEventListener("touchstart", handleTouchStart);
         element.removeEventListener("touchmove", handleTouchMove);
         element.removeEventListener("touchend", handleTouchEnd);
      };
   }, [startY]);

   // At the end I monitor whether offsetX has changed or not, if it has, I call the hook again and enable preventDefault()
   return (
      <section
         id="layout"
         className="w-full max-w-xl h-screen relative overflow-hidden"
         ref={swipeElement}
      >
         <Suspense
            fallback={
               <div className="w-full h-full flex justify-center items-center">
                  <LoadingPage />
               </div>
            }
         >
            <UserInfo />
            <Outlet />
            <Navbar />
         </Suspense>
      </section>
   );
};

export default Layout;
