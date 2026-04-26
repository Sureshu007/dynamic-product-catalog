import React from "react";
import { useNavigate } from "react-router-dom";

export default function ItemCard({ item }) {
  const navigate = useNavigate();

  if (!item) return null; // safety

  return (
    <div
      className="item-card"
      onClick={() => navigate(`/item/${item.id}`)}
    >
      <img
        src={item.image}
        alt={item.itemname}
        className="item-image"
      />
      <h3 className="item-title">{item.itemname}</h3>
    </div>
  );
}

