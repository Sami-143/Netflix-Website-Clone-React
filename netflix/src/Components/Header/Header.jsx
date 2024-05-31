import React from 'react'
import { Link } from "react-router-dom";
import { logo } from "../../logo.png";


const Header = () => {
  return (
    <nav className='header'>
        <img src={logo} alt="logo" />

        <div>
            <Link to="/tvshows" >TV Shows</Link>
            <Link to="/movies" >Movies</Link>
            <Link to="/recent" >Recently Added</Link>
            <Link to="/mylist" >My List</Link>
        </div>
    </nav>
  )
}

export default Header
