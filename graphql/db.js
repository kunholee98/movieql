export const people = [
    {
        id: 1,
        name: "Nicolas",
        age: 18,
        gender: "female"
    },
    {
        id: 2,
        name: "James",
        age: 19,
        gender: "male"
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        gender: "male"
    },
];

let movies = [
    {
        id: 0,
        name: "Star Wars - The new one",
        score: 1
    },
    {
        id: 1,
        name: "Avengers - The new one",
        score: 8
    },
    {
        id: 2,
        name: "The Godfather I",
        score: 77
    },
];

export const getMovies = () => movies;

const getById = id => {
    const filteredMovies = movies.filter(movie => id === movie.id);
    return filteredMovies[0];
};

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }
    else {
        return false;
    }
};

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length + 1, 
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}