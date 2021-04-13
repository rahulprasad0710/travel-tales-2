import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import "../css/main.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Destinationm from "../components/Destinationm"
import Discover from "../components/Discover"

const IndexPage = () => (
  <Layout>
    <SEO title="Home Page" />
    <section className="main-page">
      <StaticImage
        src="../images/maine.jpg"
        placeholder="blurred"
        layout="fullWidth"
        alt="Everest"
        className="main-page_image"
      />
      <h1 className="main-page__heading">LOVE & TRAVEL </h1>
    </section>
    <section className="section-destination container-lg">
      <Destinationm />
    </section>
    <section className="section-discover ">
      <Discover />
    </section>
  </Layout>
)

export default IndexPage
