import React, { useState } from 'react';
import LocationMarker from '../Outils/LocationMarker';

function DynamicButtons({ toggleTileLayer }) {
  const [showButtons, setShowButtons] = useState(false);
  const [mapButton, setMapButton] = useState(false);

  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };
  const toggleMapButton = () => {
    setMapButton(!mapButton);
    toggleTileLayer(); // Call toggleTileLayer function from props to change the tile layer
  };

  return (
    <div style={{position: 'absolute', bottom: '20px', right: '20px', zIndex: 1000}}>
      
      {showButtons && (
        <div>
          <div>
            <button onClick={toggleMapButton}>
              {mapButton ? 'Light' : 'Dark'}
            </button>
          </div>
          <LocationMarker />
        </div>
      )}
      <button onClick={toggleButtons} className='bouton'>
        {showButtons ? 'Less options' : 'More options'}
      </button>
    </div>
  );
}

export default DynamicButtons;
