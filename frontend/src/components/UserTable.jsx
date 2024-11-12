import React from 'react';
import { Button, Table, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function UserTable() {
  const navigate = useNavigate();

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('token');  // Remove token
    navigate('/');  // Redirect to login page
  };

  // Sample data for the table with Indian names
  const userData = [
    { name: 'Amit Sharma', dob: '1985-06-15', email: 'amit.sharma@example.com', password: 'password123' },
    { name: 'Priya Verma', dob: '1990-11-28', email: 'priya.verma@example.com', password: 'password456' },
    { name: 'Ravi Kumar', dob: '1987-02-03', email: 'ravi.kumar@example.com', password: 'password789' },
    { name: 'Neha Gupta', dob: '1993-04-25', email: 'neha.gupta@example.com', password: 'password101' },
    { name: 'Suresh Yadav', dob: '1982-08-12', email: 'suresh.yadav@example.com', password: 'password202' },
    { name: 'Ritu Mehta', dob: '1991-01-17', email: 'ritu.mehta@example.com', password: 'password303' },
    { name: 'Vikram Singh', dob: '1994-09-09', email: 'vikram.singh@example.com', password: 'password404' },
    { name: 'Anjali Patel', dob: '1988-05-30', email: 'anjali.patel@example.com', password: 'password505' },
    { name: 'Manoj Desai', dob: '1992-12-07', email: 'manoj.desai@example.com', password: 'password606' },
    { name: 'Sonal Reddy', dob: '1989-07-22', email: 'sonal.reddy@example.com', password: 'password707' },
  ];

  return (
    <Container className="table-container mt-4">
      <Button
        variant="danger"
        className="logout-btn position-absolute top-0 end-0 m-3"
        onClick={handleLogout}
      >
        Logout
      </Button>
      <h2 className="text-center text-white">User Table</h2>
      <Table striped bordered hover responsive className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.dob}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default UserTable;
