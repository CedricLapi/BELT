import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        
            <h4><Link to="/api/players">Home</Link></h4>
            <h4><Link to="/api/players/create">Create Player</Link></h4>
        
    </div>
  )
}

export default Navbar