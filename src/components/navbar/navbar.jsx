import React from "react"
import "./navbar.css"

const Navbar = () => (
  <nav>
    <ul className="navbarList">
      <li className="navbarListItem"><a className = "navbarHref">Home</a></li>
      <li className="navbarListItem"><a className = "navbarHref">Shop</a></li>
      <li className="navbarListItem"><a className = "navbarHref">About</a></li>
      <li className="navbarListItem"><a className = "navbarHref">Services</a></li>
    </ul>
  </nav>
)
export default Navbar