import React from "react"
import {
  SelectedProjectColumn,
  SelectedProjectRowWrapper,
  SelectedProjectsWrapper,
} from "./selected-projects.styles"
import PropTypes from "prop-types"
import ProjectList from "../../project-list/project-list"
import { generateContentBlock, IMAGE_LAYOUT } from "../../../utils/richtext"
import SelectedProjectRow from "./selected-project-row/selected-project-row"

const SelectedProjects = props => {
  const selectedProjectsArray = props.projects;
  return (
    <SelectedProjectsWrapper>
      {selectedProjectsArray.map((project, index) => (
        <SelectedProjectRow project={project} key={index} />
      ))}
    </SelectedProjectsWrapper>
  )
}

SelectedProjects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default SelectedProjects
