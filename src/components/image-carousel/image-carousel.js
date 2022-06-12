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
  StyledCarouel
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
                <Image image={getImage(image.images[0])} objectFit={'cover'} alt={'image'}/>
                <p> HELLO</p>
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
      {/* <StyledCarouel
          showThumbs={false}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          centerMode={false}
          swipeable={false}
          stopOnHover={true}
          dynamicHeight={false}
          infiniteLoop={false}
          autoPlay={false}>
          {props.imageCollection.map((image, index) => (
            <ImageWrapper key={index}>
                <Image image={getImage(image.images[0])} objectFit={'contain'} alt={'image'}/>
            </ImageWrapper>
          ))}
      </StyledCarouel> */}
    </ImageCarouselWrapper>
  )
}

export default ImageCarousel
