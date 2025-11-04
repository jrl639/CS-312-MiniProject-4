import React, { useState } from 'react';
import BlogPostForm from './components/BlogPostForm';
import PostList from './components/PostList';
import EditPostForm from './components/EditPostForm';
import Signup from './components/Signup';
import Signin from './components/Signin';

function App() {
  const [editingPost, setEditingPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null); // logged-in user
  const [showSignup, setShowSignup] = useState(false);

  const handlePostCreated = (newPost) => setPosts([newPost, ...posts]);
  const handlePostUpdated = (updatedPost) => {
    setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
    setEditingPost(null);
  };

  if (!user) {
    return showSignup ? (
      <Signup onSignup={() => setShowSignup(false)} />
    ) : (
      <Signin onSignin={setUser} />
    );
  }

  return (
    <div>
      <h1>My Blog</h1>
      <p>Welcome, {user.name} <button onClick={() => setUser(null)}>Logout</button></p>
      {editingPost ? (
        <EditPostForm post={editingPost} onUpdate={handlePostUpdated} />
      ) : (
        <BlogPostForm onPostCreated={handlePostCreated} />
      )}
      <PostList onEdit={setEditingPost} posts={posts} />
    </div>
  );
}

export default App;
