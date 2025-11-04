let users = [];

exports.signup = (req, res) => {
  const { userId, password, name } = req.body;
  users.push({ userId, password, name });
  res.json({ message: 'User created' });
};

exports.signin = (req, res) => {
  const { userId, password } = req.body;
  const user = users.find(u => u.userId === userId && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  res.json({ message: 'Login successful', user });
};
