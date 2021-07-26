import React from 'react';
import Button from '../../../../common/view/components/button/Button';
import { IMovie } from '../../../domain/models/Movie';
import { useMovieDispatch, useMovieSelector } from '../../state/hook';
import { setIncrementByAmount } from '../../state/reducer/slice/movieSlice';
import style from './MovieCard.module.scss';

interface IMovieCard {
  data: IMovie | null;
  preview?: boolean;
  renderAction: React.ReactNode;
}

const MovieCard = ({ data, preview = false, renderAction }: IMovieCard) => {
  const dispatch = useMovieDispatch();
  const step = useMovieSelector((state) => state.movies.step);
  const handleReset = () => {
    dispatch(setIncrementByAmount(-step));
  };

  return data ? (
    <div className={style['movie-card']}>
      <h1>{data.title}</h1>
      <img src={''} alt={`${data.imgUrl}`} />
      {!preview && <p> {data.description}</p>}
      <p>{`${data.voteAvg} ${data.voteCount}`}</p>
      {renderAction}
    </div>
  ) : (
    <Button onClick={handleReset}>No more Cards, Start from begining?</Button>
  );
};

export default MovieCard;
