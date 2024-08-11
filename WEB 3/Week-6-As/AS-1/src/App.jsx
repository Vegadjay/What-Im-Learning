import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [para1, setPara1] = useState("");
  const [inputValue, setInputValue] = useState(0);

  function setValue(event) {
    var data = event.target.value;
    console.log(data)
    setInputValue(event.target.value);
  }

  function paraGenerate() {
    axios("http://localhost:3000/",
    {
      method: "POST",
      data: JSON.stringify({ max: inputValue }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(async (res) => {
      if (res.status === 200) { 
        const data = await res.data; 
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
        id='inputNumber'
        onChange={setValue}
      />
      <button onClick={paraGenerate}>Click here</button>
      <span>{para1}</span>
    </>
  );
}

export default App;
