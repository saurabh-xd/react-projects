import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
        <h1>DevTracker</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/entries">Entries</Link>
          
        </nav>
    </div>
    
  )
}

export default Header