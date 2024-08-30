import { useState } from 'react'
import './App.css'

function App() {
  const [isTrue , setTrue] = useState(false);
  return (
    <>
      <button onClick={()=> setTrue(!isTrue)}>{isTrue ? "True" : "False"}</button>
    </>
  )
}


export default App
