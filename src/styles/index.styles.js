import styled, { createGlobalStyle } from "styled-components"

export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2500px",
}

export const GlobalStyle = createGlobalStyle`
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
font-size: 2.5rem;
line-height: 1.1;
}
h2 {
margin-bottom: 1.45rem;
font-size: 1.6rem;
line-height: 1.1;
}
h3 {
margin-bottom: 1.45rem;
font-size: 1.3rem;
line-height: 1.1;
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
font-size: 1.5rem;
line-height: 1.15;
font-style: normal;
@media screen and (min-width: ${size.laptopL}) {
  font-size: 2.25rem;
  ${"" /* font-size: 2rem; */}

	}
@media screen and (max-width: ${size.tablet}) {
  font-size: 1.25rem;

	}

}
  `
