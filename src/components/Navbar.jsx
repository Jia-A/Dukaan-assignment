import React from "react"
import "../styles/navbar.css"
import "../custom.css"

function Navbar() {

  return (

        <header className="nav-head">
            <nav className='flex around nav-main'>
            <div className='brand-name flex'>
                <span></span>
                <span>dukaan</span>
            </div>
            <div className='nav-btn flex'>
                <button className="sign-in btn">Sign-in</button>
                <button className="app-btn btn">Dukaan for pc</button>
            </div>
            </nav>
        </header>
  )
}

export default Navbar