import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'



const PlayerDetails = (props) => {

    const {id} = useParams();

    const [OnePlayer, setOnePlayer] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/${id}`)
            .then(res => setOnePlayer(res.data.player))
            .catch(err => console.log(err))

    }, [])

  return (
    <div>
        <h1>Name: {OnePlayer.name}</h1>
        <p>Preferred Position: {OnePlayer.preferredPosition}</p>
        <p>Game One status: {OnePlayer.gameOneStatus}</p>
        <p>Game Two status: {OnePlayer.gameTwoStatus}</p>
        <p>Game Three status: {OnePlayer.gameThreeStatus}</p>

        <button className="btn btn-info mr-3">Edit Player</button>
        <button className="btn btn-danger">Delete Player</button>
    </div>
  )
}

export default PlayerDetails