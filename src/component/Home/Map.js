import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () =>{
  MyComponent() {
    const map = useMapEvents({
      map.locate()
    }),
    locationfound: (location) => {
      console.log('location found:', location)
    },
  })
    return null
  }


  return(
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
      </Marker>
      <MyComponent />
    </MapContainer>)
  );
}

export default Map;
