import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodo] = useState([
    {
      name: "Jay Vegad",
      age: 20,
      work: "Web developer",
    },
    {
      name: "Jay Vegad",
      age: 20,
      work: "Web developer",
    },
    {
      name: "Jay Vegad",
      age: 20,
      work: "Web developer",
    },
  ]);

  return (
    <>
      {todos.map((todo) => {
        return <Prindata name={todo.name} age={todo.age} work={todo.work} />;
      })}
    </>
  );
}

function Prindata(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.work}</h3>
    </div>
  );
}

export default App;
