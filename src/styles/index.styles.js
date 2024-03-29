import styled, { createGlobalStyle } from "styled-components"
import Helvetica from "../assets/fonts/HelveticaNeue Regular.ttf"

export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2500px",
}


export const BaselineText = styled.span`
  vertical-align: -4.25pt;

`

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "Helvetica";
  src: url(${Helvetica}) format('truetype');
  font-display: block;
}

:root {
  --large-size: 34px;
  @media screen and (max-width: ${size.tablet}) {
    --large-size: 28px;
  }

  --medium-size: 24px;
  @media screen and (max-width: ${size.tablet}) {
    --medium-size: 22px;
  }

  --small-size: 16px;
  @media screen and (max-width: ${size.tablet}) {
    --small-size: 14px;
  }



  --large-size: 34px;
  --large-size-mobile: 28px;
  --medium-size-desktop: 24px;
  --medium-size-mobile: 22px;
  --small-size-desktop: 16px;
  --small-size-mobile: 14px;
}

* {
    box-sizing: border-box;
    }  
    html {
  -webkit-text-size-adjust: 100%;
}
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  word-wrap: break-word;
font-family: 'Helvetica', sans-serif;

}
h1,h2,h3,h4,h5,h6 {
    margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
} 
h1 {
margin-bottom: 1.45rem;
font-size: 2.375rem;
line-height: 1.1;
font-size: var(--large-size);
}
h2 {
margin-bottom: 1.45rem;
font-size: 1.6rem;
line-height: 1.1;
font-size: var(--large-size) * 0.9;
  @media screen and (max-width: ${size.mobileL}) {
    font-size: var(--large-size-mobile) * 0.9;
  }
}
h3 {
margin-bottom: 1.45rem;
font-size: 1.3rem;
line-height: 1.1;
font-size: var(--large-size) * 0.8;
  @media screen and (max-width: ${size.mobileL}) {
    font-size: var(--large-size-mobile) * 0.8;
  }
}
h4 {
margin-bottom: 1.45rem;
font-size: 1.2rem;
line-height: 1.1;
}
h5 {
margin-bottom: 1.45rem;
font-size: 0.85028rem;
line-height: 1.1;
}
h6 {
margin-bottom: 1.45rem;
font-size: 0.78405rem;
vertical-align: text-top;
}
p, a{
margin-left: 0;
margin-right: 0;
margin-top: 0;
margin-bottom: 1rem;
padding-bottom: 0;
padding-left: 0;
padding-right: 0;
padding-top: 0;
font-size: 1.8392rem;
line-height: 1.15;
font-style: normal;
color: black;
font-size: var(--medium-size-desktop);
font-weight: bold;
  @media screen and (max-width: ${size.mobileL}) {
    font-size: var(--medium-size-mobile);
  }

}
  `
