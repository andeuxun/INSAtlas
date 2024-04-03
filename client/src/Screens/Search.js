import React, { useState, useEffect } from 'react';
import '../App.css';
import { Marker, Popup } from 'react-leaflet';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
function Search() {

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
    console.log(string, results);
    fetchData(string);
  };

  const handleOnSelect = (item) => {
    console.log(item);
    setMarkerData(item);
    setShowSearchMarker(true);
  };

  const handleOnClear = () => {
    setShowSearchMarker(false);
  };

  const formatResult = (item) => {
    if (item.hasOwnProperty('name')) {
      return (
        <>
          <span className="result-span"> {item.name ? item.name : item.id}</span>
        </>
      );
    } else if (item.hasOwnProperty('departement')) {
      return (
        <>
          <span className="result-span">{item.id} | {item.departement}</span>
        </>
      );
    } else {
      return (
        <>
          <span className="result-span">{item.id}</span>
        </>
      );
    }
  };

  
  return (
    <div>
      <div className="searchContainer" style={{ width: 300, margin: 20 }}>
        <ReactSearchAutocomplete
          items={data}
          maxResults={10}
          placeholder='Recherchez un lieu...'
          onSearch={handleOnSearch}
          onSelect={handleOnSelect}
          onClear={handleOnClear}
          showNoResultsText={'Aucun résultat trouvé.'}
          inputDebounce={10} //delay before search
          fuseOptions={{ keys: ["departement", "dept", "name", "name2", "id", "address", "usage", "autre"], threshold: 1}} 
          formatResult={formatResult}
        />
      </div>
      <div>
        {showSearchMarker && (
        <Marker position={markerData.coordonnees ? [parseFloat(markerData.coordonnees.split(',')[0]), parseFloat(markerData.coordonnees.split(',')[1])] : [45.78368335418658, 4.872680033677473]}>
        
        </Marker>
      )}
      </div>
    </div> 
  );
}

export default Search;
