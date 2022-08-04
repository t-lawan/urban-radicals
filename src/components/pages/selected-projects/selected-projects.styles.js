import styled from "styled-components"
import { size } from "../../../styles/index.styles"

export const SelectedProjectsWrapper = styled.div`
  /* padding: 1rem;
  max-height: 100vh;
  max-width: 100vw; */
`

export const SelectedProjectRowItemWrapper = styled.div`
  /* padding: 0.5rem; */
`

export const SelectedProjectRowDiv = styled.div`
  margin-bottom: calc(var(--large-size) * 3.5);
  position: relative;
`
export const SelectedProjectRowWrapper = styled.div`
  flex-direction: row;
  display: flex;
  padding: 1rem 0;
  gap: var(--large-size);
  justify-content: center;
  align-items: center;

  display: grid;
  grid-template-columns: repeat(5, 1fr);

  :hover {
    * div.gatsby-image-wrapper {
      /* background-color: green; */
      border-color: ${props => props.colour} !important;
    }
    picture > img {
      background-color: ${props => props.colour} !important;
      ${props => props.filter};
      /* filter: sepia(100%) saturate(300%) brightness(70%) hue-rotate(180deg); */
      opacity: 0.5;
    }
    p {
      color: ${props => props.colour} !important;
    }

    > * {
      opacity: 0.5;
    }
  }
`

export const SelectedProjectText = styled.div`
  /* width: 100%;
  height: 100%; */
  * {
    color: ${props => props.colour} !important;
    font-size: var(--large-size);
  }

  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  text-align: center;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`
export const SelectedProjectColumn = styled.div`
  grid-column-start: ${props => props.columnStart};
  grid-column-end: ${props => props.columnEnd};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
