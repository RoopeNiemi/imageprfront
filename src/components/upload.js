import React from 'react'
import imageService from '../services/images'

const Upload = () => {

    const handleSubmit = () => {
        event.preventDefault()
        imageService.upload(event).then(response => {
            console.log(response.data)
        })
    }


    return (
        <div>
        
        <h3>Upload an image. Accepted formats: .jpg .jpeg .png.</h3>
        <form onSubmit={handleSubmit}>
            <input type="file" name="image"/>
            <button type="submit" className="btn btn-primary" value="Submit">Upload</button>
        </form>
        </div>
    )
}

export default Upload