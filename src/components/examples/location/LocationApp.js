import React, { useState } from 'react';
import {Container, Col, Button} from 'react-bootstrap';
import '../../../styles/style.css';

// Detects coordinates, updates state and handles edge cases such as geolocation not being supported.

const LocationApp = () => {
const [lat, setLat] = useState(null);
const [lng, setLng] = useState(null);
const [status, setStatus] = useState(null);

const getLocation = () => {
  if (!navigator.geolocation) {
    setStatus('Geolocation is not supported by your browser');
  } else {
    setStatus('Locating...');
    navigator.geolocation.getCurrentPosition((position) => {
      setStatus(null);
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    }, () => {
      setStatus('Unable to retrieve your location');
    });
  }
}

// Renders the location (you can override the dev console sensor and choose other location)
return (
  <Container>
  <div className='center'>
  <h1>Geolocation App</h1>
  <Col className="container-fluid mt-4">
        <Button onClick={getLocation}>Show my Coordinates!</Button>
          <p>{status}</p>
          {lat && <p>Latitude: {lat}</p>}
          {lng && <p>Longitude: {lng}</p>}
    </Col>
  </div>
  </Container>
);
}

export default LocationApp;


