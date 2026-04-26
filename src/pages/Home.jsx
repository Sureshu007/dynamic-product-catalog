import React from "react";
import data from "../data/data.json";
import groupByCategory from "../utils/groupByCategory";
import CategorySection from "../components/CategorySection";

export default function Home() {
  const groupedData = groupByCategory(data);

  return (
    <div className="container">
      {Object.keys(groupedData).map((category) => (
        <CategorySection
          key={category}
          category={category}
          items={groupedData[category]}
        />
      ))}
    </div>
  );
}
