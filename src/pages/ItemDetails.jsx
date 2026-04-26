import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/data.json";

function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // find item using id
  const item = data.find((_, index) => index === Number(id));

  if (!item) {
    return <h2 style={{ padding: "20px" }}>Item not found</h2>;
  }

  return (
    <div className="details-container">
      
      {/* 🔙 Back Button */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1>{item.itemname}</h1>

      <p>
        <strong>Category:</strong> {item.category}
      </p>

      <img
        src={item.image}
        alt={item.itemname}
        className="details-image"
      />

      <div className="props-container">
        {item.itemprops && item.itemprops.length > 0 ? (
          item.itemprops.map((prop, index) => (
            <p key={index}>
              <strong>{prop.label}:</strong> {prop.value}
            </p>
          ))
        ) : (
          <p>No details available</p>
        )}
      </div>
    </div>
  );
}

export default ItemDetails;
