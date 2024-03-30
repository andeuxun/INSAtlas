import React, { useState } from 'react';
import { Marker, Popup, LayersControl, Circle, Rectangle,LayerGroup, FeatureGroup, icon } from 'react-leaflet';
import * as L from "leaflet";
import Reperes from '../Screens/Reperes';

function Layers() {
    const center = [45.784036153602656, 4.877490572345281]
    const rectangle = [
      [51.49, -0.08],
      [51.5, -0.06],
    ]
    const markerWithPopup = (
      <Marker position={center}>
          <Popup>I am a green leaf.</Popup>
      </Marker>
  );
    var myIcon = L.icon({
      iconUrl: 'logo192.png',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
  });
    return (
    <LayersControl position="bottomright">
      <LayersControl.Overlay checked name="Repères">
        <FeatureGroup>
          <Reperes/>
        </FeatureGroup>
      </LayersControl.Overlay>
      <LayersControl.Overlay checked name="Services">
        <FeatureGroup pathOptions={{ color: 'purple' }}>
          
        </FeatureGroup>
      </LayersControl.Overlay>
    </LayersControl>
    )
}

export default Layers;