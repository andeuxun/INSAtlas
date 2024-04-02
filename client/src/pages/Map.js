import 'leaflet/dist/leaflet.css';
import '../App.css';
import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import Layers from '../Outils/Layers';
import Search from '../Screens/Search';
import DynamicButtons from '../Outils/DynamicButtons';
import AddButton from '../Outils/AddButton';


export default function Map() {
  const [tileLayerUrl, setTileLayerUrl] = useState('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png');

  const toggleTileLayer = () => {
    const newUrl = tileLayerUrl === 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
      ? 'https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
      : 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png';
    
    setTileLayerUrl(newUrl);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      
      <div style={{ height: "100%", flexDirection: 'column'}}>
        <div style={{height: "100%"}}>
          <MapContainer
            center={[45.784036153602656, 4.877490572345281]}
            zoom={16}
            scrollWheelZoom={true}
            zoomControl= {false}
            style={{ height: "100%", width: "100%" }}
          >
            <Search />
            <AddButton />
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url={tileLayerUrl}
            />
            <DynamicButtons toggleTileLayer={toggleTileLayer} />
            <Layers />
          </MapContainer>  
        </div>
      </div>
    </div>
  );
}
