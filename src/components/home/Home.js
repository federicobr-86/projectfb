import React from "react";
import { useNavigate } from 'react-router-dom';
import { Col, Card, CardGroup, Button, Container } from 'react-bootstrap';
import '../../styles/style.css';
import LocationImage from './img/geolocation.jpg';
import WikiImage from './img/WikiSearchImage.jpg';

// Displays the Cards with the different examples of apps

export default function Home(){

const navigate = useNavigate();
return (
 <Container>
 <Col className="container-fluid mt-4">
        <CardGroup className="cardsgroup">   
           <Card className="text-center" border="dark" >
               <Card.Header border="dark">
                   <strong>Geolocation App</strong>
                   </Card.Header>
                <Card.Img variant="top" border="dark" className='imagen' src={LocationImage}/>
                 <Card.Body>
                    <Button variant="primary" onClick={() => navigate('location')}>Visit!</Button>
                </Card.Body>
                </Card>
            <Card className="text-center" border="dark" >
                <Card.Header border="dark">
                <strong>Wikipedia Search</strong>
                </Card.Header>
                  <Card.Img variant="top" border="dark" className='imagen' src={WikiImage}  />
                     <Card.Body>
                       <Button variant="primary" onClick={() => navigate('search')}>Visit!</Button>
                      </Card.Body>
            </Card>
        </CardGroup>   
 </Col>
 </Container>
);
}