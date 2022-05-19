import styled from 'styled-components';

export const SelectedProjectsWrapper = styled.div`/* padding: 1rem;
  max-height: 100vh;
  max-width: 100vw; */`;

export const SelectedProjectRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem 0;
  :hover {
    > * > * {
      /* opacity: .5; */
      color: ${props => props.colour} !important;
      /* filter: sepia(100%) saturate(300%) brightness(70%) hue-rotate(180deg); */
    }

    > * {
      opacity: .5;
      /* color: ${props => props.colour} !important; */
      /* filter: sepia(100%) saturate(300%) brightness(70%) hue-rotate(180deg); */
    }
  }
`