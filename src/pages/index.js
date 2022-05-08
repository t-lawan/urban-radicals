import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <p> Home </p>
   
  </Layout>
)

export default IndexPage
