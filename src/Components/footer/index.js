import {FooterWrapper} from './style';
import Button from "Components/button";

const EditorFooter = (props) => {
    const { children } = props
    return (
        <FooterWrapper>
            {children}
        </FooterWrapper>  
    );
}

export default EditorFooter;