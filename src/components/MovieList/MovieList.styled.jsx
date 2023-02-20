import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyle = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;

  &:hover,
  &:focus {
    scale: 1.05;
  }
`;

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 4fr));
  grid-gap: 15px;
  margin: 0 auto;
  padding: 0 15px;
  list-style: none;
  justify-content: center;
  margin-top: 40px;
`;

export const MovieCard = styled.li`
  background-repeat: no-repeat;
  background-color: #16495b;
  border-radius: 3px;
  padding: 0px 0px 0px 0px;
  font-size: 15px;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 95%;
  padding: 5px;
`;

export const MovieTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  color: white;
  margin-top: 15px;
  padding: 0 7px;
  margin-bottom: 22px;
`;
