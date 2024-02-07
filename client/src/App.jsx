import axios from 'axios';
import './App.css'
import { useEffect } from 'react';
import PlayerForm from './components/PlayerForm';

function App() {
  
  useEffect( () => {
  axios.get("http://localhost:8000/api/players")
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
}, [])

  return (
    <>
      <h1>In the main app</h1>
      <PlayerForm />
    </>
  )
}

export default App
