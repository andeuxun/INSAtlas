import 'leaflet/dist/leaflet.css';
import '../App.css';
import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
//import Search from "react-leaflet-search";
import LocationMarker from '../Outils/LocationMarker';
import Layers from '../Outils/Layers';
import Search from './Search';

export default class Map extends React.Component {

  mapSection = () => {
    return (
      <div style={{ height: "100%", flexDirection: 'column'}}>
        <div style={{height: "100%"}}>
          <MapContainer
            center={[45.784036153602656, 4.877490572345281]}
            zoom={16}
            scrollWheelZoom={true}
            zoomControl= {false}
            style={{ height: "100%", width: "100%" }} // Ensure map container takes up entire parent div
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <LocationMarker />
            <Layers />
          </MapContainer>  
        </div>
      </div>
    );
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Search />
        {this.mapSection()}
      </div>
    );
  }
}