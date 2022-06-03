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
            ... on ContentfulTextBlock {
              contentful_id
              title
              text {
                raw
              }
            }
            ... on ContentfulImageBlock {
              contentful_id
              images {
                gatsbyImageData
              }
              layout
              text {
                raw
              }
            }
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
