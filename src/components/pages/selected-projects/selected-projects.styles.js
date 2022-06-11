import styled from 'styled-components';
import { size } from '../../../styles/index.styles';

export const SelectedProjectsWrapper = styled.div`/* padding: 1rem;
  max-height: 100vh;
  max-width: 100vw; */`;

export const SelectedProjectRowItemWrapper = styled.div`
  /* padding: 0.5rem; */
`
export const SelectedProjectRow = styled.div`
  flex-direction: row;
  display: flex;
  padding: 1rem 0;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  margin-bottom: calc(var(--large-size-desktop)* 3.5);
  @media screen and (max-width: ${size.mobileL}) {
    margin-bottom: calc(var(--large-size-mobile)* 3.5);
  }
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