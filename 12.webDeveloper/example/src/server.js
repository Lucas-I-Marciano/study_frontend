import express from 'express';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_secret_key';

app.use(bodyParser.json());

// Fake database
const fake_database = [
  { username: 'user1', email: 'user1@example.com', password: 'password1' },
  { username: 'user2', email: 'user2@example.com', password: 'password2' },
];

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Find user in the fake database
  const user = fake_database.find(u => u.email === email && u.password === password);

  if (user) {
    // Generate JWT token
    const token = jwt.sign({ username: user.username, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to authenticate token' });
    }

    req.user = decoded;
    next();
  });
};

// Route to get decoded token
app.get('/me', verifyToken, (req, res) => {
  res.json({ email: req.user.email, username: req.user.username });
});

app.get("/", (req, res)=>{res.json({message: "Ok!"})})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});