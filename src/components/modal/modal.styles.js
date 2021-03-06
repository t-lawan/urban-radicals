import styled from 'styled-components'

export const ModalWrapper = styled.div`
    display: ${props => props.show ? 'block': 'none'};
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 50;
    background: white;
    overflow-y: hidden;
`

export const ModalCloseButton = styled.p`
    position: absolute;
    top: 5%;
    right: 5%;
    font-weight: bold;
    z-index: 60;

`