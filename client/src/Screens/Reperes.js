import React, { useState, useEffect } from 'react';
import { CircleMarker, Popup } from 'react-leaflet';
import * as L from "leaflet";
import '../App.css';

function Test({ nb }) {
    const [markerData, setMarkerData] = useState(null);
    var myIcon = L.icon({
        iconUrl: 'https://static.vecteezy.com/system/resources/previews/016/314/852/non_2x/map-pointer-icon-gps-location-symbol-maps-pin-location-map-icon-free-png.png',
        iconSize: [38, 38],
    });
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
                <CircleMarker 
                    center={[parseFloat(markerData.coord.split(',')[0]), parseFloat(markerData.coord.split(',')[1])]} 
                    radius={10}
                    className='reperes'
                >
                    <Popup>
                        <div>
                            <h3>{markerData.name}</h3>
                            <img src={markerData.picture} alt={markerData.name} style={{ maxWidth: '200px' }} />
                        </div>
                    </Popup>
                </CircleMarker>
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
