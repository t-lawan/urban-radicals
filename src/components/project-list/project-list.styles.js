import { Link } from 'gatsby';
import styled from 'styled-components';
import { size } from '../../styles/index.styles';

export const ProjectLink = styled(Link)`
    text-decoration: none;
    width: 100%;
    margin: 0;
`

export const ProjectListRow = styled.div`
    display:grid;
    grid-template-columns: 1fr 7fr;
    width: 100%;
    :hover {
        > * {
            color: ${props => props.colour} !important;
        }
    }

    @media (max-width: ${size.laptop}) {
        grid-template-columns: 1fr 5fr;
    }

    @media screen and (max-width: ${size.tablet}) {
        grid-template-columns: 1fr 1fr;
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
