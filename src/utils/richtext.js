import React from "react"
import { MARKS, INLINES } from "@contentful/rich-text-types"
import styled from "styled-components"
import { ContentBoxType } from "../models/ContentModel"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Convert } from "./convert"
import ImageCollectionItem from "../components/image-collection-item/image-collection-item"
import { size } from "../styles/index.styles"

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
  let image_content;
  let width;
  switch (block.image_layout) {
    case IMAGE_LAYOUT.DOCUMENTATION_IMAGE:
      let image = getImage(block.images[0])
      width = '40%'
      image_content = <DocumentationImage image={image} alt={"IMAGE"} />
      break
    case IMAGE_LAYOUT.FULL_WIDTH:
      width = '100%'
      image_content = (
        <FullWidthImage image={getImage(block.images[0])} alt={"IMAGE"} />
      )
      break
    case IMAGE_LAYOUT.HALF_WIDTH:
      width = '50%'
      image_content = (
        <HalfWidthImage image={getImage(block.images[0])} alt={"IMAGE"} />
      )
      break
  }
  return (
    <ImageWrapper width={width} key={index}>
      {image_content}
      {block.text ? (
        <ImageCaption>
        {documentToReactComponents(JSON.parse(block.text.raw), richTextOptions)}
      </ImageCaption>
      ): null}

    </ImageWrapper>
  )
}

const Image = styled(GatsbyImage)``

const DocumentationImage = styled(Image)`
  padding: 7px 0;
  padding: calc(var(--large-size-desktop)/4) 0;
  @media screen and (max-width: ${size.mobileL}) {
    padding: calc(var(--large-size-desktop)/4) 0;
  }
  border: 3px solid black;
`


const FullWidthImage = styled(Image)`
  /* background: green; */

`
const HalfWidthImage = styled(Image)`
  /* width: 50%; */
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
  width: ${props => props.width};
  margin-top: calc(var(--large-size-desktop));
  @media screen and (max-width: ${size.mobileL}) {
    margin-top: calc(var(--large-size-desktop));
  }
`

const ImageCollectionItemWrapper = styled.div`

`

const ImageCaption = styled.div`
  align-self: flex-start;
  padding: 21px 0;
  padding: calc((var(--large-size-desktop)* 3)/4) 0;
  @media screen and (max-width: ${size.mobileL}) {
    font-size: calc((var(--large-size-desktop)* 3)/4) 0;
  }
`

const IMAGE_LAYOUT = {
  DOCUMENTATION_IMAGE: "DOCUMENTATION_IMAGE",
  FULL_WIDTH: "FULL_WIDTH",
  HALF_WIDTH: "HALF_WIDTH",
}
