import {PostWrapper, ContentWrapper, TitleWrapper, Title, RegularText} from './style';
import Header from 'Components/header';
import Button from 'Components/button';

const Post = ({post, isInEdit, onEdit}) => {

    const handlerOnPostEdit = () => {
        onEdit(post);
    }

    return(
        <PostWrapper
            isInEdit={isInEdit}>
            <Header>
                <TitleWrapper>
                    <Title>
                        {post.title}
                    </Title>
                    <div style={{display: 'flex'}}>
                        <RegularText>
                            {'Author:'}
                        </RegularText>  
                        <Title>
                            {post.author}
                        </Title> 
                    </div>
                </TitleWrapper>
                <Button
                    onClick={handlerOnPostEdit}
                    text={'edit'}
                />
            </Header>
            <ContentWrapper>
                <div>{post.content}</div>
                 
            </ContentWrapper>
        </PostWrapper>
    )
}

export default Post;