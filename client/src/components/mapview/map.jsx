'use client';
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import customIcon from '../../assets/marker.png';

function Map({ latitude, longitude }) {
    const mapRef = useRef(null);

    useEffect(() => {
        if (mapRef.current) {
            // Create a new map instance
            const map = L.map(mapRef.current).setView([latitude, longitude], 13);

            // Add tile layer to the map
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map);

            // Define the custom icon
            const customMarkerIcon = L.icon({
                iconUrl: customIcon.src,
                iconSize: [38, 38], // Size of the icon
                iconAnchor: [22, 38], // Anchor point of the icon
                popupAnchor: [-3, -76] // Popup relative to the icon
            });
            L.marker([latitude, longitude], { icon: customMarkerIcon }).addTo(map);
            return () => {
                map.remove();
            };
        }
    }, [latitude, longitude]);

    return <div id="map" style={{ height: '400px', width: '100%' }} ref={mapRef}></div>;
}

export default Map;
