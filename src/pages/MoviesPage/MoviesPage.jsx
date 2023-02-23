import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MovieList/MovieList';
import { loadMovieOnSearch } from 'services/movies-api';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Sections } from 'pages/HomePage/HomePage.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams] = useSearchParams();

  const location = useLocation();
  const searchQuery = searchParams.get('search');

  useEffect(() => {
    if (!searchQuery) return;
    loadMovieOnSearch(searchQuery)
      .then(data => {
        if (data.length === 0) {
          toast.warn(`No result by "${searchQuery}." Try something else`);
        }
        setMovies(data);
      })
      .catch(error => console.log(error));

    loadMovieOnSearch();
  }, [searchQuery]);

  return (
    <Sections>
      <ToastContainer />
      <SearchBar />
      {movies && <MoviesList movies={movies} state={{ from: location }} />}
    </Sections>
  );
};
export default Movies;
