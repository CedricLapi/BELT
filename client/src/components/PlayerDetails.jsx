import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'




const PlayerDetails = (props) => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [OnePlayer, setOnePlayer] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/${id}`)
            .then(res => setOnePlayer(res.data.player))
            .catch(err => console.log(err))

    }, [])

    //Delete Player
    const deletePlayer = (e) => {
      axios.delete(`http://localhost:8000/api/players/${id}`)
          .then(res => console.log(res))
          .catch(err => console.log(err))
      navigate("/api/players")
    }

    const navigateToEditPlayer = (e) => {
      navigate(`/api/players/${id}/edit`)
    }

  return (
    <div>
      
        <h1>Name: {OnePlayer.name}</h1>
        <p>Preferred Position: {OnePlayer.preferredPosition}</p>
        <p>Game One status: {OnePlayer.gameOneStatus}</p>
        <p>Game Two status: {OnePlayer.gameTwoStatus}</p>
        <p>Game Three status: {OnePlayer.gameThreeStatus}</p>

        <button className="btn btn-info mr-3" onClick={(e) => navigateToEditPlayer(OnePlayer._id)}>Edit Player</button>
        <button className="btn btn-danger" onClick={deletePlayer}>Delete Player</button>
    </div>
  )
}

export default PlayerDetails;