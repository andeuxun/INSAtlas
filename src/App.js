import logo from './logo.svg';
import 'leaflet/dist/leaflet.css';

import './App.css';


import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';


function App() {
  

  return (
    <MapContainer 
      center={[45.784036153602656, 4.877490572345281]} 
      zoom={16} 
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
    </MapContainer>
  );
}

export default App;
