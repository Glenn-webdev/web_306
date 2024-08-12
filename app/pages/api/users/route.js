import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

const db = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};

export async function POST(request) {
    const { email, password } = await request.json();

    if (!email || !password) {
        return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    try {
        // Create a new database connection
        const connection = await mysql.createConnection(db);

        // Make sure the 'users' table and columns exist in your database
        const [rows] = await connection.execute('SELECT * FROM user WHERE email = ?', [email]);

        if (rows.length === 0) {
            await connection.end(); // Close the connection
            return NextResponse.json({ error: 'Invalid email or password' }, { status: 400 });
        }

        const user = rows[0];

        // For simplicity, using plaintext password comparison.
        // In a real application, use a hashing library like bcrypt.
        if (user.password !== password) {
            await connection.end(); // Close the connection
            return NextResponse.json({ error: 'Invalid email or password' }, { status: 400 });
        }

        await connection.end(); // Close the connection
        return NextResponse.json({ message: 'Login successful' });
    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json({ error: 'Server error', details: error.message }, { status: 500 });
    }
}
