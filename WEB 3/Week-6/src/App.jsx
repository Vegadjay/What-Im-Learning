import { useDebugValue, useEffect, useState } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [count , setCount] = useState(1);
  
  return (
    <>
      <button onClick={()=> {
        setCount(1);
      }}>1</button>
      <button onClick={() => {
        setCount(2);
      }}>2</button>
      <button onClick={()=> {
        setCount(3);
      }}>3</button>
      <button onClick={()=> {
        setCount(4);
      }}>4</button>

      <Todo id={count} />
    </>
  );
}

function Todo(props) {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://sum-server.100xdevs.com/todo?id=${props.id}`)
      .then((response) => {
        setTodo(response.data.todo);
        console.log(response.data.todo);
      });
  }, [props.id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  );
}
export default App;
