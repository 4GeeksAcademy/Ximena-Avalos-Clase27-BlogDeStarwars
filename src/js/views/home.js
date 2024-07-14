import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { ItemCard } from '../component/itemCard';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.loadCharacters();
    actions.loadPlanets();
  }, []);

  const handleLearnMoreCharacter = (uid) => {
    navigate(`/character_details/${uid}`);
  };

  const handleLearnMorePlanet = (uid) => {
    navigate(`/planet_details/${uid}`);
  };

  return (
    <div className="container">
      <h2 className="my-4">Characters</h2>
      <div className="row">
        {store.characters.length > 0 ? store.characters.map((character, index) => (
          <ItemCard
            key={index}
            name={character.name}
            gender={character.gender}
            hairColor={character.hairColor}
            eyeColor={character.eyeColor}
            imageUrl={character.imageUrl}
            onLearnMore={() => handleLearnMoreCharacter(character.uid)}
          />
        )) : <p>Loading characters...</p>}
      </div>
      <h2 className="my-4">Planets</h2>
      <div className="row">
        {store.planets.length > 0 ? store.planets.map((planet, index) => (
          <ItemCard
            key={index}
            name={planet.name}
            population={planet.population}
            terrain={planet.terrain}
            imageUrl={planet.imageUrl}
            onLearnMore={() => handleLearnMorePlanet(planet.uid)}
          />
        )) : <p>Loading planets...</p>}
      </div>
    </div>
  );
};