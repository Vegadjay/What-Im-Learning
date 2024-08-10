import { useContext, useState } from "react";
import { CountContext } from './componants/Context'
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <CountContext.Provider value={count}>
        <Count setCount={setCount}/>
        </CountContext.Provider>
    </div>
  );
}
function Count({setCount}) {
  return <div>
    <CounterRender/>
    <Buttons setCount={setCount}/>
    </div>
  
}

function CounterRender() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}


function Buttons({setCount}) {
  const count = useContext(CountContext)
  return <div>
  <button onClick={()=>{
    setCount(count + 1);  
  }}>increase</button>
  <button onClick={()=>{
    setCount(count - 1);
  }}>decrese</button>
  </div>
}

export default App;
 