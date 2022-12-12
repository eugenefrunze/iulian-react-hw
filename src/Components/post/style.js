import styled from 'styled-components';

export const PostWrapper = styled.div`
    width: 100%;
    min-width: 300px;
    height: 120px;

    margin-bottom: 10px;

    background-color: #ffffff;
    ${props => props.isInEdit && `
        opacity: 0.4;
    `}
    box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.3);
`

export const ContentWrapper = styled.div`
    padding: 10px;
    
    & div {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
`;

export const TitleWrapper = styled.div`
    width: 100%;
    margin-right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.p`
    margin: 0;
    font-weight: 600;
`

export const RegularText = styled.p`
    margin: 0;
    font-weight: 400;
`