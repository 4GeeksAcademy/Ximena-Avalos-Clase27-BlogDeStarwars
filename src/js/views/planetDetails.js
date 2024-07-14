import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';

export const PlanetDetails = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    useEffect(() => {
        actions.loadPlanet(uid);
    }, [uid]);

    const planet = store.planet;

    if (!planet) {
        return <p>Loading planet details...</p>;
    }

    return (
        <div className="container my-4">
            <div className="row align-items-center">
                <div className="col-md-6 text-center">
                    <img src={planet.imageUrl} alt={planet.name} className="img-fluid mb-4" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                </div>
                <div className="col-md-6 text-center">
                    <h1>{planet.name}</h1>
                    <p className="lead">{planet.description}</p>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12">
                    <table className="table table-borderless text-center">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Climate</th>
                                <th>Population</th>
                                <th>Orbital Period</th>
                                <th>Rotation Period</th>
                                <th>Diameter</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{planet.name}</td>
                                <td>{planet.climate}</td>
                                <td>{planet.population}</td>
                                <td>{planet.orbitalPeriod}</td>
                                <td>{planet.rotationPeriod}</td>
                                <td>{planet.diameter}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};