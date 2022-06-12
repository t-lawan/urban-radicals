import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import { Convert } from "../utils/convert"
import ProjectsPage from "../components/pages/projects/projects-page"

const Projects = () => {
  const { allContentfulProject } = useStaticQuery(
    graphql`
      query {
        allContentfulProject {
          edges {
            node {
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
                  caption {
                    caption
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
    allContentfulProject,
    Convert.toProjectModel
  )
  return (
    <Layout>
      <Seo title="All Projects" />
      <ProjectsPage projects={projects} />
    </Layout>
  )
}

export default Projects
