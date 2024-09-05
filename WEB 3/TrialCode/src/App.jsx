import { useState } from 'react';
import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <button onClick={() => navigate('/')}>1</button>
        <button onClick={() => navigate('/second')}>2</button>
        <button onClick={() => navigate('/third')}>3</button>
      </div>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/second" element={<Page2 />} />
        <Route path="/third" element={<Page3 />} />
      </Routes>
    </>
  );
}

export const Page1 = () => {
  return (
    <>
      <div>
        <h1>Component 1</h1>
      </div>
    </>
  );
};

export const Page2 = () => {
  return (
    <>
      <div>
        <h1>Component 2</h1>
      </div>
    </>
  );
};

export const Page3 = () => {
  return (
    <>
      <div>
        <h1>Component 3</h1>
      </div>
    </>
  );
};

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
