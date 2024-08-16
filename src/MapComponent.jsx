import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('/cities.json')
      .then(response => response.json())
      .then(data => setCities(data));
  }, []);

  return (
    <MapContainer center={[43.7, -79.42]} zoom={5} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {cities.map(city => (
        <Marker key={city.recordid} position={city.fields.coordinates}>
          <Popup>
            <strong>{city.fields.name}</strong>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
