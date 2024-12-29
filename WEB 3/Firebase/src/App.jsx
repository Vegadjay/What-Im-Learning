import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Signin from './pages/Signin'
import './App.css'

// In this code here wrap this into authProvider for track 

function App() {
  const apiUrl = import.meta.env.REACT_APP_FIREBASE_API_KEY;
  return (
    <>
      <AuthProvider>
        <Signin />
      </AuthProvider>
    </>
  )
}

export default App