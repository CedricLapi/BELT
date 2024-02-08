import axios from 'axios';
import './App.css'
import { useEffect } from 'react';
import PlayerForm from './components/PlayerForm';
import PlayerDashboard from './components/PlayerDashboard';
import  { Routes, Route } from 'react-router-dom';
import PlayerDetails from './components/PlayerDetails';

function App() {
  
  useEffect( () => {
  axios.get("http://localhost:8000/api/players")
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
}, [])

  return (
    <>
      <h1>In the main app</h1>

      <Routes>

      < Route element = {<PlayerForm />} path="api/players/create" />
      < Route element = {<PlayerDashboard />} path="api/players" />
      < Route element = {<PlayerDetails />} path="api/players/:id" />

      </Routes>

      
      
    </>
  )
}

export default App
