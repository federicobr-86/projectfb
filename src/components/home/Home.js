import React from "react";
import { Card, CardGroup, Button } from 'react-bootstrap';
import '../../styles/style.css';
import LocationImage from './img/geolocation.jpg';
import WikiImage from './img/WikiSearchImage.jpg';

export default function Home(){
    return (
    <div className='d-flex'>
        <div className='center'>
            <CardGroup className="cardsgroup">   
                <Card className="text-center" border="dark" >
                    <Card.Header border="dark">Geolocation App</Card.Header>
                        <Card.Img variant="top" border="dark" src={LocationImage}  />
                            <Card.Body>
                                <a href='/location'>
                                <Button variant="primary" align>Visit!</Button>
                                </a>
                            </Card.Body>
                    </Card>
                    <div className="cardsgroup">
                        <Card className="text-center" border="dark" >
                             <Card.Header border="dark">WikiSearch App</Card.Header>
                                 <Card.Img variant="top" border="dark" src={WikiImage}  />
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