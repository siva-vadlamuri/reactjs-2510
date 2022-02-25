import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    const navLinks = ['Home','ContactUs','AboutUs','Blog']
  return (
    <ul className="navbar-nav">
        {
            navLinks.map((link)=>(
                <li className="nav-item">
                <Link className="nav-link active" to={link} >{link}</Link>
              </li>  
            ))
        }
        </ul>
  )
}

export default NavBar