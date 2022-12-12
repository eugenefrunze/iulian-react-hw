import { useState, useEffect } from 'react';
import Post from 'Components/post';
import { mockData } from 'mock/mockData';
import { PostsListWrapper } from './style';

const Postslist = () => {
    const [data, setData] = useState([]);
    const [cardInEdit, setCardInEdit] = useState();

    const getData = () => {
        setTimeout(() => {
            setData(mockData);
        }, 0);
    }

    useEffect(() => {
        getData();
    }, []);

    const EditPost = (id) => {
        setCardInEdit(id);
        console.log('CIE ' + cardInEdit);
    }

    return(
        <PostsListWrapper>
            {data.map((post, index) => (
                <Post
                    key={`thekey${index}}`}
                    id={post.id}
                    isInEdit={false}
                    title={post.title}
                    content={post.content}
                    name={post.name}
                    lastName={post.lastName}
                    onEdit={EditPost}
                />
            ))}
        </PostsListWrapper>
    );
}

export default Postslist;