import logo from './logo.svg';
import 'leaflet/dist/leaflet.css';

import './App.css';


import React, { useContext } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import MarkerClusterGroup from "react-leaflet-cluster";

import { Icon, divIcon, point } from "leaflet";

function App() {
  const markers = [
    {
      geocode: [45.78371678536146, 4.872668222908341],
      popUp: "Bâtiment Claude Chappe"
    },
  ];
  

  return (
    <MapContainer 
      center={[45.784036153602656, 4.877490572345281]} 
      zoom={16} 
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={[45.78371098334414, 4.872662719694708]}>
       
      </Marker>
    
    </MapContainer>
  );
}

export default App;
