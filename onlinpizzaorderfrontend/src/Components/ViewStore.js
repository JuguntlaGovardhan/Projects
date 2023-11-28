import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Viewuser() {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch store data from the server
    fetch("http://localhost:8080/getStores")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Update the state with the fetched data
        setStores(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Link to="/home">back</Link>
      <h1 style={{ color: "purple" ,textAlign:"center"}}> Pizza Stores List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Store Id</th>
              <th style={tableHeaderStyle}>Store Name</th>
              <th style={tableHeaderStyle}>Store Address</th>
              <th style={tableHeaderStyle}>Food Menu</th>
           </tr>
          </thead>
          <tbody>
            {stores.map((store) => (
              <tr key={store.storeId}>
                <td style={tableCellStyle}>{store.storeId}</td>
                <td style={tableCellStyle}>{store.storeName}</td>
                <td style={tableCellStyle}>{store.storeAddress}</td>
                <td style={tableCellStyle}><Link to="/Menu"> Open {store.storeName} Hotel menu</Link> </td>
                
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

export default Viewuser;

