import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import SelectedProjects from "../components/pages/selected-projects/selected-projects"
import { Convert } from "../utils/convert"

const IndexPage = () => {
  const { allContentfulSelectedProject } = useStaticQuery(
    graphql`
      query {
        allContentfulSelectedProject {
          edges {
            node {
              contentful_id
              leftColumnImage {
                contentful_id
                images {
                  gatsbyImageData
                  width
                }
                text {
                  raw
                }
                layout
              }
              rightColumnImage {
                contentful_id
                images {
                  gatsbyImageData
                }
                text {
                  raw
                }
                layout
              }
              project {
                category {
                  contentful_id
                  colour
                  title
                }
                contentful_id
                date(formatString: "M/D/YYYY")
                description {
                  raw
                }
                slug
                title
                location
                seo {
                  contentful_id
                  description {
                    description
                  }
                  title
                }
                content {
                  contentful_id
                  title
                  text {
                    raw
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const projects = Convert.toModelArray(
    allContentfulSelectedProject,
    Convert.toSelectedProjectModel
  )

  // console.log('XX', projects)

  return (
    <Layout>
      <Seo title="Home" />
      <SelectedProjects projects={projects} />
    </Layout>
  )
}

export default IndexPage
