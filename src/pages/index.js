import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import SelectedProjects from "../components/pages/selected-projects/selected-projects"
import { Convert } from "../utils/convert"

const IndexPage = () => {
  const { contentfulSite } = useStaticQuery(
    graphql`
      query {
        contentfulSite {
          contentful_id
          selectedProjects {
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
        }
      }
    `
  )


  let projects = contentfulSite.selectedProjects.map(project => {
    return Convert.toSelectedProjectModel(project)
  })

  return (
    <Layout>
      <Seo title="Home" />
      <SelectedProjects projects={projects} />
    </Layout>
  )
}

export default IndexPage
