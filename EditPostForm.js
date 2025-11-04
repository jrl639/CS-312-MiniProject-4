import React, { useState } from 'react';
import { updatePost } from '../api/api';

const EditPostForm = ({ post, onUpdate }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await updatePost(post.id, { title, content });
    onUpdate(res.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} required />
      <textarea value={content} onChange={e => setContent(e.target.value)} required />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditPostForm;
