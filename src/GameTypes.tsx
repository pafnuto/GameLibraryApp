  export type GameTypes = {
    genre_id: number;
    title: string;
    year: number;
    rated: string;
    released: string;
    genre: string;
    developer: string;
    publisher: string;
    language: string;
    country: string;
    poster: string;
    ratings: Rating[];
    igdb: string;
    igdbRating: string;
    igdbVotes: string;
    igdbID: string;
    type: string;
    production: string;
    website: string;
    response: string;
  };
  
  export type ButtonProps = {
    text: string;
    className?: string;
    onClick?: () => void;
  };

  type Rating = {
    source: string;
    value: string;
  };
  