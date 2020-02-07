import React, { useState, useEffect } from 'react'
import About from './components/about'
import MapView from './components/map'
import imageService from './services/images'
import SearchForm from './components/SearchForm'
import Gallery from './components/gallery'
import Upload from './components/upload'
import Login from './components/login'
import Register from './components/register'
import './index.css'

import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'


import {
  Navbar, Nav
} from 'react-bootstrap'


const App = () => {

  const navbarStyle = { padding: 5, color: "white" }
  const [images, setImages] = useState([])
  const [user, setUser] = useState(null)

  const defaultOrValue = (value, defaultValue) => {
    if (value === "") {
      return `${defaultValue}`
    }
    return value
  }

  useEffect(() => { 
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) { 
      const user = JSON.parse(loggedUserJSON)    
      setUser(user)      
      imageService.setToken(user.access_token) } 
    }, []
      )

  const handleLogin = async (username, password, event) => {
    event.preventDefault()
    const user = await imageService.login(username, password)
    window.localStorage.setItem('loggedUser', JSON.stringify(user)
    )
    setUser(user)
    imageService.setToken(user.access_token)
  }


  const handleRegister = async (username, password, confirmPassword, event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      return
    }
    imageService.register(username, password)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    imageService.search(
      defaultOrValue(event.target.minLon.value, -90),
      defaultOrValue(event.target.maxLon.value, 90),
      defaultOrValue(event.target.minLat.value, -90),
      defaultOrValue(event.target.maxLat.value, 90))
      .then(response => {
        setImages(response.data)
      })
  }

  const mapCenter = () => {
    if (images.length === 0) {
      return [60.2044, 24.96166]
    }
    const totalLat = images.map(im => im.latitude).reduce((totalLatitude, lat) => totalLatitude + lat, 0) / images.length
    const totalLon = images.map(im => im.longitude).reduce((totalLongitude, lon) => totalLongitude + lon, 0) / images.length
    return [totalLat, totalLon]


  }

  const Home = () => {
    return (
      <div>
        <MapView position={mapCenter()} images={images} />
        <SearchForm handleSubmit={handleSubmit} />
      </div>
    )
  }

  const UploadForm = () => (
    <div>
      <Upload />
    </div>

  )

  const LoginForm = () => (
    <div>
      <Login handleLogin={handleLogin} />
    </div>

  )

  const RegisterForm = () => {
    return (
      <Register handleRegister={handleRegister} />
    )
  }

  return (
    <Router>
      <div className="container">
        <div>
          <Navbar collapseOnSelect expand="lg" bg="info">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#" as="span">
                  <Link style={navbarStyle} to="/">Home</Link>
                </Nav.Link>
                <Nav.Link href="#" as="span">
                  <Link style={navbarStyle} to="/about">About</Link>
                </Nav.Link>
                <Nav.Link href="#" as="span">
                  <Link style={navbarStyle} to="/gallery">Gallery</Link>
                </Nav.Link>
                <Nav.Link href="#" as="span">
                  {user === null ? <div> <Link style={navbarStyle} to="/login">Login</Link> <Link style={navbarStyle} to="/register">Register</Link> </div> : <Link style={navbarStyle} to="/upload">Upload</Link>}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        {user === null ? <div> <Route path="/login" component={LoginForm} /> <Route path="/register" component={RegisterForm} /> </div> : <Route path="/upload" component={UploadForm} />}

      </div>
    </Router>
  )
}


export default App;
