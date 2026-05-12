import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // State to store all plants fetched from the backend
  const [plants, setPlants] = useState([]);
  // State to store the search query for filtering plants
  const [searchQuery, setSearchQuery] = useState("");
  // State to track which plants are marked as sold out (non-persisting)
  const [soldOutPlants, setSoldOutPlants] = useState(new Set());

  // Fetch all plants on component mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // Function to handle adding a new plant
  const handleAddPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => setPlants([...plants, data]));
  };

  // Filter plants based on search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to toggle sold out status for a plant
  const handleToggleSoldOut = (plantId) => {
    const newSoldOutPlants = new Set(soldOutPlants);
    if (newSoldOutPlants.has(plantId)) {
      newSoldOutPlants.delete(plantId);
    } else {
      newSoldOutPlants.add(plantId);
    }
    setSoldOutPlants(newSoldOutPlants);
  };

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <PlantList
        plants={filteredPlants}
        soldOutPlants={soldOutPlants}
        onToggleSoldOut={handleToggleSoldOut}
      />
    </main>
  );
}

export default PlantPage;
