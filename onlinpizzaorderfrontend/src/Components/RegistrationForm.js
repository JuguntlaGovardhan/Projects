import React, { useState } from 'react';

const containerStyle = {
  maxWidth: '300px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const inputStyle = {
  width: '92%',
  marginBottom: '10px',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginBottom: '10px',
};

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    // Validate the input fields
    if (!name || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Validate the name field
    const nameRegex = /^[a-zA-Z\s]*$/; // Only allows letters and spaces
    if (!nameRegex.test(name)) {
      alert('Name should contain only letters and spaces.');
      return;
    }

    // Validate the password field
    //const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$/;
    // The password must contain at least 8 characters, including at least one letter and one digit

    // if (!passwordRegex.test(password)) {
    //   alert('Password must be at least 8 characters long and include at least one letter and one digit.');
    //   return;
    // }

    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        // Registration successful, redirect to login page
        window.location.href = '/login';
      } else {
        // Handle registration error
        // You can display an error message to the user
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogin = () => {
    // Redirect to the login page
    window.location.href = '/login';
  };

  return (
    <>
      <h1 style={{ color: 'green', textAlign: 'center' }}>Registration</h1>
      <div style={containerStyle}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleRegister} style={buttonStyle}>
          Register
        </button>
        <button onClick={handleLogin} style={buttonStyle}>
          Login
        </button>
      </div>
    </>
  );
}

export default RegistrationForm;

