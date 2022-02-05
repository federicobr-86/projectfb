import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import '../../../styles/center.css';


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
  <div className='d-flex'>
    <div className='center'>
          <h1>Coordinates</h1>
          <p>{status}</p>
          {lat && <p>Latitude: {lat}</p>}
          {lng && <p>Longitude: {lng}</p>}
          <Button onClick={getLocation}>Get Location</Button>
     </div>
  </div>
);
}

export default LocationApp;


