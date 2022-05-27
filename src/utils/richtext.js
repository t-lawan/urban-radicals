import React from "react"
import { MARKS, INLINES } from "@contentful/rich-text-types"
import styled from "styled-components"
import { ContentBoxType } from "../models/ContentModel"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Convert } from "./convert"
import ImageCollectionItem from "../components/image-collection-item/image-collection-item"

const EXTERNALLINK = styled.a``
export const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <EXTERNALLINK href={node.data.uri} target="__blank">
        {children}
      </EXTERNALLINK>
    ),
  },
}

export const generateContentBlock = (block, index) => {
  switch (block.type) {
    case ContentBoxType.TEXT_BLOCK:
      return (
        <React.Fragment key={index}>
          {documentToReactComponents(
            JSON.parse(block.text.raw),
            richTextOptions
          )}
        </React.Fragment>
      )
    case ContentBoxType.IMAGE_BLOCK:
      return generateImageBlock(block, index)
    case ContentBoxType.IMAGE_COLLECTION_BLOCK:
      let imageCollection = block.image_collection;
      return (
        <React.Fragment key={index}>
          {imageCollection.map((img, ind) => (
            <ImageCollectionItem key={ind} imageCollection={imageCollection} imageBlock={img} imageIndex={ind} />
          ))}
        </React.Fragment>
      )
    default:
      return <></>
  }
}

export const generateImageBlock = (block, index) => {
  let image_content
  switch (block.image_layout) {
    case IMAGE_LAYOUT.DOCUMENTATION_IMAGE:
      let image = getImage(block.images[0])
      image_content = <DocumentationImage image={image} alt={"IMAGE"} />
      break
    case IMAGE_LAYOUT.FULL_WIDTH:
      image_content = (
        <FullWidthImage image={getImage(block.images[0])} alt={"IMAGE"} />
      )
      break
    case IMAGE_LAYOUT.HALF_WIDTH:
      image_content = (
        <HalfWidthImage image={getImage(block.images[0])} alt={"IMAGE"} />
      )
      break
  }
  return (
    <ImageWrapper key={index}>
      {image_content}
      {documentToReactComponents(JSON.parse(block.text.raw), richTextOptions)}
    </ImageWrapper>
  )
}

const Image = styled(GatsbyImage)``

const DocumentationImage = styled(Image)`
  width: 40%;
`

const FullWidthImage = styled(Image)`
  /* background: green; */
`
const HalfWidthImage = styled(Image)`
  width: 50%;
`

const ColouredBackground = styled.div`
  width: 100%;
  position: absolute;
  height: 100%;
`

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ImageCollectionItemWrapper = styled.div`

`

const IMAGE_LAYOUT = {
  DOCUMENTATION_IMAGE: "DOCUMENTATION_IMAGE",
  FULL_WIDTH: "FULL_WIDTH",
  HALF_WIDTH: "HALF_WIDTH",
}
