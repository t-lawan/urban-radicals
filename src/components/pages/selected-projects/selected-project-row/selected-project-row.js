import React, { useState } from "react"
import PropTypes from "prop-types"

import {
  SelectedProjectColumn,
  SelectedProjectRowDiv,
  SelectedProjectRowWrapper,
  SelectedProjectText,
} from "../selected-projects.styles"
import {
  generateContentBlock,
  IMAGE_LAYOUT,
  renderText,
} from "../../../../utils/richtext"

const SelectedProjectRow = props => {
  const [isHovering, SetIsHovering] = useState(true)

  const project = props.project
  console.log("PRO", project)
  const DocumentationLeft = {
    firstColumnStart: 1,
    firstColumnEnd: 2,
    secondColumnStart: 2,
    secondColumnEnd: 6,
  }

  const DocumentationRight = {
    firstColumnStart: 1,
    firstColumnEnd: 4,
    secondColumnStart: 4,
    secondColumnEnd: 6,
  }

  const getColumnDetails = project => {
    // if project left column image is Documentation
    if (
      project.leftColumnImage.image_layout ==
      IMAGE_LAYOUT.DOCUMENTATION_SELECTED_PROJECT
    ) {
      return DocumentationLeft
    } else {
      return DocumentationRight
    }
    // if project right column image is 0
  }

  return (
    <SelectedProjectRowDiv>
      <SelectedProjectRowWrapper colour={project.project.getCategoryColour()}>
        <SelectedProjectColumn
          columnStart={getColumnDetails(project).firstColumnStart}
          columnEnd={getColumnDetails(project).firstColumnEnd}
        >
          {generateContentBlock(project.leftColumnImage)}
        </SelectedProjectColumn>
        <SelectedProjectColumn
          columnStart={getColumnDetails(project).secondColumnStart}
          columnEnd={getColumnDetails(project).secondColumnEnd}
        >
          {generateContentBlock(project.rightColumnImage)}
        </SelectedProjectColumn>
      </SelectedProjectRowWrapper>
      {isHovering ? <SelectedProjectText>{renderText(project.project.description)}</SelectedProjectText> : null}
    </SelectedProjectRowDiv>
  )
}

SelectedProjectRow.propTypes = {
  project: PropTypes.object.isRequired,
}

export default SelectedProjectRow
