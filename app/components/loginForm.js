'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
        <div className="relative min-h-screen bg-green-200 flex items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url(/images/patient.jpg)',
                    opacity: 0.3,
                }}
            ></div>
            
            <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h1 className="text-3xl text-black font-bold mb-6 text-center">Log in</h1>
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
                    <div className="flex justify-center mb-4">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            {isLoggedIn ? 'Logout' : 'Submit'}
                        </button>
                    </div>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    Don't have an account?{' '}
                    <a className="text-blue-500 hover:underline">
                        Sign up
                    </a>
                </p>
                {message && <p className="text-green-500 mt-4">{message}</p>}
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
        </div>
    );
}
