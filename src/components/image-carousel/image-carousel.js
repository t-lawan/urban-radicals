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
  StyledCarouel,
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
        naturalSlideWidth={1920}
        naturalSlideHeight={1080}
        totalSlides={imageCollection.length}
        currentSlide={imageIndex}
        isIntrinsicHeight={true}
      >
        <StyledSlider>
          {props.imageCollection.map((image, index) => (
            <StyledSlide key={index} index={index}>
              <ImageWrapper>
                <Image
                  image={getImage(image.images[0])}
                  objectFit={"cover"}
                  alt={"image"}
                />
              </ImageWrapper>
            </StyledSlide>
          ))}
        </StyledSlider>
        <CarouselFooter>
          <StyledButtonBack onClick={() => moveToPreviousImage()}>
            <p>previous </p>
          </StyledButtonBack>
          <ImageCaption>
            {imageCollection.length > 0 ? (
              <p> {imageCollection[imageIndex].image_caption} </p>
            ) : null}
          </ImageCaption>
          <StyledButtonNext onClick={() => moveToNextImage()}>
            <p>next </p>
          </StyledButtonNext>
        </CarouselFooter>
      </StyledCarouselProvider>
    </ImageCarouselWrapper>
  )
}

export default ImageCarousel
