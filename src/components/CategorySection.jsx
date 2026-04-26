import React from "react";
import ItemCard from "./ItemCard";

export default function CategorySection({ category, items }) {
  if (!items) return null; // safety check

  return (
    <div className="category-section">
      <h2 className="category-title">{category}</h2>

      <div className="items-grid">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
