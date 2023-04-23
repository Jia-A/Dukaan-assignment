import React from "react"
import "../styles/navbar.css"
import "../custom.css"

function Navbar() {
  return (
        <header className="nav-head">
            <nav className='flex around nav-main'>
            <div className='brand-name flex'>
                <span><img src="./assets/white.svg" alt="" className="brand-icon"/></span>
            </div>
            <div className='nav-btn flex'>
                <button className="sign-in btn">Sign-in</button>
                <button className="app-btn btn">Dukaan for PC</button>
            </div>
            </nav>
        </header>
  )
}

export default Navbar