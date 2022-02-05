import React, { useState } from 'react';
import {Col, Container, Button} from 'react-bootstrap';
import '../../../styles/style.css';

// Detects coordinates and handles edge cases such as geolocation not supported

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

// Renders the location
return (
<Container>
 <Col className="container-fluid mt-2">
  <h1 class="titulo">Geolocation App</h1> 
  <div className="locationbox">
    <div className='center'>
      <Button onClick={getLocation}>Show my Coordinates!</Button>
        <p>{status}</p>
        {lat && <p>Latitude: {lat}</p>}
        {lng && <p>Longitude: {lng}</p>}
      </div>
  </div>
  </Col>
</Container>
);
}

export default LocationApp;


