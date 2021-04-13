import React, { useState } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Destinationm = () => {
  const destinationQuery = graphql`
    {
      dataJson {
        destination {
          destination_id
          pack
          title
          desPhoto {
            childImageSharp {
              gatsbyImageData(layout: FIXED, placeholder: DOMINANT_COLOR)
            }
          }
        }
      }
    }
  `

  const fetchData = useStaticQuery(destinationQuery)
  const destinationData = fetchData.dataJson.destination
  console.log(destinationData)
  const eachDestination = destinationData.map(e => (
    <div className="main-page__destination-imgbox">
      <GatsbyImage
        className="main-page__destination-imgonly"
        image={e.desPhoto.childImageSharp.gatsbyImageData}
        alt={e.title}
      />
      <div
        className="blurbox"
        style={{
          backgroundColor: `${e.desPhoto.childImageSharp.gatsbyImageData.backgroundColor}`,
        }}
      ></div>
      <div className="main-page__destination-imgboxtext-group">
        <h3>{e.title}</h3>
        <h4>{e.pack}</h4>
        <button className="btn btn-destination">VIEW DESTINATION</button>
      </div>
    </div>
  ))

  return (
    <div className="main-page__destination">
      <h1>OUR DESTINATION</h1>
      <section className="main-page__destination-images">
        {fetchData ? eachDestination : <h3>Loading....</h3>}
      </section>
    </div>
  )
}

export default Destinationm
