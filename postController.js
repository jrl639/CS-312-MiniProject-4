let posts = [];
let postId = 1;

exports.getPosts = (req, res) => res.json(posts);

exports.getPostById = (req, res) => {
  const post = posts.find(p => p.id == req.params.id);
  if (!post) return res.status(404).json({ message: 'Post not found' });
  res.json(post);
};

exports.createPost = (req, res) => {
  const { author, title, content } = req.body;
  const newPost = { id: postId++, author, title, content, createdAt: new Date() };
  posts.push(newPost);
  res.json(newPost);
};

exports.updatePost = (req, res) => {
  const { title, content } = req.body;
  const post = posts.find(p => p.id == req.params.id);
  if (!post) return res.status(404).json({ message: 'Post not found' });
  post.title = title;
  post.content = content;
  res.json(post);
};

exports.deletePost = (req, res) => {
  const index = posts.findIndex(p => p.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Post not found' });
  posts.splice(index, 1);
  res.json({ message: 'Post deleted' });
};
