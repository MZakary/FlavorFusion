import React, {useState, useEffect} from "react";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

function Map(){

    useEffect(() => {
        // Create a map centered on a specific location
        const map = L.map('map').setView([51.505, -0.09], 13);

        // Add a tile layer (you can use any map provider)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }, []);

    return (
        <section className="Map">

            <div id="map" className="map-component"></div>
        </section>
    );
}


export default Map;