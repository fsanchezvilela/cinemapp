import React from 'react';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';
import { useGetMoviesDiscoveryQuery } from '../src/movies/data/repositories/MoviesRepository';
import { Provider } from 'react-redux';
import { store as MovieStore } from '../src/movies/view/state/store';
import MovieCard from '../src/movies/view/components/movie-card/MovieCard';
import MaterialBox from '../src/common/view/components/box/MaterialBox';
import MaterialContainer from '../src/common/view/components/container/MaterialContainer';
import styles from '../src/movies/view/containers/MoviesContainer.module.scss';

const Detail = () => {
  const router = useRouter();
  const { data } = useGetMoviesDiscoveryQuery('');
  const { movieid } = router.query;
  const currentMovieData = data?.results.find(
    (element) => element.id.toString() === movieid
  );
  return (
    <section className={styles['movies-container']}>
      <MaterialContainer>
        <MaterialBox>
          <>
            <p>Post: {movieid}</p>
            <MovieCard data={currentMovieData ?? null}></MovieCard>
            <Button
              onClick={() => {
                router.back();
              }}
            >
              Go Back
            </Button>
          </>
        </MaterialBox>
      </MaterialContainer>
    </section>
  );
};

const DetailContainer = () => {
  return (
    <Provider store={MovieStore}>
      <Detail />
    </Provider>
  );
};

export default DetailContainer;
