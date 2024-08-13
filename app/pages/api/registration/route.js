import mysql from 'mysql2/promise';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

const db = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { f_name, l_name, email, password } = req.body;
    const connection = await mysql.createConnection(db);
  

    if (!f_name || !l_name || !email || !password) {
   
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
  
      const [result] = await connection.execute(
        'INSERT INTO user (f_name, l_name, email, password) VALUES (?, ?, ?, ?)',
        [f_name, l_name, email, password]
      );

     
      return res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    } catch (error) {
      console.error('Error registering user:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {

    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
