'use client'

import React from 'react';
import { useAuth } from './auth-context';
import UserList from './userList';
import LoginForm from './loginForm';

const App = () => {
    const { token, logout } = useAuth();
  
    return (
      <div>
        <h1>My Application</h1>
        {token ? (
          <div>
            <button onClick={logout}>Logout</button>
            <UserList />
          </div>
        ) : (
          <LoginForm />
        )}
      </div>
        );
    };

export default App;
