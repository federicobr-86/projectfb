import React, { useState } from 'react';
import {Container, Button} from 'react-bootstrap';
import '../../../styles/style.css';


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

return (
  
      <Container className='locationstyle'>
        <div className='center'>
      <h1>Geolocation App</h1>  
      <br></br>
          <Button onClick={getLocation}>Show my Coordinates!</Button>
            <p>{status}</p>
            {lat && <p>Latitude: {lat}</p>}
            {lng && <p>Longitude: {lng}</p>}
      </div>
      </Container>
);
}

export default LocationApp;


