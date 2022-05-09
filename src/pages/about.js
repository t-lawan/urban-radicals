import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import AboutPage from "../components/pages/about/about-page"

const About = () => (
  <Layout>
    <Seo title="About" />
    <AboutPage />
  </Layout>
)

export default About
