import React from 'react';
import { BackButton, ProjectPageHeader, ProjectPageTitle, ProjectPageWrapper } from './project-page.styles';
import PropTypes from "prop-types"
import { CODE, generateContentBlock } from '../../../utils/richtext';
import ProjectFooter from './project-footer';


const ProjectPage = (props) => {
	let project = props.project;
	console.log('project', project)
	return (
		<ProjectPageWrapper>
			<ProjectPageHeader> 
				<BackButton to={'/projects'}>back </BackButton>   
				<ProjectPageTitle> <CODE>{project.title}</CODE>, {project.location}, {project.getYear()}  </ProjectPageTitle>
				<p></p>
			</ProjectPageHeader>
     		{project.content.map((block, index) => generateContentBlock(block, index))}
			<ProjectFooter {...project.footer} />
		</ProjectPageWrapper>
	);
};

ProjectPage.propTypes = {
	project: PropTypes.object,
  }

export default ProjectPage;