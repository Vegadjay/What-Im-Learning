import { createContext, useContext, useState } from "react";
import "./App.css";
import { countAtmo } from "./store/atmos/count";
const CountContext = createContext();
// useRecoil , useRecoilValue - give just value, useSetRecoilValue - This is give to update the variable.
function App() {

  return (
    <div>
        <Count />
    </div>
  );
}

function Count() {
  return (
    <div>
      <CounterRender />
      <Buttons />
    </div>
  );
}

function CounterRender() {
  const count = useRecoilValue(countAtmo);
  return <div>{count}</div>;
}

function Buttons({ setCount }) {
  const count = useContext(CountContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        decrease
      </button>
    </div>
  );
}

export default App;