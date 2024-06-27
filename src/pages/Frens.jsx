import React, { useEffect } from "react";
import WebApp from "@twa-dev/sdk";
import InvitedFriend from "../components/InvitedFriend";
import { useNavigate } from "react-router-dom";

const Frens = () => {
   const id = WebApp?.initDataUnsafe.user.id;
   const url = `https://t.me/localtesting228bot?start_param=${id}`;
   const text = `Join GIGA community by clicking the link and becoming gigachad!`;

   const navigate = useNavigate();

   useEffect(() => {
      WebApp.BackButton.show();
      WebApp.BackButton.onClick(() => {
         WebApp.HapticFeedback.impactOccurred("light");
         navigate("/home");
      });

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
      {
         id: 3,
         name: "John",
         level: 1,
      },
      {
         id: 4,
         name: "Jane",
         level: 1,
      },
      {
         id: 5,
         name: "John",
         level: 1,
      },
      {
         id: 6,
         name: "Jane",
         level: 1,
      },
      {
         id: 7,
         name: "John",
         level: 1,
      },
      {
         id: 8,
         name: "Jane",
         level: 1,
      },
      {
         id: 9,
         name: "John",
         level: 1,
      },
      {
         id: 10,
         name: "Jane",
         level: 1,
      },
   ];

   useEffect(() => {
      const originalOverflow = document.body.style.overflow;
      const originalMarginTop = document.body.style.marginTop;
      const originalHeight = document.body.style.height;
      const originalPaddingBottom = document.body.style.paddingBottom;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalHtmlHeight = document.documentElement.style.height;

      const overflow = 100;
      document.body.style.overflowY = "hidden";
      document.body.style.marginTop = `${overflow}px`;
      document.body.style.height = window.innerHeight + overflow + "px";
      document.body.style.paddingBottom = `${overflow}px`;
      document.documentElement.style.overflow = "hidden";
      document.documentElement.style.height = "100vh";
      window.scrollTo(0, overflow);

      let ts;
      const onTouchStart = (e) => {
         ts = e.touches[0].clientY;
      };

      const onTouchMove = (e) => {
         const scrollableDiv = document.getElementById("scrollableDiv");
         const scrollableEl = e.target.closest("#scrollableDiv");

         if (scrollableEl) {
            const scroll = scrollableEl.scrollTop;
            const maxScroll =
               scrollableEl.scrollHeight - scrollableEl.clientHeight;
            const te = e.changedTouches[0].clientY;
            if ((scroll <= 0 && ts < te) || (scroll >= maxScroll && ts > te)) {
               e.preventDefault();
            }
         } else {
            e.preventDefault();
         }
      };

      document.documentElement.addEventListener("touchstart", onTouchStart, {
         passive: false,
      });
      document.documentElement.addEventListener("touchmove", onTouchMove, {
         passive: false,
      });

      // Ensure the document is scrollable
      const ensureDocumentIsScrollable = () => {
         const isScrollable =
            document.documentElement.scrollHeight > window.innerHeight;
         if (!isScrollable) {
            document.documentElement.style.setProperty(
               "height",
               "calc(100vh + 1px)",
               "important"
            );
         }
      };

      window.addEventListener("load", ensureDocumentIsScrollable);

      return () => {
         document.documentElement.removeEventListener(
            "touchstart",
            onTouchStart
         );
         document.documentElement.removeEventListener("touchmove", onTouchMove);
         window.removeEventListener("load", ensureDocumentIsScrollable);
         document.body.style.overflow = originalOverflow; // Reset overflow on cleanup
         document.body.style.marginTop = originalMarginTop; // Reset marginTop on cleanup
         document.body.style.height = originalHeight; // Reset height on cleanup
         document.body.style.paddingBottom = originalPaddingBottom; // Reset paddingBottom on cleanup
         document.documentElement.style.overflow = originalHtmlOverflow; // Reset html overflow on cleanup
         document.documentElement.style.height = originalHtmlHeight; // Reset html height on cleanup
      };
   }, []);

   return (
      <div className="relative w-full h-screen flex flex-col items-center overflow-hidden bg-telegram-background-secondary">
         <div className="fixed top-0 w-full z-20 flex flex-col items-center bg-telegram-background-secondary">
            <p className="text-4xl text-white arcade mt-4">Invite Friends</p>
            <p
               id="number_of_friends"
               className="text-5xl font-bold text-green-400 mt-2"
            >
               0
            </p>
            <span className="text-md text-red-600 mt-2">
               receives 10% of the GIGA of each invited friend
            </span>
            <a
               className="min-w-fit w-[80%] h-auto p-4 bg-gray-600 border-b-4 border-b-gray-700 text-green-400 uppercase z-20 inline-block mt-4"
               href={`https://t.me/share/url?url=${url}&text=${text}`}
               target="_blank"
            >
               Claim referal link
            </a>
         </div>
         <div
            id="scrollableDiv"
            className="scrollable-friends w-full h-[calc(100vh-260px)] z-20 overflow-y-scroll flex flex-col items-center mt-[260px]"
         >
            {frens.map((el) => (
               <InvitedFriend key={el.id} name={el.name} lvl={el.level} />
            ))}
         </div>
      </div>
   );
};

export default Frens;
