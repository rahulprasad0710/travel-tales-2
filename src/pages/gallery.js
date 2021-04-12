import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../css/gallery.css"
import Layout from "../components/Layout"
import Seo from "../components/seo"

const galleryQuery = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData
          id
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(galleryQuery)
  const allImage = data.allFile.nodes

  console.log(data)

  const eachImgItem = allImage.map(eachImg => {
    const pathToImage = getImage(eachImg.childImageSharp.gatsbyImageData)

    return (
      <div className="gallery-image-item" key={eachImg.id}>
        <GatsbyImage image={pathToImage} alt={eachImg.id} />
      </div>
    )
  })

  return (
    <Layout>
      <Seo title={"Gallery Page"} description={"recipe gallery"} />
      <div className="gallery-container container-lg">
        <h2 className="page-cat-category"> GALLERY</h2>
        <div className="gallery-grid">{eachImgItem}</div>
      </div>
    </Layout>
  )
}

export default Gallery

//{eachImgItem}
