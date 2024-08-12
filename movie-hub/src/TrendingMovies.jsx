import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchMovies } from './MovieService';
import MovieCard from './MovieCard';

const Section = styled.section`
  padding: 40px;
  background-color: black;
  color: white;
`;

const Title = styled.h2`
  color: red;
  text-align: center;
`;

const Subtitle = styled.h3`
  text-align: center;
`;

const MoviesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const moviesData = await fetchMovies('popular');
      setMovies(moviesData);
      setLoading(false);
    };

    getMovies();
  }, []);

  return (
    <Section>
      <Title>Trending Movies</Title>
      <Subtitle>Every thing you want is here</Subtitle>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MoviesContainer>
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </MoviesContainer>
      )}
    </Section>
  );
};

export default TrendingMovies;
