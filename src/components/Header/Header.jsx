import { NavList, NavListLink, NavWrapper } from './Header.styled';

export const Header = () => {
  return (
    <NavWrapper>
      <nav>
        <NavList>
          <li>
            <NavListLink to="/" end>
              Home
            </NavListLink>
          </li>
          <li>
            <NavListLink to="movies">Movies</NavListLink>
          </li>
        </NavList>
      </nav>
    </NavWrapper>
  );
};
