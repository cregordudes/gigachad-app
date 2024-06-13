import WebApp from "@twa-dev/sdk";
import React, { useEffect } from "react";
import FrensImage from "../assets/Frens_bg.png";
import InvitedFriend from "../components/InvitedFriend";
import { useNavigate } from "react-router-dom";

const Frens = () => {
   const id = WebApp?.initDataUnsafe.user.id;
   //const url = `https://t.me/TonTwaBot?start_param=${id}`;
   const url = `https://t.me/localtesting228bot?start_param=${id}`;
   const text = `Join GIGA community by clicking the link and becoming gigachad!`;

   const navigate = useNavigate();

   useEffect(() => {
      WebApp.BackButton.show();
      WebApp.BackButton.onClick(() => navigate("/home"));

      return () => {
         WebApp.BackButton.hide();
      };
   }, []);

   const frens = [
      {
         id: 1,
         name: "John",
         level: 1,
      },
      {
         id: 2,
         name: "Jane",
         level: 1,
      },
   ];

   return (
      <div className="relative w-full h-screen flex flex-col justify-evenly items-center overflow-auto z-50">
         <div className="w-full h-auto z-20 pt-2">
            <p className="text-4xl text-white arcade">Invite Friends</p>
         </div>
         <div className="w-full min-h-auto h-40 z-20 ">
            <p
               id="number_of_friends"
               className="text-5xl font-bold text-green-400"
            >
               0
            </p>
            <p className="font-bold text-2xl text-gray-400">invited friends</p>
            <span className="text-md text-red-600">
               receives 10% of the GIGA of each invited friend
            </span>
         </div>

         <a
            className="min-w-fit w-[80%] h-auto p-4 bg-gray-600 border-b-4 border-b-gray-700 text-green-400  uppercase z-20"
            href={`https://t.me/share/url?url=${url}&text=${text}`}
            target="_blank"
         >
            Claim referal link
         </a>

         {frens.map((el) => {
            return <InvitedFriend key={el.id} name={el.name} lvl={el.level} />;
         })}

         <img
            src={FrensImage}
            alt="frens"
            className="h-screen w-auto absolute object-cover top-0"
         />
      </div>
   );
};

export default Frens;
