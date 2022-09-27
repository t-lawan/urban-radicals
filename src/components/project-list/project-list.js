import React from "react"
import PropTypes from "prop-types"
import {
  ProjectLink,
  ProjectListRow,
  ProjectListWrapper,
} from "./project-list.styles"
import { PageMap } from "../../utils/page-config"
import { BaselineText } from "../../styles/index.styles"

const ProjectList = props => {
  let projects = props.projects
  projects.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
  })

  return (
    <ProjectListWrapper>
      {projects.map((project, index) => (
        <ProjectLink key={index} to={`${PageMap.PROJECT.slug}/${project.slug}`}>
          <ProjectListRow  colour={project.getCategoryColour()}>
            <p>{project.getCategory().toLowerCase()}</p>
            <p> <BaselineText>{`${project.title}`}</BaselineText>{`, ${
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
