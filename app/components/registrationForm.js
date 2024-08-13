'use client';



import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    f_name: '',
    l_name: '',
    email: '',
    password: ''
  });
  const [message,setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/pages/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage('Registration successful!');
        setFormData({ f_name: '', l_name: '', email: '', password: '' });

  
        console.log('Registration successful!');
      } else {
        setMessage('Registration failed. Please try again.');
        
        console.log('Registration failed.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
      
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          name="f_name"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="l_name"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-green-600 text-white font-semibold py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
      >
        Register
      </button>
    </form>
  );
}
