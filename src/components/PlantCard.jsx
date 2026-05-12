import React from "react";

function PlantCard({ plant, isSoldOut, onToggleSoldOut }) {
  // Handle button click to toggle sold out status
  const handleButtonClick = () => {
    onToggleSoldOut(plant.id);
  };

  return (
    <li className="card" data-testid="plant-item">
      {/* Display plant image */}
      <img src={plant.image} alt={plant.name} />
      {/* Display plant name */}
      <h4>{plant.name}</h4>
      {/* Display plant price */}
      <p>Price: {plant.price}</p>
      {/* Conditionally render button based on sold out status */}
      {!isSoldOut ? (
        <button className="primary" onClick={handleButtonClick}>
          In Stock
        </button>
      ) : (
        <button onClick={handleButtonClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
