'use client'; // Ensure this is at the top of the file to use client-side hooks

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter(); 

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('pages/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(data.message || 'Login successful');
                setError('');
                setIsLoggedIn(true);

                // Wait for 2 seconds before redirecting
                setTimeout(() => {
                    router.push('/'); 
                }, 2000);
            } else {
                const errorData = await response.json();
                setError(errorData.error || 'An error occurred');
                setMessage('');
            }
        } catch (err) {
            console.error('Error:', err);
            setError('An unexpected error occurred. Please try again.');
            setMessage('');
        }
    };

    return (
        <div className="min-h-screen bg-green-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >

                {isLoggedIn ? 'Logout' : 'Login'}
                </button>

            </form>
            {message && <p className="text-green-500 mt-4">{message}</p>}
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    </div>

    );
}
