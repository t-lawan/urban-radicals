import React from "react"
import PropTypes  from "prop-types"
import { ProjectLink, ProjectListRow, ProjectListWrapper } from "./project-list.styles"

const ProjectList = (props) => {
    let projects = props.projects;
    projects.sort((a, b) => {
        return (new Date(a.date).getTime() - new Date(b.date).getTime())
    })
	console.log("A", projects)

  return (
    <ProjectListWrapper>
        {projects.map((project, index) =>(
            <ProjectListRow colour={project.getCategoryColour()} key={index}>
                <p>{project.getCategory()}</p>
                <p>{`${project.title}, ${project.location}, ${project.getYear()}`}</p>
            </ProjectListRow>

        ))}
    </ProjectListWrapper>
  )
}

ProjectList.propTypes = {
	projects: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ProjectList
