const Popup = ({ title, text, onClose }) => {
   return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20 p-6 h-full">
         <div className="bg-white text-black p-6 h-fit rounded shadow-lg relative">
            <button
               className="absolute top-2 right-2 text-xl font-bold bg-opacity-10 "
               onClick={onClose}
            >
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
               >
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     d="M6 18 18 6M6 6l12 12"
                  />
               </svg>
            </button>
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <p>{text}</p>
         </div>
      </div>
   );
};

export default Popup;
