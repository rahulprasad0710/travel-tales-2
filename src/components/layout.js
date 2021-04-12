import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar/Navbar"
// import "./layout.css"
import "../css/index.css"
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="page-layout">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
