export class Movie implements IMovie {
  id: IMovie['id'];
  title: IMovie['title'];
  description: IMovie['description'];
  voteAvg: IMovie['voteAvg'];
  voteCount: IMovie['voteCount'];
  imgUrl: IMovie['imgUrl'];

  constructor(movie: IMovie) {
    this.description = movie.description;
    this.id = movie.id;
    this.title = movie.title;
    this.voteAvg = movie.voteAvg;
    this.imgUrl = movie.imgUrl;
  }
}

export interface IMovie {
  id: number;
  title: string;
  description: string;
  voteAvg: number;
  voteCount?: number;
  imgUrl?: string;
}
