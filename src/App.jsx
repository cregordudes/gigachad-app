import { useEffect } from "react";
import "./App.css";
import AppRouter from "./components/AppRouter";
import WebApp from "@twa-dev/sdk";

function App() {
   useEffect(() => {
      WebApp.expand();
      console.log(WebApp?.initDataUnsafe?.user);
      WebApp.sendData(WebApp?.platform);

      //   if (WebApp.initData) {
      //      WebApp.sendData("App started");
      //      WebApp.sendData(initData);

      //      if (WebApp.WebAppInitData) {
      //         console.log(WebApp.WebAppInitData);
      //         WebApp.sendData(WebApp.WebAppInitData);
      //         WebApp.
      //      }

      //      if (WebApp.WebAppUser) {
      //         console.log(WebApp.WebAppUser);
      //         WebApp.sendData(WebApp.WebAppUser);
      //      }

      //      WebApp.onEvent("mainButtonClicked", () => {
      //         WebApp.sendData("mainButtonClicked");
      //      });

      //      WebApp.onEvent("message", async (msg) => {
      //         const chatId = msg.chat.id;
      //         const text = msg.text;
      //         if (text) {
      //            await WebApp.sendText(chatId, "Hello!");
      //         }
      //      });
      //   }
   }, []);

   console.log(WebApp);
   return <AppRouter />;
}

export default App;
