import styled from 'styled-components';

export const ReviewList = styled.ul`
  padding: 0 15px;
  margin: 0;
`;

export const ReviewListItem = styled.li`
  background-color: #f1dddd;
  margin-bottom: 26px;
  padding: 15px 15px;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const AuthorImg = styled.img`
  display: block;
  width: 32px;
  height: 32px;
  object-fit: cover;
  padding: 2px;
`;

export const ReviewContent = styled.p`
  font-weight: normal;
  font-size: 13px;
  line-height: 17px;
  color: #042936;
  margin-left: 8px;
`;

export const AuthorName = styled.p`
  color: #042936;
  font-size: 13px;
  font-weight: bold;
`;
