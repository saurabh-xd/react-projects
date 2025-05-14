import './Navbar.css'

function Navbar() {
    return (
       <div className="nav">
        <div className="nav-logo">
            EV-olution
        </div>
        <div className="nav-menu">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='nav-contact'>Contact</li>
        </div>
       </div>
    )
}

export default Navbar
