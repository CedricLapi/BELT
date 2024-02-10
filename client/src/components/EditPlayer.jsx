import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditPlayer = (props) => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [onePlayer, setOnePlayer] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/players/${id}`)
            .then(res => setOnePlayer(res.data.player))
            .catch(err => console.log(err))
    }, [])


    const changeHandler = (e) => {
        setOnePlayer({
            ...onePlayer,
            [e.target.name]: e.target.value
        })}

    //Edit Player
    const editPlayer = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/players/${id}`, onePlayer)
            .then(res => navigate("/api/players"))
            .catch(err => console.log(err))
        navigate("/api/players")
      }
  return (

    <div>
            <h1 className="mx-auto">Edit Player</h1>

        <form action="" className='col-md-6 mx-auto' onSubmit={editPlayer}>
            <div className='form-group'>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" className="form-control" value={onePlayer.name} onChange={changeHandler} />
            </div>

            <div className="form-group">
                <label htmlFor="preferredPosition">Preferred Position</label>
                <input type="text" name="preferredPosition" id="preferredPosition" className="form-control" value={onePlayer.preferredPosition} onChange={changeHandler} />

                
                <button className="btn btn-info mr-3 mt-3">Edit Player</button>

            </div>
        </form>
    </div>
  )
}

export default EditPlayer;