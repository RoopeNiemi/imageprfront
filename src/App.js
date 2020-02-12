import React, { useState, useEffect } from 'react'
import About from './components/about'
import MapView from './components/map'
import imageService from './services/images'
import SearchForm from './components/searchForm'
import DeleteUser from './components/deleteUser'
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

  const handleDelete = (username, password, event) => {
    event.preventDefault()
    const response = imageService.deleteUser(username, password)
    window.localStorage.clear()
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

  const Home = () => {
    return (
      <div>
        <MapView images={images} />
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

  const DeleteForm = () => {
    return (
      <DeleteUser handleDelete={handleDelete} />
    )
  }

  const LoggedInLink = () => {
    return (
      <div>
         <Link className="upload" style={navbarStyle} to="/upload">Upload</Link>
         <Link className="delete" style={navbarStyle} to="/delete">Delete account</Link>
      </div>
    )
  }

  const LoggedInRoute = () => {
    return (
      <div>
          <Route path="/upload" component={UploadForm} />
          <Route path="/delete" component={DeleteForm} />
      </div>
    )
  }


  const NotLoggedInLink = () => {
    return (
      <div>
        <Link className="login" style={navbarStyle} to="/login">Login</Link>
        <Link className="register" style={navbarStyle} to="/register">Register</Link>
      </div>
    )
  }

  const NotLoggedInRoute = () => {
    return (
      <div> 
        <Route path="/login" component={LoginForm} /> 
        <Route path="/register" component={RegisterForm} /> 
      </div> 
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
                <Nav.Link href="#" as="span" name="home">
                  <Link className="home" style={navbarStyle} to="/">Home</Link>
                </Nav.Link>
                <Nav.Link href="#" as="span">
                  <Link className="about" style={navbarStyle} to="/about">About</Link>
                </Nav.Link>
                <Nav.Link href="#" as="span">
                  <Link className="gallery" style={navbarStyle} to="/gallery">Gallery</Link>
                </Nav.Link>
                <Nav.Link href="#" as="span">
                  {user === null ? NotLoggedInLink() : LoggedInLink()}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        {user === null ? NotLoggedInRoute() : LoggedInRoute()}

      </div>
    </Router>
  )
}


export default App;
