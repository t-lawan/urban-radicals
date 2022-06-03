import styled from 'styled-components'
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
  } from "pure-react-carousel"
import { GatsbyImage } from "gatsby-plugin-image"


export const Image = styled(GatsbyImage)`
    width: 80%;
    max-height: 80%;
`

export const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(255,0,0, 5);

`
export const ImageCarouselWrapper = styled.div`

`

export const StyledCarouselProvider = styled(CarouselProvider)`
    width: 100vw;
    height: 100vh;
`

export const StyledSlider = styled(Slider)`
    width: 100%;
    height: 85vh;
    border: 3px solid black;

`   

export const StyledSlide = styled(Slide)`
    width: 100%;
    height: 100%;
`

export const StyledButtonBack = styled(ButtonBack)`
background: transparent;
    border: 0;
`

export const StyledButtonNext= styled(ButtonNext)`
background: transparent;
    border: 0;
`

export const CarouselFooter = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    height: 15vh;
background: transparent;

`

export const ImageCaption = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
`