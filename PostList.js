import React, { useEffect, useState } from 'react';
import { fetchPosts, deletePost } from '../api/api';

const PostList = ({ onEdit }) => {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const res = await fetchPosts();
    setPosts(res.data);
  };

  useEffect(() => { loadPosts(); }, []);

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p><i>{post.author}</i></p>
          <button onClick={() => onEdit(post)}>Edit</button>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
