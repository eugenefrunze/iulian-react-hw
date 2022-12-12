import {PostWrapper, ContentWrapper, TitleWrapper, Title, RegularText} from './style';
import Header from 'Components/header';
import Button from 'Components/button';

const Post = ({id, isInEdit, title, content, name, lastName, onEdit}) => {
    return(
        <PostWrapper
            isInEdit={isInEdit}>
            <Header>
                <TitleWrapper>
                    <Title>
                        {title}
                    </Title>
                    <div style={{display: 'flex'}}>
                        <RegularText>
                            {'Author:'}
                        </RegularText>  
                        <Title>
                            {[name, lastName].join(', ')}
                        </Title> 
                    </div>
                    
                </TitleWrapper>
                <Button
                    // onClick={() => onEdit(id)}
                    text={'edit'}
                />
            </Header>
            <ContentWrapper>
                <div>{content}</div>
                 
            </ContentWrapper>
        </PostWrapper>
    )
}

export default Post;