import { useState, useRef } from 'react';
import {EditorWrapper, EditAreaWrapper} from './style';
import mockData from 'mock/mockData';
import TextArea from 'Components/textArea';
import Button from 'Components/button';
import Header from 'Components/header';
import Footer from 'Components/footer';

const {id, title, content, name, lastName} = mockData[0];

const Editor = () => {
    const contentRef = useRef(content);

    const Reset = () => {
        console.log(contentRef.current.value);
    }

    const Save = () => {
        console.log('SAVE');
    }

    const Cancel = () => {
        console.log('CANCEL');
    }

    return(
        <EditorWrapper>
            <EditAreaWrapper>
                <Header>
                    <div>
                        {id + '. ' + title + ', ' + name + ' ' + lastName}
                    </div>
                    <Button
                        onClick={Reset}
                        text={'reset'}
                    />
                </Header>
                <TextArea
                    content={contentRef}
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