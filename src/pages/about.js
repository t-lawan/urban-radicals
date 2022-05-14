import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import AboutPage from "../components/pages/about/about-page"
import { Convert } from "../utils/convert"

const About = () => {
  const { contentfulPage } = useStaticQuery(
    graphql`
      query {
        contentfulPage(title: { eq: "About" }) {
          contentful_id
          title
          seo {
            contentful_id
            title
            description {
              description
            }
          }
          content {
            text {
              raw
            }
            title
          }
        }
      }
    `
  )

  let page = Convert.toPageModel(contentfulPage)

  return (
    <Layout>
      <Seo title="About" />
      <AboutPage page={page} />
    </Layout>
  )
}

export default About
