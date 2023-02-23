import { Suspense, useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { loadFullInfoMovie } from 'services/movies-api';
import { Sections, Title } from 'pages/HomePage/HomePage.styled';
import {
  AdditionalWrapper,
  BtnInfoWrapper,
  BtnText,
  ButtonLink,
  DetailsWrapper,
  Img,
  InfoWrapper,
  MovieWrapper,
  SectionWrapper,
  TitleDetails,
} from './MovieDetailsPage.styled';

import image from '../../images/image1.jpg';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const ProfilePoster = posterLink =>
  posterLink ? BASE_URL + posterLink : image;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';

  useEffect(() => {
    loadFullInfoMovie(movieId).then(setMovieInfo);
  }, [movieId]);

  if (!movieInfo) {
    return null;
  }

  const { vote_average, title, overview, genres, poster_path, release_date } =
    movieInfo;
  const posterLink = BASE_URL + poster_path;
  const userScore = parseInt(vote_average * 10);
  const genresInfo = genres.map(el => el.name).join(', ');
  const releaseYear = release_date.split('-')[0];

  return (
    <InfoWrapper>
      <Sections>
        <SectionWrapper>
          <ButtonLink to={backLink}>Go Back</ButtonLink>
          <MovieWrapper>
            <Img src={ProfilePoster(poster_path)} alt={`${title} poster`} />
            <AdditionalWrapper>
              <DetailsWrapper>
                <TitleDetails>
                  {title} ({releaseYear})
                </TitleDetails>
                <p>User Score: {userScore}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{genresInfo}</p>
              </DetailsWrapper>
              <DetailsWrapper>
                <Title>Additional information</Title>
                <BtnInfoWrapper>
                  <li>
                    <ButtonLink to="cast" state={location.state}>
                      <BtnText>Cast</BtnText>
                    </ButtonLink>
                  </li>
                  <li>
                    <ButtonLink to="reviews" state={location.state}>
                      <BtnText>Reviews</BtnText>
                    </ButtonLink>
                  </li>
                </BtnInfoWrapper>
              </DetailsWrapper>
            </AdditionalWrapper>
          </MovieWrapper>
        </SectionWrapper>
      </Sections>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </InfoWrapper>
  );
};
export default MovieDetails;
