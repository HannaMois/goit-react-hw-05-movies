import { MoviesList } from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { loadTrendingMovies } from 'services/movies-api';
import { Sections, Title } from './HomePage.styled';

const HomeView = () => {
  const [trendingMovies, setTrendigMovies] = useState([]);
  useEffect(() => {
    loadTrendingMovies().then(setTrendigMovies);
  }, []);

  return (
    <Sections>
      <Title>Movies are trending today:</Title>
      <MoviesList movies={trendingMovies} link={'movies/'}></MoviesList>
    </Sections>
  );
};

export default HomeView;
