import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonLink = styled(Link)`
  display: block;
  border-radius: 5px;
  background-color: #042936;
  width: 80px;
  padding: 5px 15px;
  font-size: 15px;
  line-height: 30px;
  text-decoration: none;
  color: white;
  &:hover,
  &:focus {
    scale: 1.05;
  }
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
  gap: 30px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const AdditionalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const TitleDetails = styled.h2`
  font-size: 30px;
`;

export const DetailsWrapper = styled.div`
  max-width: 400px;
  background-color: #f1dddd;
  backdrop-filter: blur(30px);
  padding: 10px;
  border-radius: 3px;
`;

export const Img = styled.img`
  display: block;
  max-width: 380px;
  width: 100%;
`;

export const MovieWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row-reverse;
  gap: 30px;
`;

export const BtnInfoWrapper = styled.ul`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 0;
  gap: 30px;
`;

export const BtnText = styled.span`
  font-size: 15px;
`;
