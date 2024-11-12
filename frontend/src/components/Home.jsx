// components/Home.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserTable from './UserTable';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in by verifying the presence of a token
    const token = localStorage.getItem('token');
    if (!token) {
      // If no token is found, redirect to the login page
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <UserTable />
    </div>
  );
}

export default Home;
