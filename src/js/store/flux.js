import characterImages from '../data/characterImages.json';
import planetImages from '../data/planetImages.json';

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            character: null,
            planets: [],
            planet: null,
            favorites: [],
        },
        actions: {
            loadCharacters: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/people');
                    const data = await response.json();
                    const charactersData = await Promise.all(data.results.map(async (character) => {
                        const characterResponse = await fetch(character.url);
                        const characterDetails = await characterResponse.json();
                        const imageUrl = characterImages[characterDetails.result.properties.name] || 'https://via.placeholder.com/400x200';

                        return {
                            name: characterDetails.result.properties.name,
                            gender: characterDetails.result.properties.gender,
                            hairColor: characterDetails.result.properties.hair_color,
                            eyeColor: characterDetails.result.properties.eye_color,
                            height: characterDetails.result.properties.height,
                            mass: characterDetails.result.properties.mass,
                            skinColor: characterDetails.result.properties.skin_color,
                            birthYear: characterDetails.result.properties.birth_year,
                            homeworld: characterDetails.result.properties.homeworld,
                            url: characterDetails.result.properties.url,
                            imageUrl: imageUrl,
                            description: characterDetails.result.description,
                            _id: characterDetails.result._id,
                            uid: characterDetails.result.uid,
                            __v: characterDetails.result.__v,
                            created: characterDetails.result.properties.created,
                            edited: characterDetails.result.properties.edited
                        };
                    }));
                    setStore({ characters: charactersData });
                } catch (error) {
                    console.error("Error fetching characters:", error);
                }
            },
            loadPlanets: async () => {
                try {
                    const response = await fetch('https://www.swapi.tech/api/planets');
                    const data = await response.json();
                    const planetsData = await Promise.all(data.results.map(async (planet) => {
                        const planetResponse = await fetch(planet.url);
                        const planetDetails = await planetResponse.json();
                        const imageUrl = planetImages[planetDetails.result.properties.name] || 'https://via.placeholder.com/400x200';

                        return {
                            name: planetDetails.result.properties.name,
                            population: planetDetails.result.properties.population,
                            terrain: planetDetails.result.properties.terrain,
                            diameter: planetDetails.result.properties.diameter,
                            rotationPeriod: planetDetails.result.properties.rotation_period,
                            orbitalPeriod: planetDetails.result.properties.orbital_period,
                            climate: planetDetails.result.properties.climate,
                            surfaceWater: planetDetails.result.properties.surface_water,
                            gravity: planetDetails.result.properties.gravity,
                            imageUrl: imageUrl,
                            description: planetDetails.result.description,
                            _id: planetDetails.result._id,
                            uid: planetDetails.result.uid,
                            __v: planetDetails.result.__v,
                            created: planetDetails.result.properties.created,
                            edited: planetDetails.result.properties.edited
                        };
                    }));
                    setStore({ planets: planetsData });
                } catch (error) {
                    console.error("Error fetching planets:", error);
                }
            },
            loadCharacter: async (uid) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/people/${uid}`);
                    const data = await response.json();
                    const imageUrl = characterImages[data.result.properties.name] || 'https://via.placeholder.com/800x600';
                    const characterDetails = {
                        name: data.result.properties.name,
                        gender: data.result.properties.gender,
                        hairColor: data.result.properties.hair_color,
                        eyeColor: data.result.properties.eye_color,
                        height: data.result.properties.height,
                        mass: data.result.properties.mass,
                        skinColor: data.result.properties.skin_color,
                        birthYear: data.result.properties.birth_year,
                        homeworld: data.result.properties.homeworld,
                        url: data.result.properties.url,
                        imageUrl: imageUrl,
                        description: data.result.description,
                        _id: data.result._id,
                        uid: data.result.uid,
                        __v: data.result.__v,
                        created: data.result.properties.created,
                        edited: data.result.properties.edited
                    };
                    setStore({ character: characterDetails });
                } catch (error) {
                    console.error("Error fetching character details:", error);
                }
            },
            loadPlanet: async (uid) => {
                try {
                    const response = await fetch(`https://www.swapi.tech/api/planets/${uid}`);
                    const data = await response.json();
                    const imageUrl = planetImages[data.result.properties.name] || 'https://via.placeholder.com/800x600';
                    const planetDetails = {
                        name: data.result.properties.name,
                        population: data.result.properties.population,
                        terrain: data.result.properties.terrain,
                        diameter: data.result.properties.diameter,
                        rotationPeriod: data.result.properties.rotation_period,
                        orbitalPeriod: data.result.properties.orbital_period,
                        climate: data.result.properties.climate,
                        surfaceWater: data.result.properties.surface_water,
                        gravity: data.result.properties.gravity,
                        imageUrl: imageUrl,
                        description: data.result.description,
                        _id: data.result._id,
                        uid: data.result.uid,
                        __v: data.result.__v,
                        created: data.result.properties.created,
                        edited: data.result.properties.edited
                    };
                    setStore({ planet: planetDetails });
                } catch (error) {
                    console.error("Error fetching planet details:", error);
                }
            },
            addFavorite: (item) => {
                const store = getStore();
                const updatedFavorites = [...store.favorites, item];
                setStore({ favorites: updatedFavorites });
            },
            removeFavorite: (uid) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter(favorite => favorite.uid !== uid);
                setStore({ favorites: updatedFavorites });
            }
        }
    };
};

export default getState;