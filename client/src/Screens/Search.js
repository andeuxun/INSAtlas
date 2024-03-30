import React, { useState } from 'react';

function Search() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div style={{ position: 'absolute', top: '10vw', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1000 }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleSearch}
        style={{
          width: '80vw', // Adjust width as needed
          height: '7vw', // Adjust height as needed
          borderRadius: '20px', // Adjust border radius as needed
          padding: '10px', // Adjust padding as needed
        }}
      />
    </div>  
  );
}

export default Search;
