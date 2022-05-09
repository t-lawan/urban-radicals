import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo/seo"
import ProjectPage from "../components/pages/project/project-page"

const ProjectTemplate = () => (
  <Layout>
    <Seo title="Project Page" />
    <ProjectPage />

  </Layout>
)

export default ProjectTemplate
