import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../css/main.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticImage
      src="../images/maine.jpg"
      placeholder="blurred"
      layout="fullWidth"
      alt="Everest"
      className="main-page_image"
    />
  </Layout>
)

export default IndexPage
