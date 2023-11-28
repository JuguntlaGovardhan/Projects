import React from "react";
import { Link } from "react-router-dom";

const navStyle = {
  display: "flex",
  justifyContent: "center", // Center-align the links horizontally
  alignItems: "center", // Center-align the links vertically
  background: "#333", // Background color for the navigation bar
  padding: "10px", // Adjust the padding as needed
};

const linkStyle = {
  color: "#fff", // Text color for the links
  margin: "0 10px", // Adjust the margin as needed to create spacing between links
  textDecoration: "none", // Remove underline from links
  fontSize: "18px", // Adjust the font size as needed
};

const h1Style = {
  textAlign: "center", // Center-align the heading
  marginTop: "20px", // Adjust the top margin as needed
  color: "transparent", // Text color for the heading
};

export default class AdminPage extends React.Component {
  render() {
    return (
      <div style={{
        backgroundImage: 'url("https://t3.ftcdn.net/jpg/03/48/55/20/360_F_348552050_uSbrANL65DNj21FbaCeswpM33mat1Wll.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "110vh", // Set the height to cover the entire viewport
      }}>
          <Link to="/home" style={{color:'white'}}>
            Back
          </Link>
      <h1 style={h1Style}>Welcome To the Admin Page</h1>
        <nav style={navStyle}>
          <Link to="AddPizzastore" style={linkStyle}>
            Add Store Details
          </Link>
          <Link to="UpdatePizzastore" style={linkStyle}>
            Update Store
          </Link>
          <Link to="ViewPizzastore" style={linkStyle}>
            View Store Details
          </Link>
          <Link to="AddFoodItems" style={linkStyle}>
            Add Food Items
          </Link>
           <Link to="view" style={linkStyle}>
            View Food Items
          </Link>
          
          <Link to="update" style={linkStyle}>
            Update Food Items
          </Link>
          <Link to="/home" style={linkStyle}>
            Close
          </Link>
        </nav>
        
      </div>
    );
  }
}

