import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddFoodItems() {
  const [itemData, setItemData] = useState({
    itemName: "",
    itemCost: 0.0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setItemData({
      ...itemData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to the server to store the data
    try {
      const response = await fetch("http://localhost:8080/additem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemData),
      });

      if (response.ok) {
        // Data successfully added to the database
        // You can handle success here, e.g., show a success message or redirect
        console.log("Store data added successfully!");
        alert("Food Items added successfully!");

        // Navigate to the AdminPage
        navigate("/AdminPage");
      } else {
        // Handle errors here
        alert("Failed to add store data");
        console.error("Failed to add store data:", response.statusText);
      }
    } catch (error) {
      // Handle network errors here
      console.error("An error occurred:", error);
    }
  };

  // Inline CSS styles
  const containerStyle = {
    margin: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f5f5f5",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "10px",
  };

  const inputStyle = {
    padding: "5px",
    borderRadius: "3px",
    border: "1px solid #ccc",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <>
      <Link to="/AdminPage">back</Link>
    
    <div style={containerStyle}>
      <h1 style={{ color: "purple",textAlign:"center" }}>Add Food Item</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>
          FoodItem Name:
          <input
            type="text"
            name="itemName"
            value={itemData.itemName}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          FoodItem Cost:
          <input
            type="number"
            name="itemCost"
            value={itemData.itemCost}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
    </>
  );
}

export default AddFoodItems;
