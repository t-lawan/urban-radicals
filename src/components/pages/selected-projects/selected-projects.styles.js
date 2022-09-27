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
  grid-template-columns: repeat(4, 1fr);

  :hover {
    * div.gatsby-image-wrapper {
      border-color: ${props => props.colour} !important;

      img {
        -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
         filter: grayscale(100%);
      }
      /* filter: grayscale(100%); */

      &:after {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color:  ${props => props.colour};
        opacity: 0.7;
        top: 0;
        left: 0;
        display: block;
        content: "";
      }
    }
    p {
      color: ${props => props.colour} !important;
    }
  }
`

export const SelectedProjectText = styled.div`
  * {
    font-size: var(--large-size);
  }

  position: absolute;
  top: 40%;
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
