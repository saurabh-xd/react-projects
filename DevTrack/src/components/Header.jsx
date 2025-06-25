import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <div className="header">
      <div></div>
        <h1>DevTracker</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/entries">Entries</Link>
          
        </nav>
    </div>
    
  )
}

export default Header