import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const containerStyle = {
  maxWidth: '300px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor:'pink'
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
  backgroundColor: 'green',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginBottom: '10px',
};
const Authenticate = () => {
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the credentials are valid (for demonstration purposes)
    if ( password === "12345") {
      setLoggedIn(true);
      alert("Authentication Sucsess!")
      navigate("/AdminPage"); // Redirect to /admin
    }else{
        alert("You Are  Not  Enetred Valied  data")
    }
  };

  if (loggedIn) {
    return null; // Or you can render something else if needed
  }

  return (
    <>
        <Link to="/home">back</Link>
   
      <h2 style={{ color: "red",textAlign:'center' }}>Only Admin Can have Acess Here.....</h2>
    <div style={containerStyle}>
      <form onSubmit={handleLogin}>
        
        <div>
          <label>Enter Secret Code: </label>
          <input
            type="password"
            placeholder="Code..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>
        <br/>
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
    </>
  );
};

export default Authenticate;
