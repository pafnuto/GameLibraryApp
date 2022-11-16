  export type GameTypes = {
    genre_id: number;
    title: string;
    year: number;
    genre: string;
    developer: string;
    publisher: string;
    language: string;
    country: string;
    poster: string;
    ratings: Rating[];
    igdbID: string;
    igdbRating: string;
    igdbVotes: string;
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
  