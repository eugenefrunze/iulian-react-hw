import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    width: 130px;
    height: 25px;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #858b89;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 12px;
    text-transform: uppercase;
    user-select: none;
    font-weight: ${props => props.fontWeight || 'normal'};
    
    color: #ffffff;

    &:hover {
        background-color: #A4A4A4;
    }

    &:active{
        background-color: #858b89;
    }
`