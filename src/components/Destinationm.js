import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Destinationm = () => {
  return (
    <div className="main-page__destination">
      <h1>OUR DESTINATION</h1>
      <section className="main-page__destination-images">
        <div className="main-page__destination-imgbox">
          <StaticImage
            src="../images/discover/mountain1.jpg"
            placeholder="blurred"
            alt="Everest"
            className="main-page_destination-image"
          />
          <div className="main-page__destination-imgboxtext-group">
            <h3>Pokhara</h3>
            <h4>3 days 4 Nights</h4>
            <button className="btn">VIEW DESTINATION</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Destinationm
