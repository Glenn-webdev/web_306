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

export async function GET() {
    try {
        // Create a new database connection
        const connection = await mysql.createConnection(db);

        // Query to select all users where isActive = 0
        const [rows] = await connection.execute(`
            SELECT 
                u.f_name AS first_name, 
                u.l_name AS last_name, 
                c.shift_start AS schedule_start, 
                c.shift_stop AS schedule_stop
            FROM 
                caregiver c
            JOIN 
                user u ON c.user_id = u.user_id
            WHERE 
                c.isAvailable = 1
        `);

        await connection.end(); 

 
        return NextResponse.json({ users: rows });
    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json({ error: 'Server error', details: error.message }, { status: 500 });
    }
}