import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import SelectedProjects from "../components/pages/selected-projects/selected-projects"
import { Convert } from "../utils/convert"


const ProjectPage = () => {
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
    <SelectedProjects projects={projects}/>

  </Layout>
  );
}

export default ProjectPage
