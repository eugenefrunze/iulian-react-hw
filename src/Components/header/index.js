import { HeaderWrapper } from "./style"
import Button from 'Components/button';

const Header = (props) => {
    const { children } = props;
    return(
        <HeaderWrapper>
            {children}
        </HeaderWrapper>
    )
}

export default Header;
