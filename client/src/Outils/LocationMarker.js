import React, { useState } from 'react';
import { Marker, Popup, useMapEvents, CircleMarker } from 'react-leaflet';

function LocationMarker() {
  const [showUserLocation, setShowUserLocation] = useState(false);
  const [userLocation, setUserLocation] = useState(null);

  const map = useMapEvents({
    locationfound(e) {
      setUserLocation(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  const handleToggleLocation = () => {
    if (showUserLocation) {
      map.flyTo([45.784036153602656, 4.877490572345281], 16);
      setUserLocation(null);
    } else {
      map.locate();
    }
    setShowUserLocation(prevState => !prevState);
  };

  return (
    <div style={{ position: 'absolute', bottom: '20px', right: '20px', zIndex: 1000 }}>
      <button onClick={handleToggleLocation}>
        {showUserLocation ? 'Show Default Location' : 'Show My Location'}
      </button>
      {userLocation && (
        <CircleMarker center={userLocation} radius={10}>
        <Popup>Vous êtes là</Popup>
      </CircleMarker>
      )}
    </div>
  );
}

export default LocationMarker;
