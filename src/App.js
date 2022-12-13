import { useState, useEffect } from 'react';
import './style.css';
import { mockData } from 'mock/mockData';
import Post from 'Components/post';
import Editor from 'Components/editor';
import Modal from 'Components/modal';

function App() {
  const [data, setData] = useState([]);
  const [showPostModal, setShowPostModal] = useState(false);
  const [postToEdit, setPostToEdit] = useState({});

  const confirmModalAction = (post) => {
    setPostToEdit(post);
    setShowPostModal(false);
  }

  const cancelModalAction = (post) => {
    setShowPostModal(false);
  }

  const handleAtPostForEdit = (post) => {
    if(postToEdit.id !== post.id && postToEdit.id !== undefined) {
      return setShowPostModal(post);
    }
    setPostToEdit({...post});
  }

  const handlePostUpdate = (updatedPost) => {
    console.log(updatedPost);
    // update data
  }

  const getData = () => {
    setTimeout(() => {
      setData(mockData);
    }, 0);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='App'>

      <div className='postsListWrapper'>
        {data.map((post) => (
                <Post
                  post={{...post, author: post.name + ' ' + post.lastName}}
                  key={post.id}
                  isInEdit={post.id === postToEdit.id}
                  onEdit={handleAtPostForEdit}
                />
            ))}
      </div>
      <Modal
        confirmAction={confirmModalAction}
        cancelAction={cancelModalAction}
        isOpen={showPostModal}
        closeModal={setShowPostModal}>
          Hello there!
      </Modal>
      <Editor
        postToEdit={postToEdit}
        setPostToEdit={setPostToEdit}
        onUpdate={handlePostUpdate}
      />
    </div>
  );
}

export default App;