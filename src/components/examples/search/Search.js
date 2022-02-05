import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ListGroup, Form } from 'react-bootstrap';


const Search = () => {
  const [term, setTerm] = useState('react');
  const [results, setResults] = useState([]);

   useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      });

      setResults(data.query.search);
    };

    search();
  }, [term]);

   // List of results

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid}>
        <div>
          <strong>
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
          </a>
          </strong>
        </div>
        <ListGroup as="ol">
        <ListGroup.Item as="li">
            <div className="fw-bold">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </ ListGroup.Item>
      </ListGroup>
      </div>
    );
  });



  // Shows Search Bar and then renders the list of results
  return (
      <Container fluid>
      <h4>My Wikipedia Search</h4>
      <Form>
      <Form.Label>Enter search text</Form.Label>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </Form.Group>
      </Form>
      <ListGroup>{renderedResults}</ListGroup>
    </Container>
  );
};

export default Search;
