import React, { useState } from "react"
import "pure-react-carousel/dist/react-carousel.es.css"
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel"
import {
  CarouselFooter,
  ImageCarouselWrapper,
  StyledButtonBack,
  StyledButtonNext,
  StyledCarouselProvider,
  StyledSlide,
  StyledSlider,
} from "./image-carousel.styles"

const ImageCarousel = props => {
  console.log("imageCollection", props.imageCollection)
  console.log("imageIndex", props.imageIndex)
  return (
    <ImageCarouselWrapper>
      <StyledCarouselProvider
        naturalSlideWidth={1000}
        naturalSlideHeight={1000}
        totalSlides={props.imageCollection.length}
        currentSlide={props.imageIndex}
      >
        <StyledSlider>
          {props.imageCollection.map((image, index) => (
            <StyledSlide key={index} index={index}>
              I am the first Slide.
            </StyledSlide>
          ))}
        </StyledSlider>
        <CarouselFooter>
          <StyledButtonBack>
            <p>Back </p>
          </StyledButtonBack>
          <p> Text </p>
          <StyledButtonNext>
            <p>Next </p>
          </StyledButtonNext>
        </CarouselFooter>
      </StyledCarouselProvider>
    </ImageCarouselWrapper>
  )
}

export default ImageCarousel
