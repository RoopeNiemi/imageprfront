import React from 'react'

const About = () => {

    const backendUrl = "https://github.com/RoopeNiemi/imagebackend"
    const frontendUrl = "https://github.com/RoopeNiemi/imageprfront"

    return (
        <div>
            <h1>About this project</h1>
            <p>I made this project to practice different programming languages. I did the backend with Python. I've made an Android app with Kotlin that allows user to take pictures
                and send them directly to backend. Backend then extracts GPS-data from the image and saves that and the image. The frontend is made with React. Original intention was to use Python flask since the backend 
                is already done with that, however I wanted to practice React so I decided to do it with that.
            </p>
            <p>It should be noted that the Kotlin code might have a lot of code that isn't used, since I've only focused on getting it to work, and haven't cleaned the code after it started working. The app has the minimum functionality
                required to upload an image, nothing more.
            </p>
            <img src="/static/app.jpg" alt="app" width="240" height="360"/>
            <p>Image of Android app. As said before, it only has the minimum functionality required to upload an image.</p>
            <br/>
            <a href={backendUrl}>Backend source code</a><br/>
            <a href={frontendUrl}>Frontend source code</a><br/>
        </div>
    )
}

export default About