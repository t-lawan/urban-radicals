import styled from 'styled-components'
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
  } from "pure-react-carousel"
export const ImageCarouselWrapper = styled.div`

`

export const StyledCarouselProvider = styled(CarouselProvider)`
    width: 100vw;
    height: 100vh;
    background: blue;
`

export const StyledSlider = styled(Slider)`
    width: 100%;
    height: 85vh;
    background: red;
`   

export const StyledSlide = styled(Slide)`

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
    bottom: 0;
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 5fr 1fr;
    height: 15vh;
`