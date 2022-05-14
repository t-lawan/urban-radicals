import { Link } from 'gatsby';
import styled from 'styled-components';

export const NavbarLink = styled(Link)`
    text-transform: ${props => props.selected ? "uppercase": "lowercase"}; 
    text-decoration: none;
`

export const NavbarWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
`;
