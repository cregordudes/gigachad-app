import { useEffect } from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import WebApp from "@twa-dev/sdk";

function App() {
   useEffect(() => {
      WebApp?.expand();
      console.log("WEB APP USER: ", WebApp?.initDataUnsafe?.user);

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
   }, []);

   return <AppRouter />;
}

export default App;
