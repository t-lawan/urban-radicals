import { Link } from 'gatsby';
import styled from 'styled-components';
import { size } from '../../styles/index.styles';

export const NavbarLink = styled(Link)`
    text-transform: ${props => props.selected ? "uppercase": "lowercase"}; 
    text-decoration: none;
    vertical-align: ${props => props.selected ? "text-top": "baseline"};
    font-weight: 600;
`

export const NavbarWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
    padding: var(--large-size-desktop) 0;
  @media screen and (max-width: ${size.mobileL}) {
    font-size: var(--large-size-mobile) 0;
  }
`;
