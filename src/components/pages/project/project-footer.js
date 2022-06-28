import React from 'react';
import PropTypes from "prop-types"
import { ProjectFooterColumn, ProjectFooterWrapper } from './project-footer.styles';
import { generateContentBlock } from '../../../utils/richtext';

const ProjectFooter = ({firstColumn, secondColumn,thirdColumn}) => {

    return (
        <ProjectFooterWrapper>
            {/* {generateContentBlock} */}
            <ProjectFooterColumn>{generateContentBlock(firstColumn)}</ProjectFooterColumn>
            <ProjectFooterColumn>{generateContentBlock(secondColumn)}</ProjectFooterColumn>
            <ProjectFooterColumn>{generateContentBlock(thirdColumn)}</ProjectFooterColumn>
        </ProjectFooterWrapper>
    )
}

ProjectFooter.propTypes = {
	firstColumn: PropTypes.object,
	secondColumn: PropTypes.object,
	thirdColumn: PropTypes.object,
  }

export default ProjectFooter;