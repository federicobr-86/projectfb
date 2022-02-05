import React from "react";
import { useNavigate } from 'react-router-dom';
import { Card, CardGroup, Button } from 'react-bootstrap';
import '../../styles/style.css';
import LocationImage from './img/geolocation.jpg';
import WikiImage from './img/WikiSearchImage.jpg';

// Displays the Cards with the different examples of apps

export default function Home(){

const navigate = useNavigate();
return (
 <div className='d-flex'>
    <div className='center'>
        <CardGroup className="cardsgroup">   
           <Card className="text-center" border="dark" >
               <Card.Header border="dark">Geolocation App</Card.Header>
                <Card.Img variant="top" border="dark" className='imagen' src={LocationImage}/>
                 <Card.Body>
                    <a href='/location'>
                    <Button variant="primary" onClick={() => navigate('/location')}>Visit!</Button>
                     </a>
                    </Card.Body>
                </Card>
            <Card className="text-center" border="dark" >
                <Card.Header border="dark">WikiSearch App</Card.Header>
                  <Card.Img variant="top" border="dark" className='imagen' src={WikiImage}  />
                     <Card.Body>
                       <a href='/search'>
                       <Button variant="primary" onClick={() => navigate('/search')}>Visit!</Button>
                        </a>
                      </Card.Body>
            </Card>
        </CardGroup>   
    </div>
 </div>
);
}