import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ViewFoodItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch food item data from the server
    fetch("http://localhost:8080/getitems")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Update the state with the fetched data
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = async (itemId) => {
    // Send a DELETE request to the server to delete the food item
    try {
      const response = await fetch(`http://localhost:8080/${itemId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Item successfully deleted
        // You can handle success here, e.g., show a success message or update the state
        console.log("Food item deleted successfully!");
        // Update the state to remove the deleted item
        setItems((prevItems) => prevItems.filter((item) => item.itemId !== itemId));
      } else {
        // Handle errors here
        console.error("Failed to delete food item:", response.statusText);
      }
    } catch (error) {
      // Handle network errors here
      console.error("An error occurred while deleting food item:", error);
    }
  };

  return (
    <div>
      <Link to="/AdminPage">Back</Link>
      <h1 style={{ color: "purple",textAlign:"center" }}>Food Items List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>FoodItem Id</th>
              <th style={tableHeaderStyle}>FoodItem Name</th>
              <th style={tableHeaderStyle}>FoodItem Cost</th>
              
              <th style={tableHeaderStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.itemId}>
                <td style={tableCellStyle}>{item.itemId}</td>
                <td style={tableCellStyle}>{item.itemName}</td>
                <td style={tableCellStyle}>{item.itemCost}</td>
                
                <td style={tableCellStyle}>
                    <button
                    onClick={() => handleDelete(item.itemId)}
                    style={{ color: "red" }} // Set text color to red
                    >
                    Delete
                  </button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  borderBottom: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

const tableCellStyle = {
  borderBottom: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

export default ViewFoodItems;
