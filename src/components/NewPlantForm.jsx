import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  // Handle input changes and update formData state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission - create new plant and reset form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare plant data with price as number
    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: parseFloat(formData.price),
    };

    // Call parent component callback to add plant
    onAddPlant(newPlant);

    // Reset form after submission
    setFormData({
      name: "",
      image: "",
      price: "",
    });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
