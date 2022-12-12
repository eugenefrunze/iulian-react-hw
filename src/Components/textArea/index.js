import { TextWrapper } from "./style";

const TextArea = ({ content }) => {

    return(
        <TextWrapper
            defaultValue={content.current}
            ref={content}
        />
        
    )
}

export default TextArea;