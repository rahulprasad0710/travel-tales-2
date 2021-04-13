import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Discover = () => {
  return (
    <div className="main-page__discover">
      <div className="main-page__discover-imgbox">
        <div className="main-page__discover-imgboxtext-group">
          <h3>Discover Mountains</h3>
          <button>Details</button>
        </div>
        <StaticImage
          src="../images/discover/mountain1.jpg"
          placeholder="blurred"
          alt="Everest"
          className="main-page_discover-image"
        />
      </div>

      <div className="main-page__discover-imgbox">
        <StaticImage
          src="../images/discover/city22.jpg"
          placeholder="blurred"
          alt="Everest"
          className="main-page_discover-image"
        />
      </div>
      <div className="main-page__discover-imgbox">
        <StaticImage
          src="../images/discover/jungle1.jpg"
          placeholder="blurred"
          alt="Everest"
          className="main-page_discover-image"
        />
      </div>
    </div>
  )
}

export default Discover
