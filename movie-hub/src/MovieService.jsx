import axios from 'axios';

const API_KEY = '6a5224df';  // Replace with your OMDb API key
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovies = async (searchTerm) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        s: searchTerm,
        apikey: API_KEY,
      },
    });

    if (response.data.Response === 'True') {
      const movies = response.data.Search;
      const movieDetails = await Promise.all(
        movies.map(async (movie) => {
          const details = await axios.get(BASE_URL, {
            params: {
              i: movie.imdbID,
              apikey: API_KEY,
            },
          });
          return details.data;
        })
      );
      return movieDetails;
    } else {
      throw new Error(response.data.Error);
    }
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};
