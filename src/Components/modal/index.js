import Button from "Components/button";
import { ModalWrapper, ModalContainer } from "./style";

const Modal = ({isOpen, closeModal, children, width='250px', confirmAction, cancelAction}) => {
    if(!isOpen) return null;

    const confirmHandler = () => {
        confirmAction(isOpen);
    }

    return(
        <ModalContainer>
           <ModalWrapper width={width}>
                {children}
                <div>
                    <Button text={'confirm'} onClick={confirmHandler}/>
                    <Button text={'cancel'} onClick={cancelAction}/>
                </div>
            </ModalWrapper> 
        </ModalContainer>
        
    );
}

export default Modal;