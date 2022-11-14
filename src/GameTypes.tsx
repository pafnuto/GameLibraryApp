  export type GameTypes = {
    genre_id: number;
    title: string;
    year: string;
    rated: string;
    released: string;
    runtime: string;
    genre: string;
    director: string;
    writer: string;
    actors: string;
    plot: string;
    language: string;
    country: string;
    poster: string;
    ratings: Rating[];
    metascore: string;
    metacriticRating: string;
    metacriticVotes: string;
    metacriticID: string;
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
  