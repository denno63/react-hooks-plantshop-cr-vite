import React from "react";

function Search({ searchQuery, onSearchChange }) {
  // Handle search input change and update parent component state
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
