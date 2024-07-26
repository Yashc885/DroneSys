'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Dynamically import Leaflet components to prevent SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });
const Circle = dynamic(() => import('react-leaflet').then(mod => mod.Circle), { ssr: false });

const Map = () => {
  // Manually provide coordinates
  const [markers, setMarkers] = useState([
    { id: 1, x: 28.6139, y: 77.2090, title: 'Delhi' },
    { id: 2, x: 19.0760, y: 72.8777, title: 'Mumbai' },
    { id: 3, x: 13.0827, y: 80.2707, title: 'Chennai' },
    { id: 4, x: 12.9716, y: 77.5946, title: 'Bengaluru' },
    { id: 5, x: 22.5726, y: 88.3639, title: 'Kolkata' },
    { id: 6, x: 25.5941, y: 85.1376, title: 'Patna' },
    { id: 7, x: 17.3850, y: 78.4867, title: 'Hyderabad' },
    { id: 8, x: 30.7333, y: 76.7794, title: 'Chandigarh' },
    { id: 9, x: 21.1702, y: 72.8311, title: 'Gandhinagar' },
    { id: 10, x: 26.8467, y: 80.9462, title: 'Lucknow' }
  ]);

  // Aggregate markers that are close together
  const clusterMarkers = (markers) => {
    const clusters = {};
    markers.forEach(marker => {
      const key = `${Math.round(marker.x * 1000) / 1000}-${Math.round(marker.y * 1000) / 1000}`;
      if (!clusters[key]) {
        clusters[key] = { count: 0, x: marker.x, y: marker.y };
      }
      clusters[key].count += 1;
    });
    return Object.values(clusters);
  };

  const clusteredMarkers = clusterMarkers(markers);

  // Define custom icon
  const customIcon = new L.Icon({
    iconUrl: './../../assets/marker.png', 
    iconSize: [25, 41],
    iconAnchor: [12, 41], 
    popupAnchor: [1, -34], 
  });

  return (
    <div className="h-screen">
      <MapContainer center={[28.6139, 77.2090]} zoom={10} className="h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {clusteredMarkers.length > 0 ? (
          clusteredMarkers.map((marker, index) => (
            marker.count > 1 ? (
              <Circle
                key={index}
                center={[marker.x, marker.y]}
                radius={marker.count * 1000} // Adjust radius based on count
                color="blue"
                fillColor="blue"
                fillOpacity={0.5}
              >
                <Popup>{`Count: ${marker.count}`}</Popup>
              </Circle>
            ) : (
              <Marker key={index} position={[marker.x, marker.y]} icon={customIcon}>
                <Popup>{`Marker ${index + 1}`}</Popup>
              </Marker>
            )
          ))
        ) : (
          <div>Loading markers...</div>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
