import React from "react";

const Card = () => {

  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-10  ">
      <div className="w-60 bg-zinc-100  rounded-md overflow-hidden">
        <div className="w-full  h-32 bg-zinc-300">
            <img className= "w-full h-full object-cover" src="https://images.unsplash.com/photo-1577648656591-c745a26f9d36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="w-full px-3 py-4">
          <h1 className="font-semibold">Amazon Basics</h1>
          <p className="text-xs mt-2">
            Lorem ipsum dolor sit amet consectetur ipsum dolor sit psum dolor
            sit amet consectetur.
          </p>
        </div>
      </div>
    </div>
    
  );
};

export default Card;
