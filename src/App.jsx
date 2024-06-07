import { useEffect } from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import WebApp from "@twa-dev/sdk";
import { useUserStore } from "./stores/userStore";

function App() {
   const { currentUser, setCurrentUser } = useUserStore();

   useEffect(() => {
      WebApp?.expand();
      WebApp?.enableClosingConfirmation();
      console.log("WEB APP USER: ", WebApp?.initDataUnsafe?.user);

      if (!currentUser?.user?.telegram?.id) {
         setCurrentUser(WebApp?.initDataUnsafe?.user);
      }

      //if (!WebApp?.initDataUnsafe?.user) {
      //   close();
      //}

      if (
         WebApp?.platform !== "android" &&
         WebApp?.platform !== "ios" &&
         WebApp?.platform !== "android_x"
      ) {
         try {
            WebApp?.showAlert(
               `Please open this app on your mobile phone or tablet, currently open on ${WebApp?.platform}`,
               () => {
                  WebApp?.close();
               }
            ).then(() => {
               WebApp?.close();
            });
         } catch (error) {
            console.error("Error showing alert:", error);
         } finally {
            WebApp?.close();
         }
      }

      console.log("WEB APP PLATFORM DATA:", WebApp?.platform);
   }, [WebApp?.initDataUnsafe?.user?.id, currentUser?.user?.telegram?.id]);

   //useEffect(() => {
   //   WebApp.onEvent("viewportChanged", (e) => {
   //      console.log(e);
   //      e.preventDefault();
   //   });
   //}, []);

   return <AppRouter />;
}

export default App;
