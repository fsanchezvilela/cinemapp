import React from 'react';
import Button from '@material-ui/core/Button';
import MovieCard from '../../src/movies/view/components/movie-card/MovieCard';
import MaterialBox from '../../src/common/view/components/box/MaterialBox';
import MaterialContainer from '../../src/common/view/components/container/MaterialContainer';

import { useRouter } from 'next/router';
import { useGetMoviesDiscoveryQuery } from '../../src/movies/data/repositories/MoviesRepository';
import { Provider } from 'react-redux';
import { store as MovieStore } from '../../src/movies/view/state/store';
import { useMovieDispatch } from '../../src/movies/view/state/hook';
import { setCurrentMovie } from '../../src/movies/view/state/reducer/slice/movieSlice';
import { IMovie } from '../../src/movies/domain/models/Movie';

import styles from '../../src/movies/view/containers/MoviesContainer.module.scss';

const MovieDetail = () => {
  const router = useRouter();
  const { data } = useGetMoviesDiscoveryQuery('');
  const dispatch = useMovieDispatch();

  const { movieid } = router.query;

  const currentMovieData = data?.results.find(
    (element) => element.id.toString() === movieid
  );

  const handleOnClick = (movie: IMovie) => {
    dispatch(setCurrentMovie(movie));
    void router.back();
  };

  return (
    <section className={styles['movies-container']}>
      <MaterialContainer>
        <MaterialBox>
          <>
            <p>Post: {movieid}</p>
            <MovieCard
              data={currentMovieData ?? null}
              renderAction={
                <Button onClick={() => handleOnClick(currentMovieData)}>
                  Go Back
                </Button>
              }
            />
          </>
        </MaterialBox>
      </MaterialContainer>
    </section>
  );
};

const MovieDetailContainer = () => {
  return (
    <Provider store={MovieStore}>
      <MovieDetail />
    </Provider>
  );
};

export default MovieDetailContainer;
