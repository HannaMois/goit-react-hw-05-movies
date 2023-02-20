import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.header`
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #706d69;
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  background-color: #dfb9b9;
`;

export const NavList = styled.ul`
  align-items: center;
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 20px;
`;

export const NavListLink = styled(NavLink)`
  padding: 15px 5px;
  text-decoration: none;
  font-size: 30px;
  text-transform: uppercase;
  color: #706d69;

  &:hover,
  &:focus {
    color: white;
    font-weight: bold;
  }
  &.active {
    color: #042936;
    font-weight: bold;
    text-decoration: overline;

    &:hover,
    &:focus {
      color: #042936;
    }
  }
`;
