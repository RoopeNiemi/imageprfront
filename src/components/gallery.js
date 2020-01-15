import React, { useState, useEffect } from 'react'
import imageService from '../services/images'
const Gallery = () => {


    const [images, setImages] = useState([])

    const hook = () => {
        imageService.getAll().then(response =>
            setImages(response.data)
        )
    }

    useEffect(hook, [])

    const formatImages = () => {
        if (!images) {
            return null
        }
        return images.map(im =>
            <div>
                <img id="myImg" src={im.image_name} width="120" height="90" alt={im.image_name} />

                <div id="myModal" class="modal">

                    <span class="close">&times;</span>

                    <img class="modal-content" id="img01" />

                    <div id="caption"></div>
                </div>
            </div>
        )
    }

    return (
        <div>
            {formatImages()}
        </div>
    )
}

export default Gallery