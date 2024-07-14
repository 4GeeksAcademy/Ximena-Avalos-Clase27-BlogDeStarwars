import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';

export const CharacterDetails = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.loadCharacter(uid);
    }, [uid]);

    const character = store.character;

    if (!character) {
        return <p>Loading character details...</p>;
    }

    return (
        <div className="container my-4">
            <div className="row align-items-center">
                <div className="col-md-6 text-center">
                    <img src={character.imageUrl} alt={character.name} className="img-fluid mb-4" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                </div>
                <div className="col-md-6 text-center">
                    <h1>{character.name}</h1>
                    <p className="lead">{character.description}</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <table className="table table-borderless text-center">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Birth Year</th>
                                <th>Gender</th>
                                <th>Height</th>
                                <th>Skin Color</th>
                                <th>Eye Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{character.name}</td>
                                <td>{character.birthYear}</td>
                                <td>{character.gender}</td>
                                <td>{character.height}</td>
                                <td>{character.skinColor}</td>
                                <td>{character.eyeColor}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};