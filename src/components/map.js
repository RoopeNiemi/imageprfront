import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
const MapView = ({ position, images }) => {

    const imageMarkers = () => images.map(im =>
        <Marker position={[im.latitude, im.longitude]}>
            <Popup><img src={im.image_name} width="128" height="128" /></Popup>
        </Marker>
    )

    return (
        <Map center={position} zoom={12} className="map-leaflet">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {imageMarkers()}
        </Map>
    )
}

export default MapView