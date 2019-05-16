import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerContainer}>
            <h1>Seiyal List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

// styles
const headerContainer = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#5a358b',
    color: '#fff'
}
const linkStyle = {
    color: '#fff',
    textDecoration: 'none'

}

export default Header;