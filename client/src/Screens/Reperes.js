import React, { useState, useEffect } from 'react';
import { Marker, Popup } from 'react-leaflet';

function Test({ nb }) {
    const [markerData, setMarkerData] = useState(null);
    
    useEffect(() => {
        // Read JSON data from file
        fetch(`data/reperes/${nb}.json`)
            .then(response => response.json())
            .then(data => {
                setMarkerData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [nb]);

    return (
        <>
            {markerData && (
                <Marker position={[parseFloat(markerData.coord.split(',')[0]), parseFloat(markerData.coord.split(',')[1])]}>
                    <Popup>
                        <div>
                            <h3>{markerData.name}</h3>
                            <img src={markerData.picture} alt={markerData.name} style={{ maxWidth: '200px' }} />
                        </div>
                    </Popup>
                </Marker>
            )}
        </>
    );
}
function addReperes() {
    const reperes = [];
    for (let i = 1; i <= 7; i++) {
        reperes.push(<Test nb={i} key={i} />);
    }
    return (
        reperes
    );
    
}
function Reperes() {
    return (
        <>
           {addReperes()}
        </>
    );
}

export default Reperes;
