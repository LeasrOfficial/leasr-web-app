import React from 'react'
import {BrowserRouter, NavLink} from 'react-router-dom'
import './NavBar.css'
import Logo from './img/logo.png'

const NavBar = () =>{
    return(
        // <BrowserRouter>
            <div className = "menu">
                <div className="table">
                    <ul className="hor_lst">
                        <li><NavLink to="/"exact>Home</NavLink></li>
                        <li><NavLink to="/Listing">Create/Manage Listings</NavLink></li>
                        <li><NavLink to ="/Room">Find a Room</NavLink></li>
                        <li><img src={Logo}width="150"height="150"></img></li>
                        <li><NavLink to="/Favorites">Favorited Listings</NavLink></li>
                        <li><NavLink to="/Messages">Messages</NavLink></li>
                        <li><NavLink to="/About">About</NavLink></li>
                        <li><NavLink to="/Signup">Signup/Signin</NavLink></li>
                    </ul>
                </div>
            </div>
        // </BrowserRouter>
    )
}

export default NavBar