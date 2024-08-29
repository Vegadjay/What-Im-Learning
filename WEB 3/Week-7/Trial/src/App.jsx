import { useContext, useState } from 'react'
import './App.css'
import { CountContext } from './context';
function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount={setCount} />
      </CountContext.Provider>
    </div>
  )
}

function Count({ count, setCount }) {
  return <div>
    {count}
    <CountRenderer count={count} />
    <Button count={count} setCount={setCount} />
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Button({ setCount }) {
  const count = useContext(CountContext);
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Incrase</button>
    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}


export default App