import mysql from 'mysql2/promise';
import { config } from 'dotenv';

config();

const db = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
   
    const f_name = req.body.f_name.trim();
    const l_name = req.body.l_name.trim();
    const email = req.body.email.trim();
    const password = req.body.password.trim();

   
    

    try {
      const connection = await mysql.createConnection(db);
      try {
        const [result] = await connection.execute(
          'INSERT INTO user (f_name, l_name, email, password) VALUES (?, ?, ?, ?)',
          [f_name, l_name, email, password]
        );
        console.log('User registered successfully');
        return res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
      } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
          return res.status(400).json({ message: 'Email already exists' });
        }
        console.error('Error registering user:', error.message);
        return res.status(500).json({ message: 'Internal Server Error' });
      } finally {
        connection.end(); // Close the database connection
      }
    } catch (error) {
      console.error('Error connecting to database:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
