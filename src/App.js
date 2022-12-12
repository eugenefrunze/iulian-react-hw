import { useState, useEffect } from 'react';
import './style.css';
import { mockData } from 'mock/mockData';
import Post from 'Components/post';
import Editor from 'Components/editor';

function App() {
  const [data, setData] = useState([]);
  const [cardInEdit, setCardInEdit] = useState();

  const [postToEdit, setPostToEdit] = useState({});
  const handleAtPostForEdit = (post) => {
    setPostToEdit(post);
  }

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

  return (
    <div className='App'>

      <div className='postsListWrapper'>
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
      </div>

      <Editor />
    </div>
  );
}

export default App;