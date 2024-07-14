import React from 'react';
import { Carousel } from 'react-bootstrap';

export const PlanetCarousel = ({ planets }) => {
  return (
    <Carousel>
      {planets.map((planet, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={planet.imageUrl}
            alt={planet.name}
            style={{ height: '200px', objectFit: 'cover' }}
          />
          <Carousel.Caption>
            <h5>{planet.name}</h5>
            <p>{planet.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};