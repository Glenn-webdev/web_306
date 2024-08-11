'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from './auth-context';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const { token } = useAuth();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://10.10.4.29:3001/api/users', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(response.data);
      } catch (error) {
        setError('Error fetching data');
      }
    };

    fetchUsers();
  }, [token]);

  return (
    <div>
      <h1>User List</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
