import 'leaflet/dist/leaflet.css';
import '../App.css';
import React from 'react';
//import { SearchBar } from 'react-native-elements';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import Search from "react-leaflet-search";

export default class Map extends React.Component {

  /*titleSection = () => {
    return (
      <div style={{height: "40%", backgroundColor: 'powderblue', flexDirection: 'column'}} >
        <h1 style={{textAlign: "center", fontWeight: "bold", fontSize: 30}}>
          INSAtlas
        </h1>
      </div>
    );
  }*/

   searchSection = () => {
    return (
      <div style={{height: "7%", backgroundColor: 'powderblue', flexDirection: 'column'}} >
        <input type="text" placeholder="Search..." style={{width: "100%", height: "100%"}}/>
      </div>
    );  
  }

  mapSection = () => {
    return (
      <div style={{ height: "95%", flexDirection: 'column'}}>
        <div style={{}}>
          {this.searchSection}
        </div>
        <div style={{height: "100%"}}>
          <MapContainer
            center={[45.784036153602656, 4.877490572345281]}
            zoom={16}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }} // Ensure map container takes up entire parent div
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
          </MapContainer>  
        </div>
      </div>
    );
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        
        <div style={{ height: "5%", backgroundColor: 'powderblue', flexDirection: 'column' }} >
          <h1 style={{textAlign: "center", fontWeight: "bold", fontSize: 30}}>
            INSAtlas
          </h1>
        </div>
        {this.searchSection()}
        {this.mapSection()}
      </div>
    );
  }
}