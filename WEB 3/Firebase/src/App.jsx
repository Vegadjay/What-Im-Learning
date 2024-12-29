

import Signin from './pages/Signin'
import './App.css'

function App() {
  const apiUrl = import.meta.env.REACT_APP_FIREBASE_API_KEY;
  return (
    <>
      <Signin />
    </>
  )
}

export default App