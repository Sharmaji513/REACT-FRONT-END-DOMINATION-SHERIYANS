import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const data = [
    {
      name: "Sachin",
      profession: "SDE",
      image:
        "https://images.unsplash.com/photo-1569128782402-d1ec3d0c1b1b?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Harsh",
      profession: "Teacher",
      image:
        "https://images.unsplash.com/photo-1500214678997-a6adba416e7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: true,
    },
    {
      name: "Lucky",
      profession: "Artist",
      image:
        "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
  ];


  const [realData, setRealData] = useState(data);

  const handleFriendsBtn = (changingIndex) => {
    setRealData((prev) => {
      return prev.map((item, ind) => {
        if (ind === changingIndex) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };

  return (
    <div>

    
      <div className="w-full h-screen flex gap-4 items-center justify-center bg-zinc-300">
      {/* Ist way to sending props  */}
        {/* {data.map((item, index) => (
          <Card
            image={item.image}
            name={item.name}
            profession={item.profession}
          />
        ))} */}

        
        {realData?.map((item, index) => (
          <Card
            key={index}
            values={item}
            handleFriendsBtn={handleFriendsBtn}
            index={index}

          />
        ))}
      </div>
    </div>
  );
}

export default App;
