import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Slider = () => {
  const [val, setVal] = useState(false);

  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="relative h-screen flex bg-zinc-500 rounded-md overflow-hidden">
        <img
          className={`w-full h-full ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } transition-transform ease-out duration-300 object-cover shrink-0`}
          src="https://images.unsplash.com/photo-1706800696170-2c473bc3e363?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card"
        />
        <img
          className={`w-full h-full transition-transform ease-out duration-300 ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"
          } object-cover shrink-0`}
          src="https://images.unsplash.com/photo-1706211306719-c7678f5e68bb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card"
        />
        
        <span
          onClick={() => setVal(() => !val)}
          className="w-10 h-10 bg-[#dadada8b] flex items-center justify-center rounded-full absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]"
        >
          <FaArrowRight size={"1em"} />
        </span>
      </div>
    </div>
  );
};

export default Slider;
