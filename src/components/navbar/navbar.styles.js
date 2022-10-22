import { Link } from 'gatsby';
import styled from 'styled-components';
import { size } from '../../styles/index.styles';

export const NavbarLink = styled(Link)`
    text-transform: ${props => props.selected ? "uppercase": "lowercase"}; 
    text-decoration: none;
    vertical-align: ${props => props.selected ? "text-top": "baseline"};
    font-weight: 600;
    font-size: var(--large-size);
    @media screen and (max-width: ${size.tablet}) {
        font-size: var(--medium-size);
        text-align: center;
  }
`

export const NavbarWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
    padding: var(--large-size) 0;
`;
