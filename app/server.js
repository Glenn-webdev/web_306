const express = require('express');
const { json } = require('body-parser');
const { createConnection } = require('mysql2');
const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const app = express();
const port = 3001;

// Middleware to parse JSON
app.use(json());

// Database connection
const connection = createConnection({
  host: '10.10.4.29',
  user: 'appuser',
  password: 'Glenn2722**',
  database: 'web'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to database.');
});

// Secret key for JWT
const JWT_SECRET = 'glenn';

// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (results.length === 0) return res.status(401).json({ error: 'Invalid email or password' });

    const user = results[0];
    compare(password, user.password, (err, isMatch) => {
      if (err) return res.status(500).json({ error: 'Error comparing passwords' });
      if (!isMatch) return res.status(401).json({ error: 'Invalid email or password' });

      const token = sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://10.10.4.29:${port}`);
});
