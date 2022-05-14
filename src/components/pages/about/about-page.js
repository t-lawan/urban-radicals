import React from "react"
import { AboutPageWrapper } from "./about-page.styles"
import PropTypes from "prop-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { generateContentBlock, richTextOptions } from "../../../utils/richtext"

const AboutPage = (props) => {
  let page = props.page;
  console.log("PAGE", page)

  return (
    <AboutPageWrapper>
      {page.content.map((block, index) => generateContentBlock(block, index))}
    </AboutPageWrapper>
  )
}

AboutPage.propTypes = {
  page: PropTypes.object,
}

export default AboutPage
