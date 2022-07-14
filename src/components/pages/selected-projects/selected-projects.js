import React from "react"
import { SelectedProjectColumn, SelectedProjectRow, SelectedProjectsWrapper } from "./selected-projects.styles"
import PropTypes  from "prop-types"
import ProjectList from "../../project-list/project-list"
import { generateContentBlock } from "../../../utils/richtext"

const SelectedProjects = (props) => {

  let selectedProjectsArray = props.projects;
  return (
    <SelectedProjectsWrapper>
      {selectedProjectsArray.map((project, index) => (
        <SelectedProjectRow colour={project.project.getCategoryColour()} key={index}>
          <SelectedProjectColumn columnStart={1} columnEnd={2}>
            {generateContentBlock(project.leftColumnImage)}

          </SelectedProjectColumn>
          <SelectedProjectColumn columnStart={2} columnEnd={5} >
            {generateContentBlock(project.rightColumnImage)}
          </SelectedProjectColumn>
        </SelectedProjectRow>
      ))}
    </SelectedProjectsWrapper>
  )
}

SelectedProjects.propTypes = {
	projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

export default SelectedProjects
