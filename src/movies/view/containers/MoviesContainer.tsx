import React from 'react';
import MaterialBox from '../../../common/view/components/material-box/MaterialBox';
import MaterialContainer from '../../../common/view/components/material-container/MaterialContainer';
import { useGetMoviesDiscoveryQuery } from '../../data/repositories/MoviesRepository';
import style from './MoviesContainer.module.scss';
import { ClipLoader } from 'react-spinners';
import MovieCard from '../components/movie-card/MovieCard';
import Button from '@material-ui/core/Button';
import { useRouter } from 'next/router';
import { IMovie } from '../../domain/models/Movie';
import { useMovieDispatch, useMovieSelector } from '../state/hook';
import {
  setCurrentMovie,
  setIncrementStep,
} from '../state/reducer/slice/movieSlice';

const MoviesContainer = () => {
  const { data, isLoading } = useGetMoviesDiscoveryQuery('');
  const movieStep = useMovieSelector((state) => state.movies.step);
  const router = useRouter();
  const dispatch = useMovieDispatch();

  const handleOnClick = (movie: IMovie) => {
    dispatch(setCurrentMovie(movie));
    void router.push(`/movies/${movie.id}`);
  };
  const handleNext = () => {
    dispatch(setIncrementStep());
  };

  const currentElement = data?.results.find(
    (item, index) => index === movieStep
  );

  return (
    <section className={style['movies-container']}>
      <MaterialContainer maxWidth="md">
        {isLoading ? (
          <MaterialBox>
            <ClipLoader />
          </MaterialBox>
        ) : (
          <>
            <MaterialBox>
              <MovieCard
                preview
                data={currentElement}
                renderAction={
                  <Button onClick={() => handleOnClick(currentElement)}>
                    See More
                  </Button>
                }
              />
            </MaterialBox>
            <Button onClick={handleNext}>Next Movie</Button>
          </>
        )}
      </MaterialContainer>
    </section>
  );
};

export default MoviesContainer;
