import React, { useState, useEffect } from 'react';
import HeaderPanel from "./components/header/HeaderPanel";
import AddMovieModal from './components/modal/AddMovieModal';
import MoviesList from './components/movies/MoviesList';
import "./assets/styles/style.scss";
import basicMovies from "./assets/basicMovies/basicMovies";



const App = () => {
  const localMovies = JSON.parse(localStorage.getItem("movies")) || null;

  const [movies, setMovies] = useState(localMovies || basicMovies);
  const [openModal, setOpenModal] = useState(false);


  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);


  const onAddMovie = movie => {
    setMovies([movie, ...movies]);
  };


  const onCloseDeleteModal = () => {
    setOpenModal(false);
  };


  const onOpenDeleteModal = () => {
    setOpenModal(true);
  };



  return (
    <div className="container">

      {openModal &&
        <AddMovieModal
          onCloseDeleteModal={onCloseDeleteModal}
          onAddMovie={onAddMovie}
          setOpenModal={setOpenModal}
        />
      }

      <HeaderPanel
        onOpenDeleteModal={onOpenDeleteModal}
      />

      <MoviesList
        movies={movies}
      />

    </div>
  );
};


export default App;
