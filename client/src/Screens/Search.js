import React, { useState } from 'react';
import '../App.css'; // Import CSS file

function Search() {
  const [searchValue, setSearchValue] = useState('');

  // Function to handle changes in the input field
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleChange}
        className="input"
      />
    </div>  
  );
}

export default Search;
