import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const PlayerDashboard = () => {

    const [players, setPlayers] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayers(res.data.players))
            .catch(err => console.log(err))
    }, [])

    //navigate to player form
    const navigateToPlayerForm = () => {
        navigate("/api/players/create")
    }

  return (
    <div>
        <h1>In The dashboard</h1>

        <table className="col-md-11 mx-auto mt-4">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Preferred Position</th>
                    <th>Actions</th>
                </tr>

            </thead>
            <tbody>
                {players.map((player, i) => {
                    return (
                        <tr key={player._id}>
                            <td>{player.name}</td>
                            <td>{player.preferredPosition}</td>
                            <td>
                                <button className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <button className="btn btn-info offset-11 mt-5" onClick={navigateToPlayerForm}>Create Player</button>
    </div>
  )
}

export default PlayerDashboard