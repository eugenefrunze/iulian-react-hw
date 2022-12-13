import { useEffect, useState } from 'react';
import {EditorWrapper, EditAreaWrapper} from './style';
import TextArea from 'Components/textArea';
import Button from 'Components/button';
import Header from 'Components/header';
import Footer from 'Components/footer';


const Editor = ({postToEdit, setPostToEdit, onUpdate}) => {

    const [post, setPost] = useState({...postToEdit});

    useEffect(() => {
        setPost({...postToEdit});
    }, [postToEdit.id]);

    const reset = () => {
        setPost({...postToEdit});
    }

    const Save = () => {
        const updatedObj = {
            ...postToEdit, content: post.content
        }
        onUpdate(updatedObj);
    }

    const Cancel = () => {
        // setPost({});
        setPostToEdit({});
    }

    const handlerTextChange = (text) => {
        setPost((state) => {
            return {...state, content: text};
        });
    }

    return(
        <EditorWrapper>
            <EditAreaWrapper>
                <Header>
                    <div>
                        {post.title && post.id + '. ' + post.title + ', ' + post.author}
                    </div>
                    <Button
                        onClick={reset}
                        text={'reset'}
                    />
                </Header>
                <TextArea
                    content={post.content}
                    onChange={handlerTextChange}
                />
                <Footer>
                    <Button
                        onClick={Save}
                        text='save'
                    />
                    <Button
                        onClick={Cancel}
                        text='cancel'
                    />
                </Footer>
            </EditAreaWrapper>
        </EditorWrapper>
    );
}

export default Editor;