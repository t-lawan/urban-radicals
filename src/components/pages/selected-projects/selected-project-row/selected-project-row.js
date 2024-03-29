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
import { ColourManager } from "../../../../utils/colour-manager"

const SelectedProjectRow = props => {
  const [isHovering, SetIsHovering] = useState(false)

  const project = props.project;

  const DocumentationLeft = {
    firstColumnStart: 1,
    firstColumnEnd: 2,
    secondColumnStart: 2,
    secondColumnEnd: 5,
  }

  const DocumentationRight = {
    firstColumnStart: 1,
    firstColumnEnd: 3
    ,
    secondColumnStart: 3,
    secondColumnEnd: 5,
  }

  project.leftColumnImage = {
    ...project.leftColumnImage,
    isSelectedProject: true
  }

  project.rightColumnImage = {
    ...project.rightColumnImage,
    isSelectedProject: true
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

  const onMouseEnter = () => {
    SetIsHovering(true);

  }

  const onMouseLeave = () => {
    SetIsHovering(false);
}

  return (
    <SelectedProjectRowDiv onMouseOver={() => onMouseEnter()} onMouseLeave={() => onMouseLeave()}>
      <SelectedProjectRowWrapper filter={ColourManager.convertHexToFilter(project.project.getCategoryColour())}  colour={project.project.getCategoryColour()}>
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
      {isHovering ? <SelectedProjectText colour={project.project.getCategoryColour()}>{renderText(project.project.description)}</SelectedProjectText> : null}
    </SelectedProjectRowDiv>
  )
}

SelectedProjectRow.propTypes = {
  project: PropTypes.object.isRequired,
}

export default SelectedProjectRow
