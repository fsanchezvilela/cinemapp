import React from 'react';
import { IMovie } from '../../../domain/models/Movie';
import style from './MovieCard.module.scss';

interface IMovieCard {
  data: IMovie;
}

const MovieCard = ({
  data: { title, imgUrl, description, voteAvg, voteCount },
}: IMovieCard) => {
  return (
    <div className={style['movie-card']}>
      <h1>{title}</h1>
      <img src={''} alt={`${imgUrl}`} />
      <p>{description}</p>
      <p>{`${voteAvg} ${voteCount}`}</p>
    </div>
  );
};

export default MovieCard;
