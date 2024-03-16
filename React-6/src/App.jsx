import { useState } from "react";
import "./App.css";

function App() {
 
  // example-1: create function to user baned or not and change the button color
  
  // const [data, setData] = useState({ name: "Sachin", isBanned: false });
  // return (
  //   <div className="px-10">
  //     <h3>Name : {data.name}</h3>
  //     <h4>Is Banned : {data.isBanned.toString()}</h4>
  //     <button
  //       onClick={() => setData({ ...data, isBanned: !data.isBanned })}
  //       className={`px-3 py-1  rounded-md ${data.isBanned ? "bg-red-500" : "bg-blue-500"} text-xs text-white`} >
  //       Change Value
  //     </button>
  //   </div>
  // );

  //example-2  
  
  //  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
    // 1 crate a array and remove the last Element from the array
    // 2 crate a array and remove the third Element from the array
    // 3 crate a array and remove the all Element whcih divided fom 2 from the array
    // 4 crate a array add  7 the array

  const [val ,setVal] = useState([
    {name: "harsh" ,age:24},
    {name: "sachin" ,age:22},
    {name: "kohli" ,age:34},
  ])
  
  return (
    <div className="p-5">

      {/* {val.map((item) => (<h1>{item}</h1>))} */}

      {val.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <h1>{item.age}</h1>

        </div>
      ) )}

      <button
        // onClick={() => setVal(() => val.filter((item, index) => index != val.length - 1))}
        // onClick={()=> setVal( ()=> val.filter( (item, index) => index!=2))}
        // onClick={()=> setVal(()=> val.filter((item,index) => item = index%2==0 ))}
        // onClick={()=> setVal([...val , 7])}

        onClick={ ()=> setVal(()=> val.map(item => item.name == "sachin" ? ({name:"sachin" , age: 23}) : item ))}


        className={`px-3 py-1  rounded-md bg-blue-500 text-xs cursor-pointer text- text-white`}
      >
      click
      </button>
    </div>
  );



}

export default App;
