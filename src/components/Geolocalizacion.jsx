import React from 'react'
import {Marker,TileLayer,MapContainer,Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const position = [19.92413, -97.96303]

const Geolocalizacion = () => {

  return (
    <>

      (
  
  (
  <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="../assets/geo.svg">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        Kamtali Store 
      </Popup>
    </Marker>
  </MapContainer>,
),
)
    </>
  )
}

export default Geolocalizacion