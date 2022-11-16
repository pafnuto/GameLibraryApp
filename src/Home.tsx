import React, { useState, useEffect, useCallback } from "react";
import  Header  from './Components/Header/Header';
import  Navbar  from './Components/Navbar/Navbar';
import  Footer from './Components/Footer/Footer';
import { GameTypes as Games } from './GameTypes';
import { Box } from "@mui/system";
import { Modal } from "@mui/material";
import {useGames} from './useGames';
import './App.scss'

const Home = () => {
    const [isOpen, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("");
    const allGames = useGames();
    const [game, setGame] = useState<Games[]>(allGames);
    const [sortByOption, setSortByOption] = useState("");
    const [toggle, setToggle] = useState(false);
    const [selectedGame, setSelectedGame] = useState({} as Games);

    useEffect(() => {
        sortByGenre();
      }, [activeTab, sortByOption]);
    
      const handleOpen = () => setOpen(true);
    
      const handleClose = () => setOpen(false);
    
      const isMovieGenreActive = (game: Games) =>
        game.genre.toLowerCase().includes(activeTab.toLowerCase());
    
      const sortByGenre = () => {
        const sortedGames = allGames.filter((game) => isMovieGenreActive(game));
        if (sortByOption === "release date") sortByDate(sortedMovies);
        else if (sortByOption === "duration") sortByDuration(sortedMovies);
        else sortByRating(sortedMovies);
      };
    
      const sortByRating = useCallback(
        (movies: Movie[]) =>
          setMovies(movies.sort((a, b) => +b.imdbRating - +a.imdbRating)),
        [sortByOption]
      );
    
      const sortByDuration = useCallback(
        (movies: Movie[]) =>
          setMovies(
            movies.sort((a, b) => parseInt(b.runtime) - parseInt(a.runtime))
          ),
        [sortByOption]
      );
    
      const sortByDate = useCallback(
        (movies: Movie[]) =>
          setMovies(
            movies.sort((a, b) => +new Date(b.released) - +new Date(a.released))
          ),
        [sortByOption]
      );
    
      const onClick = (id: string) => {
        const movie = movies.find((movie: Movie) => movie.imdbID === id);
        if (movie) {
          setSelectedMovie(movie);
          setToggle(true);
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
      };

    return (
        <div>
          <Navbar toggle={setToggle} openModal={handleOpen} />
          <div className='container'>
            <div className='blur'>
              {!toggle ? <Header /> : <MovieDetails movie={selectedMovie} />}
            </div>
          </div>
    
          <Box>
            {
              <FiltersTab
                setActiveTab={setActiveTab}
                setSortByOption={setSortByOption}
                value={activeTab}
              />
            }
          </Box>
          <Modal
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="add-movie-modal-title"
            aria-describedby="add-movie-modal-description"
          >
            <Box className="modal">
              <AddMovieModal />
            </Box>
          </Modal>
          <ErrorBoundary>
            <MoviesList onClick={onClick} movies={movies} />
          </ErrorBoundary>
          <Footer />
        </div>
      );
    };

export default Home;