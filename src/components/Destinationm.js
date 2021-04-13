import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Destinationm = () => {
  return (
    <>
      <h1>OUR DESTINATION</h1>
      <section className="main-page__destinationm-images">
        <StaticImage
          src="../images/maine.jpg"
          placeholder="blurred"
          layout="fullWidth"
          alt="Everest"
          className="main-page_destination-image"
        />
        <StaticImage
          src="../images/maine.jpg"
          placeholder="blurred"
          layout="fullWidth"
          alt="Everest"
          className="main-page_destination-image"
        />
        <StaticImage
          src="../images/maine.jpg"
          placeholder="blurred"
          layout="fullWidth"
          alt="Everest"
          className="main-page_destination-image"
        />
        <StaticImage
          src="../images/maine.jpg"
          placeholder="blurred"
          layout="fullWidth"
          alt="Everest"
          className="main-page_destination-image"
        />
      </section>
    </>
  )
}

export default Destinationm
