import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import imageService from '../services/images'
const MapView = ({ images }) => {

    const mapCenter = () => {
        if (images.length === 0) {
          return [60.2044, 24.96166]
        }
        const totalLat = images.map(im => im.latitude).reduce((totalLatitude, lat) => totalLatitude + lat, 0) / images.length
        const totalLon = images.map(im => im.longitude).reduce((totalLongitude, lon) => totalLongitude + lon, 0) / images.length
        return [totalLat, totalLon]
    
    
      }

    const imageMarkers = () => images.map(im =>
        <li key={im.image_name}>
        <Marker position={[im.latitude, im.longitude]}>
            <Popup><img src={imageService.getImageSource(im.image_name)} width="128" height="128" alt={im.image_name}/></Popup>
        </Marker>
        </li>
    )

    return (
        <Map center={mapCenter()} zoom={12} className="map-leaflet">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {imageMarkers()}
        </Map>
    )
}

export default MapView