import React from "react";
import { Card, CardGroup, Button } from 'react-bootstrap';
import '../../styles/style.css';
import LocationImage from './img/geolocation.jpg'
import WikiImage from './img/WikiSearchImage.jpg'

export default function Home(){
    return (
    <div className='d-flex'>
        <div className='center'>
        <CardGroup >   
         <Card className="text-center" border="dark" style={{ width: '18rem' }}>
            <Card.Header border="dark">Geolocation App</Card.Header>
                <div className="CardImage">
                <Card.Img className="CardImage" variant="top" border="dark" src={LocationImage}  />
                </div>
                    <Card.Body>
                        <a href='/location'>
                        <Button variant="primary" align>Visit!</Button>
                        </a>
                    </Card.Body>
            </Card>
            <div className="cardsgroup">
            <Card className="text-center" border="dark" style={{ width: '18rem' }}>
            <Card.Header border="dark">WikiSearch App</Card.Header>
            <div className="CardImage">
            <Card.Img variant="top" border="dark" src={WikiImage}  />
            </div>
                <Card.Body>
                <a href='/search'>
                        <Button variant="primary" align>Visit!</Button>
                </a>
                </Card.Body>
            </Card>
            </div>
        </CardGroup>   
        </div>
    </div>
        
    );
  }