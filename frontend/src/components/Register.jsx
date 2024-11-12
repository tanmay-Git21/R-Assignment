import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading true on submit
    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', formData);
      console.log(response.data);
      alert("Registration successful!");
      // You can redirect to login or home page here
      navigate('/');
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Registration failed. Please try again.";
      console.error("Registration failed:", errorMessage);
      alert(errorMessage);
    } finally {
      setLoading(false); // Set loading false after response
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <Container className="form-container text-center">
        <h2>Register</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formDob" className="mt-3">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mt-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="mt-4 w-100"
            disabled={loading} // Disable button while loading
          >
            {loading ? 'Registering...' : 'Register'}
          </Button>

          <Button
            variant="secondary"
            className="mt-3 w-100"
            onClick={() => navigate('/')}
          >
            Go to Login
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Register;
