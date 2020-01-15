import React from 'react'
import imageService from '../services/images'

const Actions = () => {

    const handleSubmit = () => {
        event.preventDefault()
        imageService.upload(event).then(response => {
            console.log(response)
        })
    }


    return (
        <div>
        
        <h3>Upload an image. Accepted formats: .jpg .jpeg .png.</h3>
        <p>Note that even if an image doesn't have GPS-tags, it will still be uploaded. In that case however, it won't show on the map or in the gallery.</p>
        <form onSubmit={handleSubmit}>
            <input type="file" name="image"/>
            <button type="submit" className="btn btn-primary" value="Submit">Upload</button>
        </form>
        </div>
    )
}

export default Actions