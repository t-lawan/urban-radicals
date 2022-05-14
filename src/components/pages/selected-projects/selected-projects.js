import React from "react"
import { SelectedProjectsWrapper } from "./selected-projects.styles"
import PropTypes  from "prop-types"
import ProjectList from "../../project-list/project-list"
import { generateContentBlock } from "../../../utils/richtext"

const SelectedProjects = (props) => {

  let selectedProjectsArray = props.projects;
  console.log(selectedProjectsArray)
  return (
    <SelectedProjectsWrapper>
      {selectedProjectsArray.map((project, index) => (
        <React.Fragment key={index}>
          <p> Hello</p>
          {/* {generateContentBlock()} */}
        </React.Fragment>
      ))}
    </SelectedProjectsWrapper>
  )
}

SelectedProjects.propTypes = {
	projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

export default SelectedProjects
