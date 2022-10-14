import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import ProjectPage from "../components/pages/project/project-page"
import { Convert } from "../utils/convert"

const ProjectTemplate = props => {
  const project = Convert.toProjectModel(props.pageContext)

  return (
    <Layout showJumbotronText={false} showNavbar={false}>
      <Seo {...project.seo} />
      <ProjectPage project={project} />
    </Layout>
  )
}

export default ProjectTemplate
