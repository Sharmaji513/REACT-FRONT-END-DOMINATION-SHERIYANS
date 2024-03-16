import React from "react";

const Songcard = () => {
  const data = [
    {
      image:
        "https://c.saavncdn.com/903/Junoon-Hindi-2020-20201110184116-500x500.jpg",
      name: " Mahiya ve",
      description: "Lorem ipsum dolor sit, ",
    },
    {
      image:
        "https://c.saavncdn.com/569/M-S-Dhoni-The-Untold-Story-3-Hindi-2016-500x500.jpg",
      name: "MS Dhoni",
      description: " Lorem ipsum dolor sit,",
    },
    {
      image:
        "https://c.saavncdn.com/092/ANIMAL-Hindi-2023-20231124191036-500x500.jpg",
      name: " Animal",
      description: "Lorem ipsum dolor sit,",
    },
    {
      image:
        "https://c.saavncdn.com/879/Alag-Aasmaan-Unknown-2020-20200716212927-500x500.jpg",
      name: " Alag Aasmaan ",
      description: " Alag Aasmaan by Anuv Jain",
    },
    {
      image:
        "https://c.saavncdn.com/807/Kabir-Singh-Hindi-2019-20240131131003-500x500.jpg",
      name: "Kabir Singh",
      description: "Lorem adipisicing elit Facilis.",
    },
  ];

  // Event handler
  const handleClickDownload = () => alert("Can you want to download?");
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center gap-5  ">
      {data.map((songs, index) => (
        <div className="w-52 bg-zinc-100  rounded-md overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={songs.image}
            alt=""
          />
          <h3 className="  font-semibold textxl">{songs.name}</h3>
          <p className="text-xs mt-2">{songs.description}</p>
          <button
            onClick={handleClickDownload}
            className="px-2 py-1 bg-blue-400 text-xs  text-zinc-100 rounded mt-3 "
          >
            Download Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Songcard;
