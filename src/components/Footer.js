import React from "react"
import "../css/components.css"
const Footer = () => {
  return (
    <div className="page-footer">
      <section className="page-footer_info">
        <h3>
          &copy; 2021 <span className="text-red">HAPPY</span>{" "}
          <span className="text-yellow">MEAL</span>
        </h3>
        <h3>
          Built with <a href="https://www.gatsbyjs.com/">Gatsby</a>&nbsp; By:{" "}
          {"  "}
          <span>
            <a href="https://github.com/rahulprasad0710"> Rahul</a>
          </span>
        </h3>
        <h3>All Right Reserved.</h3>
      </section>
    </div>
  )
}

export default Footer
