import styled from 'styled-components/macro';

export const PlaylistComponent = styled.div`
  min-width: 185px;
  width: 100%;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  background: #121212;
  margin-bottom: 80px;
  padding-block: 10px;
  min-height: 250px;
  height: 100%;
`;

export const Button = styled.button``;

export const Img = styled.img`
  width: 90%;
  border-radius: 6px;
  margin-inline: auto;
  padding-block: 5%;
`;

export const FlexBox = styled.div`
  margin: 10px;
  background: #181818;
  border-radius: 5px;
  transition: 0.2s linear;
  text-align: center;
  padding-inline: 4px;
  padding-bottm: 10%;

  &:hover {
    background: #282828;
  }
`;

export const PlaylistHeading = styled.h4`
  color: white;
  text-align: left;
  text-decoration: none;
  padding: 0;
  margin: 0;
  margin-top: 5px;
  margin-inline: 10px;
`;

export const PlaylistAuthor = styled.h5`
  color: #ccc;
  text-align: left;
  margin: 0;
  padding: 0;
  margin-top: 5px;
  margin-inline: 10px;
  padding-bottom: 20px;
`;
