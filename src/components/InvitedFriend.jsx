const InvitedFriend = ({ name, lvl }) => {
   return (
      <div className="w-[90%] min-h-auto bg-[#2B2D2F] flex justify-between items-center z-20 py-4 my-2 px-4">
         <div className="flex flex-col justify-center items-center">
            <p className="text-md font-normal text-gray-100">{name}</p>
            <p className="text-md font-normal text-gray-100">LVL {lvl}</p>
         </div>

         <p className="text-md font-normal text-green-400">400 GIGA</p>
      </div>
   );
};

export default InvitedFriend;
