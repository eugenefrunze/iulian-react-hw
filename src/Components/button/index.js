import {ButtonWrapper} from './style';

const Button = (props) => {
    const {text, onClick} = props;
    return(
        <ButtonWrapper
            onClick={onClick}
            fontWeight={props.fontWeight}>
            {text}
        </ButtonWrapper>
    )
}

export default Button;