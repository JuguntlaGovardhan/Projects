import React, { useState} from "react";
import { Link } from "react-router-dom";

function ViewItem() {
  const [itemId, setItemId] = useState("");
  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Define state variables for the editable item data
  const [itemName, setItemName] = useState("");
  const [itemCost, setItemCost] = useState(0.0);

  const fetchItemData = async () => {
    try {
      setLoading(true);

      // Make a GET request to fetch item data based on the provided itemId
      const response = await fetch(`http://localhost:8080/${itemId}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setItemData(data);

      // Populate the input fields with the fetched data
      setItemName(data.itemName);
      setItemCost(data.itemCost);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:8080/additem/${itemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          itemName,
          itemCost,
        }),
      });

      if (response.ok) {
        // Data successfully updated
        alert("Item data updated successfully!");

        // Manually change the URL to trigger navigation to AdminPage
        window.location.href = "/AdminPage";
      } else {
        // Handle errors here
        alert("Failed to update item data:", response.statusText);
      }
    } catch (error) {
      // Handle network errors here
      console.error("An error occurred while updating item data:", error);
    }
  };

  return (
    <div>
      <Link to="/AdminPage">back</Link>
  
      <h1 style={{ color: "purple" }}>View and Update Item Information</h1>
      <label>
        Enter Item ID:
        <input
          type="text"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
        />
      </label>
      <button onClick={fetchItemData}>Fetch Item Data</button>

      {loading ? (
        <p>Loading...</p>
      ) : itemData ? (
        <div>
          <p>Item ID: {itemData.itemId}</p>
          <label>
            Item Name:
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </label>
          <label>
            Item Cost:
            <input
              type="number"
              value={itemCost}
              onChange={(e) => setItemCost(e.target.value)}
            />
          </label>
          <button onClick={handleUpdate}>Update Item Data</button>
        </div>
      ) : (
        <p>No data found for the given Item ID.</p>
      )}
    </div>
  );
}

export default ViewItem;
