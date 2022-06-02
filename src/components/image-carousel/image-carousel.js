import React, { useState, useEffect } from "react"
import "pure-react-carousel/dist/react-carousel.es.css"
import { getImage } from "gatsby-plugin-image"

import {
  CarouselFooter,
  Image,
  ImageCaption,
  ImageCarouselWrapper,
  ImageWrapper,
  StyledButtonBack,
  StyledButtonNext,
  StyledCarouselProvider,
  StyledSlide,
  StyledSlider,
} from "./image-carousel.styles"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions } from "../../utils/richtext"

const ImageCarousel = props => {
  const [imageIndex, SetImageIndex] = useState(0)
  const [imageCollection, SetImageCollection] = useState([])

  useEffect(() => {
    // code to run on component mount
    SetImageIndex(props.imageIndex)
    SetImageCollection(props.imageCollection)
  }, [])

  const moveToPreviousImage = () => {
    console.log("moveToPreviousImage")
    console.log(imageCollection)

    if (imageIndex > 0) {
      SetImageIndex(imageIndex - 1)
    }
  }

  const moveToNextImage = () => {
    console.log(imageCollection)

    console.log("moveToPreviousImage")
    if (imageIndex < imageCollection.length - 1) {
      SetImageIndex(imageIndex + 1)
    }
  }

  return (
    <ImageCarouselWrapper>
      <StyledCarouselProvider
        naturalSlideWidth={1000}
        naturalSlideHeight={1000}
        totalSlides={imageCollection.length}
        currentSlide={imageIndex}
      >
        <StyledSlider>
          {props.imageCollection.map((image, index) => (
            <StyledSlide key={index} index={index}>
              <ImageWrapper>
                <Image image={getImage(image.images[0])} objectFit={'contain'} alt={'image'}/>
              </ImageWrapper>
            </StyledSlide>
          ))}
        </StyledSlider>
        <CarouselFooter>
          <StyledButtonBack onClick={() => moveToPreviousImage()}>
            <p>Previous </p>
          </StyledButtonBack>
          <ImageCaption>
            {imageCollection.length > 0
              ? documentToReactComponents(
                  JSON.parse(imageCollection[imageIndex].text.raw),
                  richTextOptions
                )
              : null}
          </ImageCaption>
          <StyledButtonNext onClick={() => moveToNextImage()}>
            <p>Next </p>
          </StyledButtonNext>
        </CarouselFooter>
      </StyledCarouselProvider>
    </ImageCarouselWrapper>
  )
}

export default ImageCarousel
