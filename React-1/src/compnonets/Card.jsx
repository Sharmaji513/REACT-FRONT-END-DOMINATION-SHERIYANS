import React from "react";

const Card = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1179&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Puma Sneakers",
      decription:
        "Lorem ipsum dolor sit amet consectetur ipsum dolor sit psum dolo sit amet consectetur.",
      instock: true,
    },

    {
      image:
        "https://images.unsplash.com/photo-1700853012811-ce0a42d2b6d3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Adidas Gazelle  ",
      decription:
        "Lorem ipsum dolor sit amet consectetur ipsum dolor sit psum dolo sit amet consectetur.",
      instock: false,
    },

    {
      image:
        "https://images.unsplash.com/photo-1704677982215-a2248af6009b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Nike AJ1",
      decription:
        "Lorem ipsum dolor sit amet consectetur ipsum dolor sit psum dolo sit amet consectetur.",
      instock: true,
    },
  ];

  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-10  ">
      {data.map((elem, index) => (
        <div className="w-60 bg-zinc-100  rounded-md overflow-hidden">
          <div className="w-full  h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h1 className="font-semibold">{elem.name}</h1>
            <p className="text-xs mt-2">{elem.decription}</p>

            {/* Conditonal rendering */}
            <button
              className={`px-4 py-1 mt-3  text-xs rounded text-zinc-100 ${ elem.instock ? "bg-blue-600" : "bg-red-700"}  `}
            >
              {elem.instock ? "In Stock" : "Out of stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;
