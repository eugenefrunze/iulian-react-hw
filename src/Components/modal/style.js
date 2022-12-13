import styled from 'styled-components';

export const ModalWrapper = styled.div`
    width: ${(props) => props.width};
    padding: 32px;
    background-color: #ffffff;
    box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.3);
`;

export const ModalContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 5;
    display: grid;
    place-items: center;
    background-color: rgba(32, 32, 32, 0.4);
`