import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand item brand" to="/"> <img src={logo} className='logo' alt='logo' />ContactManager</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active item" aria-current="page" to="/add">AddContact</Link>
                        <Link className="nav-link active item" to="/">YourContacts &gt;</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
