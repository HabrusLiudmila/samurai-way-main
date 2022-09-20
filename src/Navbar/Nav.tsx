import React from "react";
import './Nav.css';

const Nav = () =>{
    return (
        <nav className="nav">
            <div className='item'><a href="src/Navbar/Nav">Profile</a></div>
            <div className='item'><a href="src/Navbar/Nav">Message</a></div>
            <div className='item'><a href="src/Navbar/Nav">New</a></div>
            <div className='item'><a href="src/Navbar/Nav">Music</a></div>
            <div className='item'><a href="src/Navbar/Nav">Settings</a></div>
        </nav>
    )
}

export default Nav