import { useDebugValue, useEffect, useMemo, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [count,setCount] = useState(0);
  const [inputvalue,setInputvalue] = useState(0);
  
  let count1 = useMemo(()=>{
    console.log("memo is called");
    let finalcount = 0;
    for(let i = 0;i<inputvalue;i++) {
        finalcount+=i;
    }
    return finalcount;
  },[inputvalue])
  return (
    <div>
      <button onClick={()=>setCount((count)=>count+1)}>count: {count}</button>
      <input type="text" onChange={(event)=>{
        setInputvalue(event.target.value)
      }} />
      <p>{count1}</p>
    </div>
  );
}
export default App;
