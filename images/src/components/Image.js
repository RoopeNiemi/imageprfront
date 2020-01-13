import React from 'react'

const Image = ({ imageName, latitude, longitude }) => {
    return (
        <div>
            <li>
                <p>
                </p>
                <p>
                    Latitude: {latitude}
                </p>
                <p>
                    Longitude: {longitude}
                </p>
                <img src={imageName} width="640" height="480" />
            </li>
        </div>
    )
}

export default Image