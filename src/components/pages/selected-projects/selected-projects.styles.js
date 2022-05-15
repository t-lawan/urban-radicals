import styled from 'styled-components';

export const SelectedProjectsWrapper = styled.div`/* padding: 1rem;
  max-height: 100vh;
  max-width: 100vw; */`;

export const SelectedProjectRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  :hover {
    > * > * {
      color: ${props => props.colour} !important;
      filter: sepia(100%) saturate(300%) brightness(70%) hue-rotate(180deg);


    }
  }
`