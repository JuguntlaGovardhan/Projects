import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddStoreForm() {
  const [storeData, setStoreData] = useState({
    storeId: "",
    storeName: "",
    storeAddress: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setStoreData({
      ...storeData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to the server to store the data
    try {
      const response = await fetch("http://localhost:8080/addstore", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(storeData),
      });

      if (response.ok) {
        // Data successfully added to the database
        // You can handle success here, e.g., show a success message or redirect
        console.log("Store data added successfully!");
        alert("Store data added successfully!");

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
      <h1 style={{ color: "purple" }}>Add Store Details</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>
          Store ID:
          <input
            type="text"
            name="storeId"
            value={storeData.storeId}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Store Name:
          <input
            type="text"
            name="storeName"
            value={storeData.storeName}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Store Address:
          <input
            type="text"
            name="storeAddress"
            value={storeData.storeAddress}
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

export default AddStoreForm;
