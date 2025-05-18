import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} className='logo'/>
        <ul>
            <li>Home</li>
            <li>Features</li>
            <li>pricing</li>
            <li>Blog</li>
            
        </ul>
        <div className="nav-right">
            <select>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
            </select>
            <button>Sign up <img src={arrow_icon}/> </button>
        </div>

    </div>
  )
}

export default Navbar