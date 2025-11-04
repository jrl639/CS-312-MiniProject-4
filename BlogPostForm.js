import React, { useState } from 'react';
import { createPost } from '../api/api';

const BlogPostForm = ({ onPostCreated }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createPost({ author, title, content });
    onPostCreated(res.data);
    setAuthor('');
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" required />
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default BlogPostForm;
