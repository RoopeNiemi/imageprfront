import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import imageService from '../services/images'
const MapView = ({ position, images }) => {

    const imageMarkers = () => images.map(im =>
        <li key={im.image_name}>
        <Marker position={[im.latitude, im.longitude]}>
            <Popup><img src={imageService.getImageSource(im.image_name)} width="128" height="128" alt={im.image_name}/></Popup>
        </Marker>
        </li>
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