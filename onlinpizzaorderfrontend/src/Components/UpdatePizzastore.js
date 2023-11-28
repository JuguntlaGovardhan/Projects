import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ViewStore() {
  const [storeId, setStoreId] = useState("");
  const [storeData, setStoreData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Define state variables for the editable store data
  const [storeName, setStoreName] = useState("");
  const [storeAddress, setStoreAddress] = useState("");

  const fetchStoreData = async () => {
    try {
      setLoading(true);

      // Make a GET request to fetch store data based on the provided storeId
      const response = await fetch(`http://localhost:8080/store/${storeId}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setStoreData(data);

      // Populate the input fields with the fetched data
      setStoreName(data.storeName);
      setStoreAddress(data.storeAddress);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:8080/addstore/${storeId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          storeName,
          storeAddress,
        }),
      });

      if (response.ok) {
        // Data successfully updated
        alert("Store data updated successfully!");

        // Manually change the URL to trigger navigation to AdminPage
        window.location.href = "/AdminPage";
      } else {
        // Handle errors here
        alert("Failed to update store data:", response.statusText);
      }
    } catch (error) {
      // Handle network errors here
      console.error("An error occurred while updating store data:", error);
    }
  };

  return (
    <div>
      <Link to="/AdminPage">back</Link>
      <h1 style={{ color: "purple",textAlign:"center" }}>View and Update Store Information</h1>

      <label>
        Enter Store ID:
        <input
          type="text"
          value={storeId}
          onChange={(e) => setStoreId(e.target.value)}
        />
      </label>
      <button onClick={fetchStoreData}>Fetch Store Data</button>

      {loading ? (
        <p>Loading...</p>
      ) : storeData ? (
        <div>
          <p>Store ID: {storeData.storeId}</p>
          <label>
            Store Name:
            <input
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
            />
          </label>
          <label>
            Store Address:
            <input
              type="text"
              value={storeAddress}
              onChange={(e) => setStoreAddress(e.target.value)}
            />
          </label>
          <button onClick={handleUpdate}>Update Store Data</button>
        </div>
      ) : (
        <p>No data found for the given Store ID.</p>
      )}
    </div>
  );
}

export default ViewStore;
