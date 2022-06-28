import React from 'react';
import { ProjectPageWrapper } from './project-page.styles';
import PropTypes from "prop-types"
import { generateContentBlock } from '../../../utils/richtext';
import ProjectFooter from './project-footer';

const ProjectPage = (props) => {
	let project = props.project;
	console.log('PROJE', project)
	return (
		<ProjectPageWrapper>   
     		{project.content.map((block, index) => generateContentBlock(block, index))}
			<ProjectFooter {...project.footer} />
		</ProjectPageWrapper>
	);
};

ProjectPage.propTypes = {
	project: PropTypes.object,
  }

export default ProjectPage;