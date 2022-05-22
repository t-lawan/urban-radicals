import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { richTextOptions } from "../../utils/richtext"
import { JumbotronWrapper } from "./jumbotron.styles"

const Jumbotron = () => {
  const { contentfulSite } = useStaticQuery(
    graphql`
      query {
        contentfulSite {
          jumbotronText {
            raw
          }
        }
      }
    `
  )

  return (
    <JumbotronWrapper>
      {documentToReactComponents(JSON.parse(contentfulSite.jumbotronText.raw), richTextOptions)}
    </JumbotronWrapper>
  )
}

export default Jumbotron
