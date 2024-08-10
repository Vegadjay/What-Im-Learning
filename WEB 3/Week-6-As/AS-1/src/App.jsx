import { useState } from 'react';
import './App.css';

function App() {
  const [para1, setPara1] = useState("");
  const [inputValue, setInputValue] = useState(""); 

  function paraGenerate() {
    fetch("http://localhost:3000/", 
    {
      method: "POST",
      body: JSON.stringify({ para: inputValue }),
      headers: {
        "Content-Type": "application/json", 
      },
    })
    .then(async (res) => {
      if (res.ok) { 
        const data = await res.json();
        console.log('Received data:', data); 
        setPara1(data.paragraph || data); 

      } else {
        console.error('Error:', res.statusText); 
      }
    })
    .catch((error) => {
      console.error('Fetch error:', error);
    });
  }

  return (
    <>
      <input 
        type="text" 
        placeholder='Enter Length of word' 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button onClick={paraGenerate}>Click here</button>
      <span>{para1}</span>
    </>
  );
}

export default App;
