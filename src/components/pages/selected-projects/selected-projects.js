import React from "react"
import { SelectedProjectsWrapper } from "./selected-projects.styles"
import PropTypes  from "prop-types"
import ProjectList from "../../project-list/project-list"

const SelectedProjects = (props) => {


  return (
    <SelectedProjectsWrapper>
      <ProjectList projects={props.projects} />
    </SelectedProjectsWrapper>
  )
}

SelectedProjects.propTypes = {
	projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

export default SelectedProjects
