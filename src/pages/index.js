import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import SelectedProjects from "../components/pages/selected-projects/selected-projects"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <SelectedProjects />

  </Layout>
)

export default IndexPage
