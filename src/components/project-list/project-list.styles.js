import { Link } from 'gatsby';
import styled from 'styled-components';

export const ProjectLink = styled(Link)`
    text-decoration: none;
    width: 100%;
    margin: 0;
`

export const ProjectListRow = styled.div`
    display:grid;
    grid-template-columns: 2fr 6fr;
    width: 100%;
    :hover {
        > * {
            color: ${props => props.colour} !important;
        }
    }
`



export const ProjectListRowText = styled.p`
    /* :hover {
        color: ${props => props.colour};
    } */
`

export const ProjectListWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: baseline;
`;
