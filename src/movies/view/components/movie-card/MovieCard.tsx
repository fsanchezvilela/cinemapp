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
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w185/${data.imgUrl})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          backgroundPosition: 'center/center',
          backgroundOrigin: 'border-box',
          borderRadius: '1rem',
          position: 'absolute',
          zIndex: 1,
        }}
      />
      <h1>{data.title}</h1>
      <figure>
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/w185/${data.imgUrl}`}
          alt={`${data.imgUrl}`}
        />
      </figure>

      {!preview && (
        <p className={style['movie-card__description']}>{data.description}</p>
      )}
      <div className={style['movie-card__rating']}>
        <p
          className={style['movie-card__score']}
        >{`Rating: ${data.voteAvg} / 10`}</p>
        <p
          className={style['movie-card__total']}
        >{`Total votes: ${data.voteCount}`}</p>
      </div>
      {renderAction}
    </div>
  ) : (
    <Button onClick={handleReset}>No more Cards, Start from begining?</Button>
  );
};

export default MovieCard;
