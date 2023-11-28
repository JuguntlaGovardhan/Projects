 import React from "react";
import { Link, useNavigate } from "react-router-dom";
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#333",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  margin: "0 10px",
  textDecoration: "none",
  fontSize: "18px",
};

const logoutButtonStyle = {
  color: "#fff",
  fontSize: "18px",
  cursor: "pointer",
};

export default function HomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the localStorage when the user clicks the "Logout" button
    localStorage.clear();

    // Use the navigate function to replace the current URL with the login page
    navigate("/login", { replace: true });
  };

  return (
    <div style={{
      backgroundImage: 'url("https://d2unfigtnsklzd.cloudfront.net/wp-content/uploads/2022/01/DSF0658-scaled.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "110vh", // Set the height to cover the entire viewport
    }}>
      <Link to="/auth">Admin Page</Link>
      <h1 style={{ color: "transparent", textAlign: "center" }}>
        Welcome To the Online Pizza Ordering System
      </h1>
      <nav style={navStyle}>
        <Link to="/user" style={linkStyle}>
          View Pizza Store Details....
        </Link>
        <span style={logoutButtonStyle} onClick={handleLogout}>
          Logout
        </span>
      </nav>
    </div>
  );
}
