import styled from 'styled-components';

export const EditorWrapper = styled.div`
    width: 60%;
    padding: 20px 20px 0 0;
    align-items: center;
`

export const EditAreaWrapper = styled.div`

    width: 100%;
    min-width: 600px;

    display: flex;
    flex-direction: column;
    
    & textarea {
        align-self: center;
    }

    background-color: #ffffff;
    box-shadow: 2px 6px 8px rgba(0, 0, 0, 0.3);
`