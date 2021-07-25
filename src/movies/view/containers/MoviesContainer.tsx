import React from 'react';
import MaterialBox from '../../../common/view/components/box/MaterialBox';
import MaterialContainer from '../../../common/view/components/container/MaterialContainer';
import { useGetMoviesDiscoveryQuery } from '../../data/repositories/MoviesRepository';
import style from './MoviesContainer.module.scss';
import { ClipLoader } from 'react-spinners';
import MovieCard from '../components/movie-card/MovieCard';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';

const MoviesContainer = () => {
  const { data, isLoading } = useGetMoviesDiscoveryQuery('');
  const router = useRouter();
  return (
    <section className={style['movies-container']}>
      <MaterialContainer maxWidth="md">
        {isLoading ? (
          <ClipLoader />
        ) : (
          <MaterialBox>
            <MovieCard data={data.results[0]} />
            <Button onClick={() => router.push(`/${data.results[0].id}`)}>
              See More
            </Button>
          </MaterialBox>
        )}
      </MaterialContainer>
    </section>
  );
};

export default MoviesContainer;
