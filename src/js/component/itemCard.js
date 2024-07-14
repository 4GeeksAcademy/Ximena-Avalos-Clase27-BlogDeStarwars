import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../store/appContext';

export const ItemCard = ({
  name,
  gender,
  hairColor,
  eyeColor,
  height,
  mass,
  skinColor,
  birthYear,
  homeworld,
  url,
  population,
  terrain,
  imageUrl,
  description,
  _id,
  uid,
  __v,
  created,
  edited,
  onLearnMore
}) => {
  const { store, actions } = useContext(Context);

  const itemUid = uid || _id || name + Math.random().toString(36).substr(2, 9);
  const isFavorite = store.favorites.some((favorite) => favorite.uid === itemUid);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      actions.removeFavorite(itemUid);
    } else {
      actions.addFavorite({
        name,
        gender,
        hairColor,
        eyeColor,
        height,
        mass,
        skinColor,
        birthYear,
        homeworld,
        url,
        population,
        terrain,
        imageUrl,
        description,
        _id,
        uid: itemUid,
        __v,
        created,
        edited
      });
    }
  };

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          {description && <p className="card-text mb-1">Description: {description}</p>}
          {gender && <p className="card-text mb-1">Gender: {gender}</p>}
          {hairColor && <p className="card-text mb-1">Hair Color: {hairColor}</p>}
          {eyeColor && <p className="card-text mb-1">Eye Color: {eyeColor}</p>}
          {height && <p className="card-text mb-1">Height: {height} cm</p>}
          {mass && <p className="card-text mb-1">Mass: {mass} kg</p>}
          {skinColor && <p className="card-text mb-1">Skin Color: {skinColor}</p>}
          {birthYear && <p className="card-text mb-1">Birth Year: {birthYear}</p>}
          {homeworld && <p className="card-text mb-1">Homeworld: <a href={homeworld}>Link</a></p>}
          {population && <p className="card-text mb-1">Population: {population}</p>}
          {terrain && <p className="card-text mb-1">Terrain: {terrain}</p>}
          {_id && <p className="card-text mb-1">ID: {_id}</p>}
          {__v !== undefined && <p className="card-text mb-1">Version: {__v}</p>}
          {created && <p className="card-text mb-1">Created: {new Date(created).toLocaleString()}</p>}
          {edited && <p className="card-text mb-1">Edited: {new Date(edited).toLocaleString()}</p>}
          <div className="d-flex justify-content-between">
            <button onClick={onLearnMore} className="btn btn-primary mt-2">
              Learn more!
            </button>
            <button onClick={handleFavoriteToggle} className="btn btn-outline-warning mt-2">
              <i className={`fa${isFavorite ? 's' : 'r'} fa-heart`} style={{ color: isFavorite ? '#ffc107' : '' }}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ItemCard.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string,
  hairColor: PropTypes.string,
  eyeColor: PropTypes.string,
  height: PropTypes.string,
  mass: PropTypes.string,
  skinColor: PropTypes.string,
  birthYear: PropTypes.string,
  homeworld: PropTypes.string,
  url: PropTypes.string,
  population: PropTypes.string,
  terrain: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string,
  _id: PropTypes.string,
  uid: PropTypes.string,
  __v: PropTypes.number,
  created: PropTypes.string,
  edited: PropTypes.string,
  onLearnMore: PropTypes.func.isRequired
};