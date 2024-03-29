import React from "react"
import { MARKS, INLINES } from "@contentful/rich-text-types"
import styled from "styled-components"
import { ContentBoxType } from "../models/ContentModel"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Convert } from "./convert"
import ImageCollectionItem from "../components/image-collection-item/image-collection-item"
import { size } from "../styles/index.styles"

const EXTERNALLINK = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  vertical-align: -4.25pt;
`
export const CODE = styled.code`
  font-family: inherit;
  vertical-align: -4.25pt;
  text-transform: uppercase;
`
export const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>,
    [MARKS.CODE]: text => <CODE> { text } </CODE>
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <EXTERNALLINK href={node.data.uri} target="__blank">
        {children}
      </EXTERNALLINK>
    ),
  },
}

export const renderText = (rawText) => {
  return (
    <TextBlock>
    {documentToReactComponents(
      JSON.parse(rawText),
      richTextOptions
    )}
  </TextBlock>
  )
}

const isImagePortrait = (gatsbyImageData) => {
  return gatsbyImageData.height > gatsbyImageData.width
}

export const generateContentBlock = (block, index) => {
  switch (block.type) {
    case ContentBoxType.TEXT_BLOCK:
      return (
        <TextBlock key={index}>
          {documentToReactComponents(
            JSON.parse(block.text.raw),
            richTextOptions
          )}
        </TextBlock>
      )
    case ContentBoxType.IMAGE_BLOCK:
      return generateImageBlock(block, index)
    case ContentBoxType.IMAGE_COLLECTION_BLOCK:
      let imageCollection = block.image_collection
      return (
        <React.Fragment key={index}>
          {imageCollection.map((img, ind) => (
            <ImageCollectionItem
              key={ind}
              imageCollection={imageCollection}
              imageBlock={img}
              imageIndex={ind}
            />
          ))}
        </React.Fragment>
      )
    default:
      return <></>
  }
}

export const generateImageBlock = (block, index) => {
  let image_content
  let width = "100%"
  let height = "auto"
  let captionWidth = "100%";
  switch (block.image_layout) {
    case IMAGE_LAYOUT.DOCUMENTATION_IMAGE:
      let image = getImage(block.images[0])
      width = "25%"
      image_content = <DocumentationImage image={image} alt={"IMAGE"} />
      break
    case IMAGE_LAYOUT.DOCUMENTATION_SELECTED_PROJECT:
      width = "50%"
      if(isImagePortrait(block.images[0].gatsbyImageData)){
        width = '90%';
      }
      image_content = (
        <DocumentationImage image={getImage(block.images[0])} alt={"IMAGE"} />
      )
      break
    case IMAGE_LAYOUT.FULL_WIDTH:
      width = "100%"
      image_content = (
        <FullWidthImage
          image={getImage(block.images[0])}
          alt={"IMAGE"}
          objectFit={"contain"}
        />
      )
      break
    case IMAGE_LAYOUT.HALF_WIDTH:
      width = "50%"
      image_content = (
        <HalfWidthImage image={getImage(block.images[0])} alt={"IMAGE"} />
      )
      break
    case IMAGE_LAYOUT.FULL_LANDSCAPE:
      width = "100%"
      image_content = (
        <FullLandscape image={getImage(block.images[0])} alt={"IMAGE"} />
      )
      break
    case IMAGE_LAYOUT.FULL_PORTRAIT:
      height = "100%"
      captionWidth = '60%'
      if(block.isSelectedProject){
        width = '80%'
      }
      image_content = (
        <FullPortrait image={getImage(block.images[0])} alt={"IMAGE"} />
      )
      break
    case IMAGE_LAYOUT.THREE_COLUMN_LANDSCAPE:
      width = "100%"
      captionWidth = "60%"
      image_content = (
        <ThreeColumnLandscapeWrapper>
          <ThreeColumnLandscape image={getImage(block.images[0])} alt={"IMAGE"} />

        </ThreeColumnLandscapeWrapper>
      )
      break
    case IMAGE_LAYOUT.TWO_COLUMN_LANDSCAPE:
      width = "40%"
      image_content = (
        <TwoColumnLandscape image={getImage(block.images[0])} alt={"IMAGE"} />
      )
      break
    case IMAGE_LAYOUT.TWO_COLUMN_PORTRAIT:
      width = "40%"
      height = "100%"
      image_content = (
        <TwoColumnPortrait image={getImage(block.images[0])} alt={"IMAGE"} />
      )
      break
    case IMAGE_LAYOUT.ONE_COLUMN_PORTRAIT:
      width = "25%"
      height = "100%"
      image_content = (
        <BaseImage image={getImage(block.images[0])} alt={"IMAGE"} />
      )
      break
    case IMAGE_LAYOUT.TWO_PHOTOS_IN_ROW:
      width = "100%";
      image_content = (
        <TwoColumnWrapper>
            <BaseImage image={getImage(block.images[0])} />
            <BaseImage image={getImage(block.images[1])} />
        </TwoColumnWrapper>
      )
  }

  return (
    <ImageWrapper width={width} height={height} key={index}>
      {image_content}
      {/* <Overlay>
        <p> HI </p>
      </Overlay> */}
      {block.text ? (
        <ImageCaption width={captionWidth}>
          {documentToReactComponents(
            JSON.parse(block.text.raw),
            richTextOptions
          )}
        </ImageCaption>
      ) : null}
    </ImageWrapper>
  )
}

const Image = styled(GatsbyImage)``

const DocumentationImage = styled(Image)`
  /* padding: 7px 0; */
  margin-top: calc(var(--large-size) / 4);
  border: 3px solid black;
`

const TextBlock = styled.div`
  margin-top: calc(var(--large-size));
`

const BaseImage = styled(Image)``
const FullWidthImage = styled(BaseImage)`
  /* background: green; */
`
const FullLandscape = styled(BaseImage)`
  /* background: green; */
`

const FullPortrait = styled(BaseImage)`
  /* background: green; */
`

const TwoColumnLandscape = styled(BaseImage)`
  /* background: green; */
`

const TwoColumnPortrait = styled(BaseImage)`
  /* background: green; */
`

const ThreeColumnLandscape = styled(BaseImage)`
  /* background: green; */
`

const HalfWidthImage = styled(BaseImage)`
  /* width: 50%; */
`

const ColouredBackground = styled.div`
  width: 100%;
  position: absolute;
  height: 100%;
`

const TwoColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: var(--large-size);
  width: 100%;
`

const ThreeColumnLandscapeWrapper = styled.div`
  width: 60%;
`

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  margin-top: calc(var(--large-size));
  /* padding: ${props => props.padding ? 'calc(3 *var(--large-size))' : null} */
`

const ImageCollectionItemWrapper = styled.div``

const ImageCaption = styled.div`
  /* align-self: flex-start; */
  padding: 21px 0;
  padding: calc((var(--large-size) * 3) / 4) 0;
  width: ${props => props.width};

`

export const IMAGE_LAYOUT = {
  DOCUMENTATION_SELECTED_PROJECT: "DOCUMENTATION_SELECTED_PROJECT",
  DOCUMENTATION_IMAGE: "DOCUMENTATION_IMAGE",
  FULL_WIDTH: "FULL_WIDTH",
  HALF_WIDTH: "HALF_WIDTH",

  FULL_LANDSCAPE: "FULL_LANDSCAPE",
  FULL_PORTRAIT: "FULL_PORTRAIT",

  THREE_COLUMN_LANDSCAPE: "THREE_COLUMN_LANDSCAPE",

  TWO_COLUMN_PORTRAIT: "TWO_COLUMN_PORTRAIT",
  TWO_COLUMN_LANDSCAPE: "TWO_COLUMN_LANDSCAPE",
  ONE_COLUMN_PORTRAIT: "ONE_COLUMN_PORTRAIT",
  ONE_COLUMN_LANDSCAPE: "ONE_COLUMN_LANDSCAPE",

  TWO_PHOTOS_IN_ROW: "TWO_PHOTOS_IN_ROW",
}
