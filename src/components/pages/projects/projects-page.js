import React from "react"
import PropTypes  from "prop-types"
import ProjectList from "../../project-list/project-list"
import { ProjectsPageWrapper } from "./projects-page.styles"

const ProjectsPage = (props) => {


  return (
    <ProjectsPageWrapper>
      <ProjectList projects={props.projects} />
    </ProjectsPageWrapper>
  )
}

ProjectsPage.propTypes = {
	projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

export default ProjectsPage
