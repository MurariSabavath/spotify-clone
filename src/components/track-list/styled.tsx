import styled from 'styled-components/macro';

export const Image = styled.img``;

export const Container = styled.tr`
  display: grid;
  width: 90%;
  margin: auto;
  grid-template-columns: 16px 6fr 4fr 3fr minmax(120px, 1fr);
  text-align: left;
  align-items: center;
  padding: 10px 20px;
  border-radius: 5px;

  div {
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  img {
    height: 40px;
    width: auto;
    padding: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MobileContainer = styled.div`
  display: none;
  padding: 10px;
  grid-template-columns: 10fr 2fr;
  text-overflow: ellipsis;

  div {
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    height: 40px;
    width: auto;
    padding: 0px 20px;
  }

  @media (max-width: 768px) {
    display: grid;
  }
`;

export const TrackNameContainer = styled.div`
  div {
    padding: 2px 0;
  }
`;
