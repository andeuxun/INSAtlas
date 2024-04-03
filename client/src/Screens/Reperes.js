import React, { useState, useEffect } from 'react';
import { CircleMarker, Popup } from 'react-leaflet';
import * as L from "leaflet";
import '../App.css';

function AddReperes({ data }) {
    var myIcon = L.icon({
        iconUrl: 'https://static.vecteezy.com/system/resources/previews/016/314/852/non_2x/map-pointer-icon-gps-location-symbol-maps-pin-location-map-icon-free-png.png',
        iconSize: [38, 38],
    });

    return (
        <CircleMarker
            center={[parseFloat(data.coord.split(',')[0]), parseFloat(data.coord.split(',')[1])]}
            radius={10}
            className='reperes'
        >
            <Popup className='popup-src'>
                <div>
                    <h3>{data.name}</h3>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={data.picture} alt={data.name} style={{ maxWidth: '200px' }} />
                    </div>
                </div>
            </Popup>
        </CircleMarker>
    );
}

function Reperes() {
    const [markerData, setMarkerData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/getreperes`)
            .then(response => response.json())
            .then(data => {
                setMarkerData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const reperes = markerData.map((data, index) => (
        <AddReperes key={index} data={data} />
    ));

    return (
        <>{reperes}</>
    );
}

export default Reperes;
