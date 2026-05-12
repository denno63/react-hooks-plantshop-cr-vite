import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, soldOutPlants, onToggleSoldOut }) {
  // Map through plants array and render a PlantCard for each plant
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          isSoldOut={soldOutPlants.has(plant.id)}
          onToggleSoldOut={onToggleSoldOut}
        />
      ))}
    </ul>
  );
}

export default PlantList;
