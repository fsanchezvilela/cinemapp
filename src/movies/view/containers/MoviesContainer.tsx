import React from 'react';
import MaterialContainer from '../../../common/view/components/container/MaterialContainer';
import { useGetMoviesDiscoveryQuery } from '../../data/repositories/MoviesRepository';

const MoviesContainer = () => {
  const { data, isLoading } = useGetMoviesDiscoveryQuery('');

  return (
    <div style={{ background: 'lightblue' }}>
      <MaterialContainer>
        {isLoading ? (
          <h1>loading</h1>
        ) : (
          <div>
            <h1>{data?.results[0].title}</h1>
          </div>
        )}
      </MaterialContainer>
    </div>
  );
};

export default MoviesContainer;
