import React, { useState } from "react"
import { Link } from "gatsby"

import "./navbar.css"

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu)
    console.log(toggleMenu)
  }

  return (
    <nav className="navbar">
      <div className="navbar_nav-container container-lg">
        <div className="navbar_brand-toggle">
          <Link className="navbar_brandName" to="/">
            <span className=""> TRAVEL</span>
            <span className=""> TALES</span>
          </Link>
          <div className="navbar_toogle-btns " onClick={toggleMenuHandler}>
            <div
              className={
                toggleMenu ? "navbar_burger navbar_burger-1" : "navbar_burger"
              }
            ></div>
            <div
              className={
                toggleMenu ? "navbar_burger navbar_burger-2" : "navbar_burger "
              }
            ></div>
            <div
              className={
                toggleMenu ? "navbar_burger navbar_burger-3" : "navbar_burger "
              }
            ></div>
          </div>
        </div>

        <div
          className={
            toggleMenu
              ? "navbar_nav-menu-div navbar_nav-menu-div-mobile navbar_menu-active"
              : "navbar_nav-menu-div navbar_nav-menu-div-mobile "
          }
        >
          <ul className="navbar_nav-menu">
            <li
              onClick={() => setToggleMenu(false)}
              className="navbar_nav-menu-item"
            >
              <Link
                activeClassName="navLink-active"
                className="navbar_nav-menu-item-link"
                to="/"
              >
                HOME
              </Link>
            </li>
            <li className="navbar_nav-menu-item">
              <Link
                onClick={() => setToggleMenu(false)}
                className="navbar_nav-menu-item-link"
                activeClassName="navLink-active"
                to="/tales/"
              >
                TALES
              </Link>
            </li>
            <li className="navbar_nav-menu-item">
              <Link
                onClick={() => setToggleMenu(false)}
                className="navbar_nav-menu-item-link"
                activeClassName="navLink-active"
                to="/destination/"
              >
                DESTINATION
              </Link>
            </li>
            <li className="navbar_nav-menu-item">
              <Link
                onClick={() => setToggleMenu(false)}
                className="navbar_nav-menu-item-link"
                activeClassName="navLink-active"
                to="/gallery"
              >
                GALLLERY
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
