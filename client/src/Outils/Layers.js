import React, { useState } from 'react';
import { Marker, Popup, LayersControl, Circle, Rectangle,LayerGroup, FeatureGroup, icon } from 'react-leaflet';
import Reperes from '../Screens/Reperes';

function Layers() {
    return (
    <LayersControl position="bottomleft">
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