import { useLocation } from 'react-router-dom';
import { Sections } from 'pages/HomePage/HomePage.styled';
import { ButtonLink } from 'pages/MovieDetailsPage/MovieDetailsPage.styled';
import {
  NotFoundWrapper,
  Styled404,
  SubTitle404,
  Title404,
  ErrorTitle,
} from './PageError.styled';

const NotFound = () => {
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
  return (
    <Sections>
      <NotFoundWrapper>
        <Styled404>
          <Title404>404</Title404>
          <SubTitle404>ERROR</SubTitle404>
        </Styled404>
        <ErrorTitle>Page Not Found</ErrorTitle>
        <ButtonLink to={backLink}>Home page</ButtonLink>
      </NotFoundWrapper>
    </Sections>
  );
};
export default NotFound;
