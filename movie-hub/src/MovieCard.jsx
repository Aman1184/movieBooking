import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  width: 200px;
  margin: 20px;
  text-align: center;
`;

const Poster = styled.img`
  width: 100%;
  height: 300px;
`;

const Title = styled.h3`
  color: red;
  margin: 10px 0;
`;

const Details = styled.div`
  padding: 10px;
  text-align: left;
`;

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <Poster src={movie.Poster} alt={movie.Title} />
      <Details>
        <Title>{movie.Title}</Title>
        <p>{movie.Runtime} | {movie.Released}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>IMDb rating:</strong> {movie.imdbRating}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Writers:</strong> {movie.Writer}</p>
        <p><strong>Stars:</strong> {movie.Actors}</p>
      </Details>
    </Card>
  );
};

export default MovieCard;
