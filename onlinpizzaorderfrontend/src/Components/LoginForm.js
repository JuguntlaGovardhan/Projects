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
};

const buttonSpacing = {
  marginTop: '10px', // Add margin to the top of the button
};

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Check if email and password are empty
    if (!email || !password) {
      alert("Email and password are required.");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8080/email/${email}`);
      const data = await response.json();
  
      if (response.ok&&email===data.email&&password===data.password) {
        // Email found, redirect to home page
        alert("Login Successfully done!");
        window.location.href = '/home';
      } else {
        // Handle login error (invalid email)
        // You can display an error message to the user
        alert("Invalid Credentials");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const handleRegister = () => {
    // Redirect to the registration page
    window.location.href = '/';
  };

  return (
    <>
      <h1 style={{ color: "green",textAlign:'center' }}>Login</h1>
    <div style={containerStyle}>
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
      <button onClick={handleLogin} style={buttonStyle}>
        Login
      </button>
      <br />
      <button onClick={handleRegister} style={{ ...buttonStyle, ...buttonSpacing }}>
        New Register ?
      </button>
    </div>
        </>
  );
}

export default LoginForm;
      