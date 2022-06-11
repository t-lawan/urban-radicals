import styled from 'styled-components';
import { size } from '../../styles/index.styles';

export const LayoutWrapper = styled.div`
  padding: var(--large-size-desktop);
  @media screen and (max-width: ${size.mobileL}) {
    padding: var(--large-size-mobile);
  }
`;

export const MainWrapper = styled.main`
	/* position: relative; */
`;