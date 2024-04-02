import React, { useState, useEffect } from 'react';
import '../App.css';
import { Marker, Popup } from 'react-leaflet';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [showSearchMarker, setShowSearchMarker] = useState(false);
  const [markerData, setMarkerData] = useState(null);
  const [data, setData] = useState([]); // State to hold fetched data
  const [error, setError] = useState(null); // State to hold error information
  
  const fetchData = async (name) => {
    try {
      const url = 'http://localhost:3001/findplace?name=' + name;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      setData(responseData); // Set data
    } catch (error) {
      setError(error.message); // Handle fetch errors
    }
  };
      
  const handleOnSearch = (string, results) => {
    console.log("Search");

    console.log(string, results);
    fetchData(string);
  };

  const handleOnHover = (result) => {
    console.log("hover  ");

    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log("select");

    console.log(item);

    setMarkerData(item);
    setShowSearchMarker(true);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
    setShowSearchMarker(false);

  };

  const formatResult = (item) => {
    console.log(item);
    return (
      <div className="result-wrapper">
        <span className="result-span">{item.dept}</span>
        <span className="result-span"> {item.name}</span>
        <span className="result-span"> {item.id}</span>
      </div>
    );
  };

  
  return (
    <div>
      <div className="searchContainer" style={{ width: 300, margin: 20 }}>
        <ReactSearchAutocomplete
          items={data}
          maxResults={10}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          onClear={handleOnClear}
          showNoResultsText={'No results found'}
          inputDebounce={10} //delay before search
          fuseOptions={{ keys: ["name", "name2", "dept", "id"]}} 
          formatResult={formatResult}
          styling={{ zIndex:  10}}
        />
      </div>
      <div>
        {showSearchMarker && (
        <Marker position={[parseFloat(markerData.coordonnees.split(',')[0]), parseFloat(markerData.coordonnees.split(',')[1])]}>
          <Popup>
            qqq
          </Popup>
        </Marker>
      )}
      </div>
    </div> 
  );
}

export default Search;
