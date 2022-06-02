import styled from 'styled-components'

export const ImageCollectionItemWrapper = styled.div`

`

export const ImageItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Modal = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background: red;
    display: ${props => props.show ? 'block': 'none'};
`