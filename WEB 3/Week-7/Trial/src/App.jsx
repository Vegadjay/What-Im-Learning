import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './componant/Home';
import { Landing } from './componant/Landing';
import { Navbar } from './componant/Navbar';
function App() {

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
