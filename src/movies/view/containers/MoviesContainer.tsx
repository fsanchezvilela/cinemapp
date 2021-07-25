import React from 'react';
import { useGetMoviesDiscoveryQuery } from '../../data/repositories/MoviesRepository';

const MoviesContainer = () => {
  const { data, isLoading } = useGetMoviesDiscoveryQuery('');

  return isLoading ? (
    <h1>loading</h1>
  ) : (
    <div>
      <h1>{data?.results[0].title}</h1>
    </div>
  );
};

export default MoviesContainer;
