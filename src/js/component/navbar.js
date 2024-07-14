import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const handleRemoveFavorite = (uid, event) => {
    event.stopPropagation();
    actions.removeFavorite(uid);
  };

  const handleAddFavorite = (item) => {
    actions.addFavorite(item);
  };

  return (
    <nav className="navbar navbar-light bg-light mb-3" style={{ padding: '0 30px' }}>
      <Link to="/">
        <img
          src="https://i.pinimg.com/originals/c6/8c/0f/c68c0f53d50ea8aa4a21b6374814b4a2.jpg"
          alt="Star Wars Logo"
          style={{ height: '40px' }}
        />
      </Link>
      <div className="ml-auto">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded={dropdownOpen}
            onClick={toggleDropdown}
          >
            Favorites ({store.favorites.length})
          </button>
          <ul className={`dropdown-menu dropdown-menu-end ${dropdownOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
            {store.favorites.length === 0 ? (
              <li className="dropdown-item">No favorites added</li>
            ) : (
              store.favorites.map((item, index) => (
                <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                  <span>{item.name}</span>
                  <button onClick={(event) => handleRemoveFavorite(item.uid, event)} className="btn btn-danger btn-sm">
                    Remove
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};