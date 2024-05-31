import WebApp from "@twa-dev/sdk";
import React from "react";

const Frens = () => {
   const id = WebApp?.initDataUnsafe.user.id;
   const url = `https://t.me/TonTwaBot?start=${id}`;
   const text = `Join GIGA community by clicking the link and becoming gigachad!`;

   return (
      <div className="w-screen h-screen bg-white flex justify-center items-center">
         <a
            className="w-auto h-auto p-4 bg-black text-white"
            href={`https://t.me/share/url?url=${url}&text=${text}`}
         >
            Invite a friend
         </a>
      </div>
   );
};

export default Frens;
