import React from 'react';
import { ProjectPageWrapper } from './project-page.styles';
import PropTypes from "prop-types"
import { generateContentBlock } from '../../../utils/richtext';

const ProjectPage = (props) => {
	let project = props.project;
	return (
		<ProjectPageWrapper>   
     		{project.content.map((block, index) => generateContentBlock(block, index))}

		</ProjectPageWrapper>
	);
};

ProjectPage.propTypes = {
	project: PropTypes.object,
  }

export default ProjectPage;