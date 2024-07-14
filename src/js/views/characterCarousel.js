import React from 'react';
import { Carousel } from 'react-bootstrap';

export const CharacterCarousel = ({ characters }) => {
  return (
    <Carousel>
      {characters.map((character, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={character.imageUrl}
            alt={character.name}
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h5>{character.name}</h5>
            <p>{character.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};