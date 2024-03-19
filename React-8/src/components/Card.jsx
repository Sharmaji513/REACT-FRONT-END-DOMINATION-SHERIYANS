import React, { useState } from "react";



// Ist way to recieving props 
// function Card({image , name , profession ,}) {
//     return (
//         <div className="w-52 bg-white rounded overflow-hidden">
//           <div className="w-full h-40 bg-sky-200">
//             <img
//               className="w-full h-full object-[center_top] object-cover"
//               src={image}
//               alt="card"
//             />
//           </div>
//           <div className="w-full p-3">
//             <h3 className="text-xl font-semibold">{name}</h3>
//             <h5 className="text-sm">{profession}</h5>
//             <button
//               className="px-3 mt-4 py-1 text-sm text-white bg-blue-500 font-semibold rounded-md"
//             >Add Friend
//             </button>
//           </div>
//         </div>
//       );
//     };  


// 2nd way and most effiecient way to use props 
const Card = ({ values, handleFriendsBtn, index }) => {
    const { name, image, profession, friends } = values;
  
    return (
      <div className="w-52 bg-white rounded overflow-hidden">
        <div className="w-full h-40 bg-sky-200">
          <img
            className="w-full h-full object-[center_top] object-cover"
            src={image}
            alt="card"
          />
        </div>
        <div className="w-full p-3">
          <h3 className="text-xl font-semibold">{name}</h3>
          <h5 className="text-sm">{profession}</h5>
          <button
            onClick={() => handleFriendsBtn(index)}
            className={`px-3 mt-4 py-1 text-sm text-white ${
              friends ? "bg-green-600" : "bg-blue-500"
            } font-semibold rounded-md`}
          >
            {friends ? "Add Friend" : "Friend"}
            {/* {friends ? "ADD FRIEND" : "Friends"} */}
          </button>
        </div>
      </div>
    );
  };
export default Card;