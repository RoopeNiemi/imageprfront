import React, { useState } from 'react'
import About from './components/about'
import MapView from './components/map'
import imageService from './services/images'
import SearchForm from './components/SearchForm'
import Gallery from './components/gallery'
import Actions from './components/actions'
import './index.css'

import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'

import {
  Navbar, Nav
} from 'react-bootstrap'


const App = () => {
  const navbarStyle = { padding: 5 , color: "white"}
  const Home = () => {
    return (
      <div>
        <MapView position={[60.2044, 24.96166]} images={images} />
        <SearchForm handleSubmit={handleSubmit} />
      </div>
    )
  }
  const [images, setImages] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    imageService.search(
      zeroOrValue(event.target.minLon.value, -90),
      zeroOrValue(event.target.maxLon.value, 90),
      zeroOrValue(event.target.minLat.value, -90),
      zeroOrValue(event.target.maxLat.value, 90))
      .then(response => {
        setImages(response.data)
      })
  }

  const zeroOrValue = (value, defaultValue) => {
    if (value === "") {
      return `${defaultValue}`
    }
    return value
  }

  return (
    <Router>
      <div className="container">
        <div>
          <Navbar collapseOnSelect expand="lg"  bg="info">
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
                  <Link style={navbarStyle} to="/actions">Actions</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <Route exact path="/" component= {Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" compnoent={Gallery} />
        <Route path="/actions" component= {Actions} />
      </div>
    </Router>
  )
}


export default App;
