import React from "react"
import PropTypes from "prop-types"
import {
  ProjectLink,
  ProjectListRow,
  ProjectListWrapper,
} from "./project-list.styles"
import { PageMap } from "../../utils/page-config"

const ProjectList = props => {
  let projects = props.projects
  projects.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
  })
  console.log("A", projects)

  return (
    <ProjectListWrapper>
      {projects.map((project, index) => (
        <ProjectLink key={index} to={`${PageMap.PROJECT.slug}/${project.slug}`}>
          <ProjectListRow  colour={project.getCategoryColour()}>
            <p>{project.getCategory()}</p>
            <p>{`${project.title}, ${
              project.location
            }, ${project.getYear()}`}</p>
          </ProjectListRow>
        </ProjectLink>
      ))}
    </ProjectListWrapper>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ProjectList
